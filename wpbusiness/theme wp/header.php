<!doctype html>
<html  <?php language_attributes( $doctype ) ?> >
<head>
  <meta charset="utf-8">
  <title><?php bloginfo('name');?><?php wp_title(); ?></title>
  <!--[if lt IE 9]>
  <script src="<?php bloginfo('template_url'); ?>/js/ie.js"></script>
  <![endif]-->
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/reset.css">
<!--  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>"> -->
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
  <?php wp_head(); ?>
</head>
<body>
  <header>
    <div class="wrap">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
        <img class="logo" src="<?php bloginfo('template_url'); ?>/img/logo.png" alt="WPBiz" width="89" height="23">
      </a>
      <nav> 
        <ul> 
         <?php wp_nav_menu('theme_location'); ?>
          <!-- <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li> -->         
          <!--  <?php wp_list_pages("title_li=&exclude=27"); ?> -->
        </ul>
       <!--           
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
         -->
      </nav>
    </div> <!--</wrap> -->
  </header>

  <div class="slider">
    <div class="wrap">
      <div class="shadow-top">
      </div>
        <div class="body">
          <div class="text">
            <h1>WPBiz Free PSD Template by GraphicsFuel.com</h1>
            <p>sit amet, consectetur adipiscing elit. In interdum aliquet orce, vitae ornare erat elementum et.</p>
            <p>
              <a href="#">
                <img class="button" src="<?php bloginfo('template_url'); ?>/img/slider-button.png" alt="Download now">
              </a>
            </p>
          </div>
          <ul class="container" id="slider-container">
            <li class="one"><img src="<?php bloginfo('template_url'); ?>/img/slide1.jpg" alt="slide1"></li>
            <li class="two"><img src="<?php bloginfo('template_url'); ?>/img/slide2.jpg" alt="slide2"></li>
            <li class="nodisplay"><img src="<?php bloginfo('template_url'); ?>/img/slide3.jpg" alt="slide2"></li>
            <li class="nodisplay"><img src="<?php bloginfo('template_url'); ?>/img/slide4.jpg" alt="slide2"></li>
            <li class="nodisplay"><img src="<?php bloginfo('template_url'); ?>/img/slide5.jpg" alt="slide2"></li>
          </ul>
          <div class="pagination">
            <ul id="pagination">              
            </ul>
          </div>
        </div>
      <div class="shadow-bottom">
      </div>
    </div> <!--</wrap> -->
  </div> <!-- </slider> -->