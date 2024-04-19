////////////////////////////////// parallaxe video/logo ////////////////////////////////////////////////////////:
let parallax = document.querySelector("#logo-parallax");   //sélectionne l'élément dans le DOM avec l'ID #logo-parallax et le stocke dans la variable parallax.
//let imageP = document.querySelector("#logo-banner");     //sélectionne l'élément dans le DOM avec l'ID #logo-banner et le stocke dans la variable imageP

window.addEventListener("scroll", function () {            //ajoute un écouteur d'événements de défilement à la fenêtre. À chaque fois que l'utilisateur fait défiler la page, la fonction sera exécutée.
  let offset = window.scrollY;                             //stocke la quantité de défilement vertical de la fenêtre dans la variable offset.
  let parallaxTop = parallax.offsetTop;                    //récupère la position verticale de l'élément parallaxe par rapport au haut de la fenêtre et la stocke dans la variable parallaxTop.
  let parallaxHeight = parallax.offsetHeight;              //récupère la hauteur de l'élément parallaxe et la stocke dans la variable parallaxHeight.
  let windowHeight = window.innerHeight;                   //récupère la hauteur de la fenêtre du navigateur et la stocke dans la variable windowHeight.

  // Vérifier si l'élément parallax est dans la fenêtre de visualisation
  if (offset + windowHeight > parallaxTop && offset < parallaxTop + parallaxHeight) {   //  vérifie si l'élément parallaxe est visible dans la fenêtre de visualisation. 
    parallax.style.transform = "translateY(" + (offset * 0.3) + "px)";                  // applique une transformation de translation verticale à l'élément parallaxe en fonction de la quantité de défilement (offset). Le décalage est multiplié par 0.3.
  }
});


//////////////////////////////////// SWIPER / carroussel de chats ////////////////////////////////////////////////////

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    centeredSlides: 'true',                    //Centre les slides 
    slidesPerView: 'auto',                     // nombre de diapositives visibles 
    slideToClickedSlide: true,                 //permet de cliquer sur une diapo
    effect: 'coverflow',                       //effet de Cover Flow
    grabCursor: true,                          //curseur de type "main" lors du survol
    loop: true,                                //lecture en boucle.
    loopAdditionalSlides: 1,                   // Ajoute une diapositive supplémentaire 
    coverflowEffect: {                         //paramètres de l'effet de Cover Flow.
        rotate: 60,                            //Angle de rotation 
        slideShadows: false,                   //pas d'ombre
        scale: 0.85,                           // Échelle des diapositives
        modifier: 1,                           //Vitesse de l'effet
    },
});



//////////////////////////////////// effet de parallaxe sur les nuages lors du défilement de la page /////////////////////////////////////////////////////

//sélectionner des éléments HTML qui ont les id "big_cloud" et "little_cloud" et les stock dans les constantes bigCloud et littleCloud 
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")
const placeSection = document.getElementById("place")


//ajout un écouteur d'événements de défilement à la fenêtre  
window.addEventListener('scroll', () => {      //ajoute un écouteur d'événements à la fenêtre qui détecte lorsque l'utilisateur fait défiler la page
  const speed = 0.3;                         //  définit la vitesse du défilement

  const sectionOffsetTop = placeSection.offsetTop;                                // récupère la position du haut de la section "Place" par rapport au haut de la page
  const scrollPosition = window.scrollY;    // récupère la position de défilement verticale de la fenêtre

  if (scrollPosition >= sectionOffsetTop) { 
    const Parallax = (scrollPosition - sectionOffsetTop) * speed;
    const nuageOffset = Math.min(Parallax, 300);
//Applique la transformation CSS translateX aux éléments bigCloud et littleCloud
    bigCloud.style.setProperty("transform", `translateX(${-nuageOffset}px)`);       //déplace le grand nuage horizontalement sur la page. 
    littleCloud.style.setProperty("transform", `translateX(${-nuageOffset}px)`);    //déplace le petit nuage horizontalement sur la page.
  }  
})





//////////////////////////////////// effet scroll sur les titres /////////////////////////////////////////////////////

