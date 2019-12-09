çimport { route } from "./route.js";
import { routeList } from "./routeList.js";

var routeList1 = new routeList([]);

initializeArray();

$.when($.getJSON("../assets/circuits.json")).done(function () {

    //après le tableau est chargé
    console.log("number of routes: " + routeList1.getLength());
    console.log("routes : " + routeList1.list);
    // search test
    // var results = routeList1.search('nom', 'trois');
    // console.log("first result of search: " + results[0].getProp('nom'));
    var query = new route("circ", "*", "1", "*", "*", "*", "*", "*");
    var results = routeList1.flitre(query);
    routeList1.printFiltre(results, routeList1);

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