<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">

		<nav id="site-navigation" class="main-navigation">
        <a class ="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>       <!--bloginfo('name') nom du site-->
            <button class="burger-icon" id="burgerBtn">                                                                           <!--creation du bouton burger-->
                <span class="line"></span>                                                                                        <!--creation des lignes du bouton-->
                <span class="line"></span>
                <span class="line"></span>
            </button>    
		</nav>
        <!-- #site-navigation -->
        <div id="mySidenav" class="sidenav">
        <img class="burger-logo" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu_logo.png' ?>" alt="logo Fleurs d'oranger & chats errants">                                                                                      <!--creation du menu-->
            <ul>        
                <li id=burger-story><a href="#story">Histoire</a></li>                                                                            <!--lien histoire-->
                <li id=burger-characters><a href="#characters">Personnages</a></li>                                                                    <!--lien personnages-->
                <li id=burger-place><a href="#place">Lieu</a></li>                                                                                <!--lien Lieu-->
                <li id=burger-studio><a href="#studio">Studio Koukaki</a></li>  
            </ul> 
        <img class="studioKoukaki" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu_studio.png' ?>" alt="Signature Studio Koukaki">                                                                  <!--lien Studio Koukaki--> 
        </div>
  
    
	
</header><!-- #masthead -->
