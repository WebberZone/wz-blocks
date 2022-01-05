<?php
/**
 * Plugin Name:       WebberZone Blocks Tester Plugin
 * Description:       Plugin used to build blocks for WebberZone plugins.
 * Requires at least: 5.6
 * Requires PHP:      7.1
 * Version:           0.1.0
 * Author:            WebberZone
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wz-blocks
 *
 * @package           wz-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function wz_register_blocks() {

	// Register blocks in the format $dir => $render_callback.
	$blocks = array(
		'kb'     => 'render_wzkb_block_test', // Knowledge Base.
		'alerts' => '', // Knowledge Base alerts.
	);

	foreach ( $blocks as $dir => $render_callback ) {
		$args = array();
		if ( ! empty( $render_callback ) ) {
			$args['render_callback'] = $render_callback;
		}
		register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/' . $dir . '/', $args );
	}
}
add_action( 'init', 'wz_register_blocks' );


/**
 * Renders the `knowledgebase/knowledgebase` block on server.
 *
 * @since 2.0.0
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_wzkb_block_test( $attributes ) {

	$attributes['extra_class'] = $attributes['className'];

	$arguments = array_merge(
		$attributes,
		array(
			'is_block' => 1,
		)
	);

	$arguments = wp_parse_args( $attributes['other_attributes'], $arguments );

	/**
	 * Filters arguments passed to get_wzkb for the block.
	 *
	 * @since 2.0.0
	 *
	 * @param array $arguments  Knowledge Base block options array.
	 * @param array $attributes Block attributes array.
	 */
	$arguments = apply_filters( 'wzkb_block_options', $arguments, $attributes );

	return wzkb_knowledge( $arguments );
}
