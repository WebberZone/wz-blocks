<?php
/**
 * Plugin Name:       WebberZone Blocks Tester Plugin
 * Description:       Plugin used to build blocks for WebberZone plugins.
 * Requires at least: 5.6
 * Requires PHP:      7.1
 * Version:           0.4.1
 * Author:            WebberZone
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wz-blocks
 *
 * @package           wz-blocks
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
		'related-posts'   => 'render_crp_block', // Related Posts.
		'popular-posts'   => 'render_tptn_block', // Popular Posts.
		'popular-authors' => 'render_wzpa_block', // Popular Authors.
		'kb'              => 'render_wzkb_block', // Knowledge Base.
		'alerts'          => '', // Knowledge Base alerts.
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
