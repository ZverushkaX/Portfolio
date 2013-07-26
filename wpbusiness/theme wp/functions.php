<?php 
if (function_exists("register_sidebar"))
	register_sidebar(array ('name' => 'Sidebar'));
	register_sidebar(array ('name' => 'Sidebar2'));
	add_theme_support('post-thumbnails');
	set_post_thumbnail_size(271, 87, TRUE);
	// Убираем админ бар сверху
	function my_function_admin_bar(){ return false; }
	add_filter( 'show_admin_bar' , 'my_function_admin_bar');
	if ( function_exists( 'add_image_size' ) ) { 
	add_image_size( 'blog', 56, 56, true ); //300 pixels wide (and unlimited height)	
	add_theme_support( 'automatic-feed-links' );
}
?>
