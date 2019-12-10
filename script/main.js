import { route } from "./route.js";
import { routeList } from "./routeList.js";

const durRange = ['1h', '1h10', '1h25', '1h30', '1h50', '2h', '2h30', '3h', '3h15', '3h30', '4h', '4h30', '5h15', '5h30', '6h', '9h'];

var routeList1 = new routeList([]);
'use strict';

initializeArray();

$.when($.getJSON("../assets/circuits.json")).done(function () {
    //après la tableau est chargé
    console.log("number of routes: " + routeList1.getLength());
    console.log("routes : " + routeList1.list);


    var query = new route("circ", "*", "*", "*", "*", "*", "*", "*");
    var results = routeList1.flitre(query);
    routeList1.printFiltre(results);
    routeList1.printPageFiltre2(results);

});

// function makeQuery(){
//     var query = new route("circle", "*", "1", "*", "*", "*", "*", "*");
//     var results = routeList1.flitre(query);
//     routeList1.printFiltre(results);
// }


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