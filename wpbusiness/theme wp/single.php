<?php get_header(); ?>

	<div class="wrap">

		<div class="content">

			<?php get_sidebar(); ?>
			<?php if(have_posts()) : ?>
			<?php while(have_posts()) : the_post(); ?>
			<article>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</article>
		
			<?php endwhile; ?>
			<?php endif; ?>
			<div class="nav">
				<?php previous_post_link('%link &nbsp;&nbsp;'); ?>
				<?php next_post_link(); ?>
			</div>
		</div> <!-- </content> -->

	<?php get_footer(); ?>