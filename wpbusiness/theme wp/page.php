<?php get_header(); ?>

	<div class="wrap">		

		<?php if (!is_front_page()) : ?><div class="content"> <?php endif; ?>			
			<?php if(have_posts()) : ?>
			<?php while(have_posts()) : the_post(); ?>
			<article>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>				
			</article>		
			<?php endwhile; ?>
			<?php endif; ?>		
		</div> <!-- </content> -->

	<?php get_footer(); ?>