/////////// Ajout d'une classe .animation-titres aux titres, les mots sont isolés dans des span
document.addEventListener('DOMContentLoaded', function() {  //Cela attend que le DOM soit entièrement chargé avant d'exécuter le code 
  const titres = document.querySelectorAll('h2');           // sectionne les titres h2 et les stock dans titres

  titres.forEach(titre => {                                 // iteration sur chaque titre
      titre.classList.add('animation-titres');              //Ajout de la classe animation-titres
      const text = titre.innerText;                         // text contient le texte du titre
      const mots = text.split(' ');                         // divise le texte en mot et stock le resultat dans un tableau mots
      //chaque mot est enveloppé dans une balise <span>avec un délai d'animation calculé en fonction de son index.
      titre.innerHTML = mots.map((mot, index) => `<span style="animation-delay: ${index * 0.5}s">${mot}</span>&nbsp;`).join(' ');
  });


});

////////////// Création d'un Observer pour savoir quand l'utilisateur se trouve dans les sections avec les titres
const observer = new IntersectionObserver(function(entries, observer) { // La fonction de rappel est exécutée chaque fois 
                                             //qu'un élément observé entre ou sort de la zone d'intersection avec l'écran

  entries.forEach(entry => {                                        //boucle sur les éléments observés.
      
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {   // Si l'élement est au moins visible à 50%
          const spans = entry.target.querySelectorAll('span');      //Sélectionne tous les éléments <span>
          spans.forEach(span => {
              span.classList.add('texte-mot');                      //Ajoute la classe texte-mot à chaque élément <span>.
          });

          // Quand la class a été ajoutée, on arrête l'observation de l'élément pour optimiser les performances
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.5 // seuil de visibilité
});

// fonction pour observer quand les titres entrent dans la zone d'intersection avec l'ecran pour declencher les animations.
function observerLesTitres() {
  const titres = document.querySelectorAll('.animation-titres'); //selectionne les elements de classe ".animation-titres"

  //boucle qui applique l'observateur d'intersection à chaque titre de la liste titres
  titres.forEach(titre => {
      observer.observe(titre); 
  });
}

// Appel de la fonction d'observation des titres au scroll
window.addEventListener('scroll', observerLesTitres);//lorsque l'utilisateur fait défiler la page, la fonction observerLesTitres est déclenchée




////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Gestion du menu burger et animation pour passage au design en croix
// attache un écouteur d'événements à l'élément "DOMContentLoaded"
document.addEventListener("DOMContentLoaded", function () {     // lorsque le DOM est completement chargé
  const burgerBtn = document.getElementById("burgerBtn");       // récuperation du bouton burger 
  const sidenav = document.getElementById("mySidenav");         // récupèration l'élément de la navigation (sidenav)
  const lignes = document.querySelectorAll(".line");            // récuperation de toutes les lignes du menu burger
  const sidenavLinks = sidenav.querySelectorAll("a");           // recuperation de tous les liens

  // ajout de l'ecouteur d'evenement au clic sur le bouton
  burgerBtn.addEventListener("click", function () {                                      
      if (sidenav.classList.value.includes("active")) {       // si le menu est ouvert, on ferme le menu
          sidenav.classList.remove("active");                       // on ferme le menu (on enleve la classe "active")
          lignes[0].classList.remove("croixgauche");                // on enleve les croix et on retabli le bouton burger avec les lignes
          lignes[1].classList.remove("croixdroite");
          lignes[2].style.display = 'block';                        // on reaffiche la 3eme ligne du bouton burger
      }
      else {                                                  // si le menu etait fermé, on ouvre le menu
      sidenav.classList.add("active");                              // on ouvre le menu (on ajoute la classe "active")
      lignes[0].classList.add("croixgauche");                       // on met les lignes en forme de croix
      lignes[1].classList.add("croixdroite");
      lignes[2].style.display = 'none';                             // on efface la 3eme ligne
      }
  });

  // boucle qui ajoute un écouteur d'événements sur chaque lien pour supprimer le menu lorsque l'utilisateur clique sur un lien
  sidenavLinks.forEach(function (link) {                                      
      link.addEventListener("click", function () {           // Lorsque l'un des liens du menu est cliqué...
          sidenav.classList.remove("active");                       // on ferme le menu (on enleve la classe "active")
          lignes[0].classList.remove("croixgauche");                // et remet le menu burger dans son etat initial avec les lines
          lignes[1].classList.remove("croixdroite");
          lignes[2].style.display = 'block';
      });
  });
});

/////////////////////////////////////////////////