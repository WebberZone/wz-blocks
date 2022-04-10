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
	TextControl,
	TextareaControl,
	ToggleControl,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	function processNumber(input) {
		const output =
			undefined === input || 0 === input || '' === input || isNaN(input)
				? ''
				: parseInt(input);
		return output;
	}

	const {
		number,
		daily,
		daily_range,
		hour_range,
		offset,
		showOptionCount,
		showFullName,
		excludeAdmin,
		hideEmptyAuthors,
		include,
		exclude,
		other_attributes,
	} = attributes;
	console.log(attributes);
	const blockProps = useBlockProps();
	const onChangeNumber = (newNumber) => {
		setAttributes({
			number:
				undefined === newNumber ? '' : newNumber,
		});
	};
	const toggleDaily = () => {
		setAttributes({ daily: !daily });
	};
	const onChangeDailyRange = (newDailyRange) => {
		setAttributes({ daily_range: processNumber(newDailyRange) });
	};
	const onChangeHourRange = (newHourRange) => {
		setAttributes({ hour_range: processNumber(newHourRange) });
	};
	const onChangeOffset = (newOffset) => {
		setAttributes({ offset: processNumber(newOffset) });
	};
	const toggleShowOptionCount = () => {
		setAttributes({ showOptionCount: !showOptionCount });
	};
	const toggleShowFullName = () => {
		setAttributes({ showFullName: !showFullName });
	};
	const toggleExcludeAdmin = () => {
		setAttributes({ excludeAdmin: !excludeAdmin });
	};
	const togglehideEmptyAuthors = () => {
		setAttributes({ hideEmptyAuthors: !hideEmptyAuthors });
	};
	const onChangeInclude = (newInclude) => {
		setAttributes({
			include:
				undefined === newInclude ? '' : newInclude,
		});
	};
	const onChangeExclude = (newExclude) => {
		setAttributes({
			exclude:
				undefined === newExclude ? '' : newExclude,
		});
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
					title={__('Popular Authors Settings', 'popular-authors')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Max authors to display', 'popular-authors')}
								value={number}
								onChange={onChangeNumber}
								help={__(
									'Value -1 (all authors) is supported, but should be used with caution on larger sites.',
									'popular-authors'
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Custom period?', 'top-10')}
								help={
									daily
										? __('Set range below', 'top-10')
										: __('Overall popular posts will be shown', 'top-10')
								}
								checked={daily}
								onChange={toggleDaily}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Daily range', 'top-10')}
								value={daily_range}
								onChange={onChangeDailyRange}
								help={__('Number of days', 'top-10')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Hour range', 'top-10')}
								value={hour_range}
								onChange={onChangeHourRange}
								help={__('Number of hours', 'top-10')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Offset', 'popular-authors')}
								value={offset}
								onChange={onChangeOffset}
								help={__(
									'Number of authors to offset in retrieved results. Only applies if number of author is >0',
									'popular-authors'
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show count', 'popular-authors')}
								help={
									showOptionCount
										? __('Count displayed', 'popular-authors')
										: __('No count displayed', 'popular-authors')
								}
								checked={showOptionCount}
								onChange={toggleShowOptionCount}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Show Full Name', 'popular-authors')}
								help={
									showFullName
										? __('Full Name is displayed', 'popular-authors')
										: __('Display Name is displayed', 'popular-authors')
								}
								checked={showFullName}
								onChange={toggleShowFullName}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Exclude admin', 'popular-authors')}
								help={
									excludeAdmin
										? __("'admin' account is excluded", 'popular-authors')
										: __("'admin' account is included", 'popular-authors')
								}
								checked={excludeAdmin}
								onChange={toggleExcludeAdmin}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Hide authors with no posts', 'popular-authors')}
								help={
									hideEmptyAuthors
										? __('Authors with no posts are excluded', 'popular-authors')
										: __('Authors with no posts are included', 'popular-authors')
								}
								checked={hideEmptyAuthors}
								onChange={togglehideEmptyAuthors}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Author IDs to include', 'popular-authors')}
								value={include}
								onChange={onChangeInclude}
								help={__(
									'Comma-separated list of author IDs to include',
									'popular-authors'
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Author IDs to exclude', 'popular-authors')}
								value={exclude}
								onChange={onChangeExclude}
								help={__(
									'Comma-separated list of author IDs to exclude',
									'popular-authors'
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Other attributes', 'popular-authors')}
								value={other_attributes}
								onChange={onChangeOtherAttributes}
								help={__(
									'Enter other attributes in a URL-style string-query.',
									'popular-authors'
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<ServerSideRender
					block="popular-authors/popular-authors"
					attributes={attributes}
				/>
			</div>
		</>
	);
}
