<?php get_header(); ?>
<div class="wrap">
		<div class="top">
			<?php $recent = new WP_Query("cat=8&showposts=3");
			$i = 0;
			while($recent->have_posts()) : $recent->the_post();			
			$str = array("one", "two", "three");
			?>
			<div class="<?php echo($str[$i]);$i++; ?>">
				<div class="icon"></div>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</div>
			<?php endwhile; wp_reset_postdata();?>
		</div> <!-- </top> -->
		
		<div class="content">

			<div class="preview">
			<?php $recent = new WP_Query("cat=9&showposts=3");
			while($recent->have_posts()) : $recent->the_post();	?>
				<article class="item">
					<h1><?php the_title(); ?></h1>
					<?php the_post_thumbnail(); ?>
						<?php the_excerpt(); ?>
					<p><a href="<?php the_permalink(); ?>">Read More &gt;</a></p>
				</article>
					<?php endwhile; wp_reset_postdata();?>
				</div>

				<?php get_sidebar(); ?>
		
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