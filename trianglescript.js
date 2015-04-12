//theme couleur/son choisi
var theme = 1;

//theme couleur utilisé
var couleur = [
  "rgb(255, 179, 152)",//beige
  "rgb(130, 124, 255)",//bleu
  "rgb(125, 192, 255)",//cyan
  "rgb(121, 130, 148)",//gris
  "rgb(223, 217, 80)",//jaune
  "rgb(199, 138, 51)",//orange
  "rgb(232, 135, 158)",//rose
  "rgb(203, 17, 61)",//rouge
  "rgb(48, 175, 69)",//vert
  "rgb(165, 80, 225)"//violet
  ];

//theme son utilisé
var son = [
  document.getElementById("sonbeige"),
  document.getElementById("sonbleu"),
  document.getElementById("soncyan"),
  document.getElementById("songris"),
  document.getElementById("sonjaune"),
  document.getElementById("sonorange"),
  document.getElementById("sonrose"),
  document.getElementById("sonrouge"),
  document.getElementById("sonvert"),
  document.getElementById("sonviolet")
];

//fonction de changement de couleur
function changerCouleur(ident) {
  //variable récuperant la couleur actuelle du triangle
  var contenu = document.getElementById(ident).style.fill
  //condition tournant en boucle de changement de couleur
  if (contenu == couleur[0]) {
    document.getElementById(ident).style.fill = couleur[1]
    son[1].pause()
    son[1].currentTime = 0 //pause et currentTime réinitialise le son avant de le lancer pour
    son[1].play();         // éviter que si deux triangles lançent le même son, le second lancement soit ignoré.
  } else if (contenu == couleur[1]) {
    document.getElementById(ident).style.fill = couleur[2]
    son[2].pause()
    son[2].currentTime = 0
    son[2].play();
  } else if (contenu == couleur[2]) {
    document.getElementById(ident).style.fill = couleur[3]
    son[3].pause()
    son[3].currentTime = 0
    son[3].play();
  } else if (contenu == couleur[3]) {
    document.getElementById(ident).style.fill = couleur[4]
    son[4].pause()
    son[4].currentTime = 0
    son[4].play();
  } else if (contenu == couleur[4]) {
    document.getElementById(ident).style.fill = couleur[5]
    son[5].pause()
    son[5].currentTime = 0
    son[5].play();
  } else if (contenu == couleur[5]) {
    document.getElementById(ident).style.fill = couleur[6]
    son[6].pause()
    son[6].currentTime = 0
    son[6].play();
  } else if (contenu == couleur[6]) {
    document.getElementById(ident).style.fill = couleur[7]
    son[7].pause()
    son[7].currentTime = 0
    son[7].play();
  } else if (contenu == couleur[7]) {
    document.getElementById(ident).style.fill = couleur[8]
    son[8].pause()
    son[8].currentTime = 0
    son[8].play();
  } else if (contenu == couleur[8]) {
    document.getElementById(ident).style.fill = couleur[9]
    son[9].pause()
    son[9].currentTime = 0
    son[9].play();
  } else {
    document.getElementById(ident).style.fill = couleur[0]
    son[0].pause()
    son[0].currentTime = 0
    son[0].play();
  }
};

//raccourci clavier pour activer les triangles
document.addEventListener('keydown', function (e){
  if(e.keyCode == 'A'.charCodeAt(0)) {
      e.preventDefault();
      changerCouleur("path3015")
  }
  if(e.keyCode == 'Z'.charCodeAt(0)) {
      e.preventDefault();
      changerCouleur("path3019")
  }
});
