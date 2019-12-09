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

    printFiltre(selection) {
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

}

function matches(full, partial) {
    // console.log("does: " + partial + " partially match: " + full);
    // console.log(full.toLowerCase().indexOf(partial.toLowerCase()) > -1);
    return full.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}