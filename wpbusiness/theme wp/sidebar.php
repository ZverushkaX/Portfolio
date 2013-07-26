			<aside class="blog">
			<?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar')) : ?>			
			<?php endif; ?>
				<h1>Hot from the blog</h1>
				<?php $recent = new WP_Query("cat=11&showposts=2");
		while($recent->have_posts()) : $recent->the_post(); ?>
		<article>
		<h1><?php the_title(); ?></h1>
		<?php 
		if (has_post_thumbnail()) :	 
			the_post_thumbnail('blog');
		else : ?><img src="<?php bloginfo('template_url'); ?>/img/blog1.jpg" alt="blog1"> 
		<?php endif;?>		
		<?php the_excerpt(); ?>
		</article>
		<?php endwhile;  wp_reset_postdata();?>
				<!-- <article>
					<img src="<?php bloginfo('template_url'); ?>/img/blog1.jpg" alt="blog1">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum aliquet orci.</p>
				</article>
				<article>
					<img src="<?php bloginfo('template_url'); ?>/img/blog2.jpg" alt="blog2">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum aliquet orci.</p>
				</article> -->
			</aside> <!-- </blog> -->