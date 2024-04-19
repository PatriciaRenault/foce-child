<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
             <!-- vidéo -->
            <video class="banner__video" 
                   poster="<?php echo get_stylesheet_directory_uri() . '/assets/images/banner.png' ?>" 
                   autoplay loop muted>
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/videos/Studio_Koukaki-vidéo_header_sans_son.mp4" type="video/mp4'; ?>">
            </video>
            <!-- logo -->
            <div id="logo-parallax">
                <img class="banner__logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
        </section>

            <!-- histoire -->       
        <section id="story" class="story">
            <h2 class="rotate_af">L'histoire</h2>
            <article id="" class="story__article rotate_af">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>

            <!-- les personnages --> 
            <article id="characters">
            <div class="main-character">
                <h3>Les personnages</h3>
                <?php get_template_part('templates-parts/swiper'); ?>
            </div>
            </article>

            <!-- le lieu --> 
            <article id="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <img id="big_cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?>" alt="grand nuage">
                <img id="little_cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?>" alt="petit nuage">
            </article>
        </section>


        <section id="studio">
            <h2 class="rotate_af rotate_bf">Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
             <!-- Integration du template section des oscars -->
         <?php get_template_part( '/templates-parts/nomination-oscar' ); ?>
    </main><!-- #main -->

<?php
get_footer();
