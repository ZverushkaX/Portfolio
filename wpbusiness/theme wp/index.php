<?php get_header(); ?>

	<div class="wrap">		

		<div class="top">
			<div class="one">
				<div class="icon"></div>
				<h1>Lorem ipsum dolor</h1>
				<p>sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et.</p>
			</div>
			<div class="two">
				<div class="icon"></div>
				<h1>Lorem ipsum dolor</h1>
				<p>sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et.</p>
			</div>
			<div class="three">
				<div class="icon"></div>
				<h1>Lorem ipsum dolor</h1>
				<p>sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et.</p>
			</div>
		</div> <!-- </top> -->
		
		<div class="content">

			<div class="preview">
				<article class="item">
					<h1>Lorem ipsum dolor sit amet</h1>
					<img src="<?php bloginfo('template_url'); ?>/img/image1.jpg" alt="image1">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et. Nullam sagittis quam in leo ornare ut gravida turpis eleifend. </p>
					<p><a href="#">Read More ></a></p>
				</article>
				<article class="item">
					<h1>Lorem ipsum dolor sit amet</h1>
					<img src="<?php bloginfo('template_url'); ?>/img/image2.jpg" alt="image2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et. Nullam sagittis quam in leo ornare ut gravida turpis eleifend. </p>
					<p><a href="#">Read More ></a></p>
				</article>
				<article class="item">
					<h1>Lorem ipsum dolor sit amet</h1>
					<img src="<?php bloginfo('template_url'); ?>/img/image3.jpg" alt="image2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum aliquet orci, vitae ornare erat elementum et. Nullam sagittis quam in leo ornare ut gravida turpis eleifend. </p>
					<p><a href="#">Read More ></a></p>
				</article>
			</div> <!-- </preview> -->

	<?php get_sidebar(); ?>
			<?php the_post_thumbnail(); ?>
			<?php if(have_posts()) : ?>
			<?php while(have_posts()) : the_post(); ?>

			<article>
				<h1><?php the_title(); ?></h1>
				<?php the_excerpt(); ?>
				<a href="<?php the_permalink(); ?>">Читать далее</a>
				<p><?php the_tags(); ?></p>
			</article>
		
			<?php endwhile; ?>
			<?php endif; ?>
			<div class="nav">
				<?php posts_nav_link(); ?>
			</div>
		</div> <!-- </content> -->

	<?php get_sidebar(); ?>
		<?php endif; ?>

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