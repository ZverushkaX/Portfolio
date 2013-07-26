<?php get_header();  ?>

	<div class="wrap">
		<div class="content">
		<div class="blog-page">
		<?php $recent = new WP_Query("cat=11");
		while($recent->have_posts()) : $recent->the_post(); ?>
		<article>
		<h1><?php the_title(); ?></h1>
		<?php 
		if (has_post_thumbnail()) :	 
			the_post_thumbnail('blog', array('class' => 'blog-img'));
		else : ?><img src="<?php bloginfo('template_url'); ?>/img/blog1.jpg" alt="blog1" class="blog-img"> 
		<?php endif;?>		
		<?php the_content(); ?>
		</article>
		<?php endwhile;  wp_reset_postdata();?>
		</div> <!-- </blog> -->
		</div> <!-- </content> -->

	<?php get_footer(); ?>