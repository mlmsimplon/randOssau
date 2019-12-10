
mapboxgl.accessToken = 'pk.eyJ1IjoicmFuZG9zc2F1IiwiYSI6ImNrM3ExZGRqYTA4ZjYzbm5qNnVrYzQyZjYifQ.HPLiaT33-w1JlP964Hl5FQ';
    let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-96, 37.8], // starting position
    zoom: 3 // starting zoom
    });


// Add geolocate control to the map.
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));


window.onload = () => {
    // Script servant a masquer les éléménts généré automatiquement par le 'module' de la map, a supprimer le moment venu

let bottomLeft = document.querySelector(".mapboxgl-ctrl-bottom-left")
bottomLeft.style.display = "none"

let bottomRight = document.querySelector(".mapboxgl-ctrl-bottom-right")
bottomRight.style.display = "none"

let gpsButt = document.querySelector(".mapboxgl-ctrl-top-right")
gpsButt.style.position = "relative"
}
