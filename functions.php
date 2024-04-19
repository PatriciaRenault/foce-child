<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // ajout de swiper 
    wp_enqueue_script('swiper', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), 1.1, true);
    wp_enqueue_style('swiper-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    //fichier css theme enfant
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime(get_stylesheet_directory() . '/style.css'));
    // Fichier js thème enfant
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/script.js', array(), _S_VERSION, true );
}


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}