// Récupération des id servant a la mise en place du texte
let type = document.getElementById("type")
let localisation = document.getElementById("localisation")
let difficulte = document.getElementById("difficulte")
let distance = document.getElementById("distance")
let duree = document.getElementById("duree")

// Récupération de l'URL pour chercher des paramètres
let url_string = window.location.href
// Nouvel objet URL
let url = new URL(url_string)

// On change le texte/couleur de difficulte en fonction du paramètre afficher dans l'url
console.log(url.searchParams.get("difficulte"))
    difficulte.classList.remove("text-danger")

if(url.searchParams.get("difficulte") == 1 ){
    difficulte.classList.add("text-success")
    difficulte.innerHTML = "Familial"
}else if(url.searchParams.get("difficulte") == 2 ){
    difficulte.innerHTML = "Averti"
    difficulte.classList.add("text-primary")
}else if(url.searchParams.get("difficulte") == 3 ){
    difficulte.innerHTML = "Sportif"
    difficulte.classList.add("text-danger")
}else if(url.searchParams.get("difficulte") == 4 ){
    difficulte.innerHTML = "Extreme"
    difficulte.classList.add("text-dark")
}