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

    matches(full, partial) {
        return partial.toLowerCase().indexOf(full.toLowerCase()) > -1;
    }

    flitre(query) {
        console.log(query);

        let results = [];
        this.list.filter(function (el) {
            console.log(el.nom);
            if (this.matches(el.nom, query.nom)) {
                results.push(el);
            }
            else if (this.matches(el.pointdepart, query.pointdepart)) {
                results.push(el);
            }
            else if (el.niveau == query.niveau) {
                results.push(el);
            }
            else if (el.duree <= query.duree) {
                results.push(el);
            }
            else if (el.distance <= query.distance) {
                results.push(el);
            }
            else if (el.elevation <= query.elevation) {
                results.push(el);
            }
        });
        return results;
    }

    printFiltre(selection) {
        for (let i = 0; i < this.getLength; i++) {
            for (let j = 0; j < selection.length; j++) {
                if (this.list[i] == selection[j]) {
                    console.log(this.list[i]);
                }
            }
        }
    }

}