<div class="h5-game">
	<a href="<?php the_permalink() ?>" class="">
	  <div class="h5-game-content cf">
	    <div class="h5-game-icon" <?php if ( has_post_thumbnail()) { $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'thumbnail');echo 'style="background-image:url(' . $large_image_url[0] . ');"';}?>></div>
	    <div class="h5-game-body">
	      <h1 class="h5-game-name">
	        <?php the_title(); ?>
	      </h1>
	      <span><?php if(function_exists('the_views')) {the_views();} ?></span>
	    </div>
	  </div>
	</a>
</div>