export class routeList {

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
        console.log(this.getLength());
    }

    search(category, str) {
        let results = [];
        let functionSpec;
        console.log("category: " + category + ", text: " + str);

        switch (category) {
            case ("nom"): functionSpec = "getNom()"; break;
            case ("pointdepart"): functionSpec = "getPointDepart()"; break;
            case ("niveau"): functionSpec = "getNiveau()"; break;
            case ("pdf"): functionSpec = "getPdf()"; break;
            case ("gpx"): functionSpec = "getGpx()"; break;
            case ("duree"): functionSpec = "getDuree()"; break;
            case ("distance"): functionSpec = "getDistance()"; break;
            case ("elevation"): functionSpec = "getElevation()"; break;
            default: return "error in name";
        }

        console.log("function: " + functionSpec);

        for (let i = 0; i < this.list.length; i++) {
            console.log(i + " - " + "searching: " + functionSpec.apply);
            if (this.list[i].functionSpec == str) {
                console.log("result found");
                results.push(this.list[i]);
            }
        }
        return results;
    }

}