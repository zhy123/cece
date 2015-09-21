<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 */

get_header(); ?>

<div class="h5-b2">
  <div class="h5-block">
    <div class="h5-body">
      <?php $posts = get_posts( "category=1&numberposts=9" ); ?>
			<?php if( $posts ) : ?>
      <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>
      
      <?php include 'h5-game-quarter.php'; ?>
      
      <?php endforeach; ?>
      <?php endif; ?>
      <div class="clearfix"></div>
    </div>
  </div>
</div>

<?php get_footer(); ?>