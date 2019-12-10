export class routeList {
    'use strict';

    constructor(list) {
        this.list = list;
    }

    push(listItem) {
        this.list.push(listItem);
        // this.check();
    }

    getLength() {
        return this.list.length;
    }

    check() {
        console.log("checking array.......");
        console.log("length: " + this.getLength())
        console.log("first element: " + this.list[0]);
    }

    search(category, str) {
        let results = [];
        console.log("search commencing || category: " + category + ", text: " + str);

        for (let i = 0; i < this.list.length; i++) {
            // console.log(this.list[i].getProp(category));
            if (category == "nom") { //for nom partial match is acceptable
                if (this.matches(str, this.list[i].getProp(category))) {
                    console.log("route confirmed");
                    results.push(this.list[i]);
                }
            }
            else if (this.list[i].getProp(category) == str) {
                //for all else exact match is required
                // console.log("result found");
                results.push(this.list[i]);
            }
        }
        return results;
    }

    flitre(query) {
        console.log(query);
        let results = [];
        this.list.filter(function (el) {
            if ((query.nom == "*") || (matches(el.nom, query.nom)) &&
                ((query.pointdepart == "*") || (matches(el.pointdepart, query.pointdepart))) &&
                ((query.niveau == "*") || (el.niveau == query.niveau)) &&
                ((query.duree == "*") || (el.duree <= query.duree)) &&
                ((query.distance == "*") || (el.distance <= query.distance)) &&
                ((query.elevation == "*") || (el.elevation <= query.elevation))) {
                // console.log("result found: " + el);
                results.push(el);
            }
        });
        console.log("recherche fini. nombre des resultats : " + results.length);
        return results;
    }

    peek(selection) {
        let count = 0;
        for (let i = 0; i < this.getLength(); i++) {
            for (let j = 0; j < selection.length; j++) {
                if (this.list[i] == selection[j]) {
                    count++;
                    console.log("Numero " + count + " ... " + this.list[i].nom);
                }
            }
        }
    }

    printPageFiltre2(selection) {
        selection.forEach(print);
        function print(item) {

            let article = document.createElement('article');
            article.setAttribute("class", "br");

            let divCont = document.createElement('div');
            divCont.setAttribute("class", "container");

            //<div class="entete bg-vert br"> h2
            let divEntete = document.createElement('div');
            divEntete.setAttribute("class", "entete bg-vert br");
            let h2 = document.createElement("h2");
            let text = document.createTextNode(item.nom);
            h2.appendChild(text);
            divEntete.appendChild(h2);
            divCont.appendChild(divEntete);

            //<div class="container_1">
            let divCont1 = document.createElement('div');
            divCont1.setAttribute("class", "container_1");

            //photo
            let divPhoto = document.createElement('div');
            divPhoto.setAttribute("class", "photo");
            let img = document.createElement("img");
            img.setAttribute("class", "andreyt br");
            img.src = "../assets/images_cartes/cretes_andreyt.jpg";
            img.setAttribute("alt", "Les crêtes d'Andreyt");
            divPhoto.appendChild(img);
            divCont1.appendChild(divPhoto);

            //info rando
            let divInf = document.createElement("div");
            divInf.setAttribute("class", "info_rando");
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-danger");
            text = document.createTextNode(item.niveau);
            h4.appendChild(text);
            divInf.appendChild(h4);

            //type
            let divTyp = document.createElement("div");
            divTyp.setAttribute("class", "type");
            //temps
            let p = document.createElement('p');
            img = document.createElement('img');
            img.src = "../assets/icons/Vector.png";
            img.alt = "Temps";
            img.title = "Temps";
            img.setAttribute("class", "pendule");
            p.appendChild(img);
            text = document.createTextNode(item.duree);
            p.appendChild(text);
            divTyp.appendChild(p);
            //distance
            p = document.createElement('p');
            img = document.createElement('img');
            img.src = "../assets/icons/walk_dark.png";
            img.alt = "Distance";
            img.title = "Distance";
            img.setAttribute("class", "marcheur");
            p.appendChild(img);
            text = document.createTextNode(item.distance);
            p.appendChild(text);
            divTyp.appendChild(p);
            //départ
            p = document.createElement('p');
            img = document.createElement('img');
            img.src = "../assets/icons/trending-up.png";
            img.alt = "Dénivelé";
            img.title = "Dénivelé";
            img.setAttribute("class", "denivele");
            p.appendChild(img);
            text = document.createTextNode(item.elevation);
            p.appendChild(text);
            divTyp.appendChild(p);
            //append
            divInf.appendChild(divTyp);

            //p depart
            p = document.createElement('p');
            p.setAttribute("class", "depart");
            img = document.createElement("img");
            img.setAttribute("class", "rdv");
            img.alt = "Départ";
            img.title = "Départ";
            img.src = "../assets/icons/mdi_crosshairs-gps.svg";
            text = document.createTextNode(item.pointdepart);
            p.appendChild(img);
            p.appendChild(text);
            divInf.appendChild(p);

            //buttons
            let divBut = document.createElement("div");
            divBut.setAttribute("class", "boutons");
            let divBut1 = document.createElement("div");
            divBut1.setAttribute("class", "button");
            let a = document.createElement("a");
            a.setAttribute("href", item.gpx);
            img = document.createElement("img");
            img.src = "../assets/icons/map-pin.svg";
            a.appendChild(img);
            divBut1.appendChild(a);
            divBut.appendChild(divBut1);

            let divBut2 = document.createElement("div");
            divBut2.setAttribute("class", "button");
            a = document.createElement("a");
            a.setAttribute("href", item.pdf);
            img = document.createElement("img");
            img.src = "../assets/icons/download.svg";
            a.appendChild(img);
            divBut2.appendChild(a);
            divBut.appendChild(divBut2);

            //final packaging
            divInf.appendChild(divBut);
            divCont1.appendChild(divInf);
            divCont.appendChild(divCont1);
            article.appendChild(divCont);

            //add to body
            let x = document.getElementById("target");
            x.appendChild(article);
        }
    }

    printPageFiltre(selection) {
        selection.forEach(print);
        function print(item) {

            let article = document.createElement("article");

            //titre
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "bg-vert");
            let text = document.createTextNode(item.nom);
            h2.appendChild(text);
            article.appendChild(h2);

            //photo + wrapper 1
            let divDetRan = document.createElement("div");
            divDetRan.setAttribute("class", "detailRando");
            let divFlex2 = document.createElement("div");
            divFlex2.setAttribute("class", "flex-2 row");
            let img = document.createElement("img");
            img.src = "../assets/randophoto2.jpeg";
            divFlex2.appendChild(img);
            divDetRan.appendChild(divFlex2);

            //flex row 3 -- catégorie
            let divFlex3 = document.createElement("div");
            divFlex3.setAttribute("class", "flex-3 row");
            let divDetail = document.createElement("div");
            divDetail.setAttribute("class", "detail");
            let divItemFam = document.createElement("div");
            divItemFam.setAttribute("class", "itemFamiliale");
            text = document.createTextNode(item.niveau);
            divItemFam.appendChild(text);
            divDetail.appendChild(divItemFam);

            //3 items -- duree, distance, elevation
            //duree
            categorie('far fa-clock', item.duree);
            //distance
            categorie('fas fa-hiking', item.distance);
            //elevation
            categorie('fas fa-chart-line', item.elevation);

            let divItem4 = document.createElement("div");
            divItem4.setAttribute("class", "item");
            divDetail.appendChild(divItem4);
            divFlex3.appendChild(divDetail);

            //point de depart
            let divDetItem = document.createElement("div");
            divDetItem.setAttribute("class", "detail item");
            let i = document.createElement("i");
            i.setAttribute("class", "fas fa-crosshairs");
            text = document.createTextNode(item.pointdepart);
            divDetItem.appendChild(i);
            divDetItem.appendChild(text);
            divFlex3.appendChild(divDetItem);

            //"box"
            let box = document.createElement("div");
            box.setAttribute("class", "box");
            box("fas fa-map-marker-alt", item.gpx);
            box("fas fa-download", item.pdf);
            divFlex3.appendChild(box);

            //wrappings
            divDetRan.appendChild(divFlex3);
            article.appendChild(divDetRan);


            function categorie(classCss, itemId) {
                let divItem = document.createElement("div");
                divItem.setAttribute("class", "item");
                let divCenter = document.createElement("div");
                divCenter.setAttribute("class", "text-center");
                let divIcon = document.createElement("div");
                divIcon.setAttribute("class", classCss);
                divCenter.appendChild(divIcon);
                divItem.appendChild(divCenter);
                let divCenter3 = document.createElement("div");
                divCenter3.setAttribute("class", "text-center");
                let text = document.createTextNode(itemId);
                divCenter3.appendChild(text);
                divItem.appendChild(divCenter30);
                divDetail.appendChild(divItem);
            }

            function box(classCss, href) {
                let box1 = document.createElement("div");
                box1.setAttribute("class", "box1 bg-vert");
                let a1 = document.createElement("a");
                a.setAttribute("href", href);
                let i1 = document.createElement("i");
                i1.setAttribute("class", classCss);
                i1.appendChild(a1);
                box1.appendChild(i1);
                box.appendChild(box1);
            }
        }
    }

}

function matches(full, partial) {
    // console.log("does: " + partial + " partially match: " + full);
    // console.log(full.toLowerCase().indexOf(partial.toLowerCase()) > -1);
    return full.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}