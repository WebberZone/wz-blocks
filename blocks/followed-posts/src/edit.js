/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import ServerSideRender from '@wordpress/server-side-render';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import {
	Disabled,
	TextControl,
	TextareaControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	SelectControl,
	RadioControl,
	Placeholder,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const postId =
		null === wp.data.select('core/editor')
			? 0
			: wp.data.select('core/editor').getCurrentPostId();
	const {
		heading,
		title,
		limit,
		show_excerpt,
		show_author,
		show_date,
		wherego_styles,
		post_thumb_op,
		other_attributes,
	} = attributes;

	const blockProps = useBlockProps();
	const toggleHeading = () => {
		setAttributes({ heading: !heading });
	};
	const onChangeTitle = (newTitle) => {
		setAttributes({
			title: undefined === newTitle ? '' : newTitle,
		});
	};
	const onChangeLimit = (newLimit) => {
		setAttributes({
			limit: undefined === newLimit ? '' : newLimit,
		});
	};
	const toggleShowExcerpt = () => {
		setAttributes({ show_excerpt: !show_excerpt });
	};
	const toggleShowAuthor = () => {
		setAttributes({ show_author: !show_author });
	};
	const toggleShowDate = () => {
		setAttributes({ show_date: !show_date });
	};
	const onChangeThumbnail = (newThumbnailLoc) => {
		setAttributes({ post_thumb_op: newThumbnailLoc });
	};
	const onChangePostStyle = (newPostStyle) => {
		setAttributes({ wherego_styles: newPostStyle });
	};
	const onChangeOtherAttributes = (newOtherAttributes) => {
		setAttributes({
			other_attributes:
				undefined === newOtherAttributes ? '' : newOtherAttributes,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Followed Posts Settings', 'where-did-they-go-from-here')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show heading', 'where-did-they-go-from-here')}
								help={
									heading
										? __('Heading displayed', 'where-did-they-go-from-here')
										: __('No Heading displayed', 'where-did-they-go-from-here')
								}
								checked={heading}
								onChange={toggleHeading}
							/>
						</fieldset>
					</PanelRow>
					{heading && (
						<PanelRow>
							<TextControl
								label={__('Heading of posts', 'where-did-they-go-from-here')}
								value={title}
								onChange={onChangeTitle}
								help={__(
									'Displayed before the list of the posts as a master heading. HTML allowed.',
									'where-did-they-go-from-here'
								)}
							/>
						</PanelRow>
					)}
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Number of posts', 'where-did-they-go-from-here')}
								value={limit}
								onChange={onChangeLimit}
								help={__(
									'Maximum number of posts to display',
									'where-did-they-go-from-here'
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show excerpt', 'where-did-they-go-from-here')}
								help={
									show_excerpt
										? __('Excerpt displayed', 'where-did-they-go-from-here')
										: __('No excerpt', 'where-did-they-go-from-here')
								}
								checked={show_excerpt}
								onChange={toggleShowExcerpt}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show author', 'where-did-they-go-from-here')}
								help={
									show_author
										? __(
											'"by Author Name" displayed',
											'where-did-they-go-from-here'
										)
										: __('No author displayed', 'where-did-they-go-from-here')
								}
								checked={show_author}
								onChange={toggleShowAuthor}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show date', 'where-did-they-go-from-here')}
								help={
									show_date
										? __('Date of post displayed', 'where-did-they-go-from-here')
										: __(
											'Date of post not displayed',
											'where-did-they-go-from-here'
										)
								}
								checked={show_date}
								onChange={toggleShowDate}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<SelectControl
								label={__('Styles', 'where-did-they-go-from-here')}
								value={wherego_styles}
								onChange={onChangePostStyle}
								help={__('Select the style of the Followed Posts', 'where-did-they-go-from-here')}
								options={[
									{ value: 'no_style', label: __('No styles', 'where-did-they-go-from-here') },
									{ value: 'text_only', label: __('Text only', 'where-did-they-go-from-here') },
									{
										value: 'grid',
										label: __('Grid Thumbnails', 'where-did-they-go-from-here'),
									},
								]}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<SelectControl
								label={__('Thumbnail option', 'where-did-they-go-from-here')}
								value={post_thumb_op}
								onChange={onChangeThumbnail}
								help={__(
									'Location of the post thumbnail',
									'where-did-they-go-from-here'
								)}
								options={[
									{
										value: 'inline',
										label: __('Before title', 'where-did-they-go-from-here'),
									},
									{
										value: 'after',
										label: __('After title', 'where-did-they-go-from-here'),
									},
									{
										value: 'thumbs_only',
										label: __('Only thumbnail', 'where-did-they-go-from-here'),
									},
									{
										value: 'text_only',
										label: __('Only text', 'where-did-they-go-from-here'),
									},
								]}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Other attributes', 'where-did-they-go-from-here')}
								value={other_attributes}
								onChange={onChangeOtherAttributes}
								help={__(
									'Enter other attributes in a URL-style string-query. e.g. post_types=post,page&link_nofollow=1&exclude_post_ids=5,6',
									'where-did-they-go-from-here'
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{!postId ? (
					<Placeholder
						icon={'editor-ul'}
						label={__('Followed Posts', 'where-did-they-go-from-here')}
						instructions={__(
							'This is a placeholder for the followed posts block. Visit the front end of your site to see the followed posts.',
							'where-did-they-go-from-here'
						)}
					></Placeholder>
				) : (
					<Disabled>
						<ServerSideRender
							block="webberzone/followed-posts"
							attributes={attributes}
						/>
					</Disabled>
				)}
			</div>
		</>
	);
}
