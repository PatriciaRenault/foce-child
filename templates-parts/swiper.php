<!-- Swiper -->
<?php
    // recuperation du tableau des personnages
    $args = array(
        'post_type' => 'characters',
        'posts_per_page' => -1,     // recuperations de toutes les publications
        'meta_key'  => '_main_char_field',
        'orderby'   => 'meta_value_num',
    );
    $characters_query = new WP_Query($args);
?>

<!-- affiche la liste de personnages inclus dans la publication Personnages du backoffice-->
<div class="mySwiper">
    <div class="swiper-wrapper mySwiper-wrapper">
        <?php
            // Création d'une boucle pour reproduire le code pour chaque personnage du tableau
            while ($characters_query->have_posts()) {
                $characters_query->the_post();
        ?>
            <!-- Structuration de chaque slide -->
            <div class="swiper-slide mySwiper-slide">
                <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                <p><?php the_title(); ?></p>
            </div>
        <?php
            }
        ?>
    </div>
</div>