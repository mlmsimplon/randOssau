import { route } from "./route.js";
import { routeList } from "./routeList.js";

var routeList1 = new routeList([]);

initializeArray();

//ensure this happens after the array has been loaded
$.when($.getJSON("../assets/circuits.json")).done(function () {

    console.log(routeList1.getLength());
    console.log("routes : " + routeList1.list);
    routeList1.search('nom', 'Patrimoine');

});


function initializeArray() {
    $.getJSON("../assets/circuits.json", function (data) {
        for (let i = 0; i < data.length; i++) {

            let nom = data[i].nom;
            let pointdepart = data[i].pointdepart;
            let niveau = data[i].niveau;
            let pdf = data[i].pdf;
            let gpx = data[i].gpx;
            let duree = data[i].duree;
            let distance = data[i].distance;
            let elevation = data[i].elevation;

            let thisRoute = new route(nom, pointdepart, niveau, pdf, gpx, duree, distance, elevation);
            routeList1.push(thisRoute);
        }
    });
}