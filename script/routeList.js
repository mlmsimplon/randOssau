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
        console.log(this.getLength())
        console.log("first element: " + this.list[0]);
    }

    search(category, str) {
        let results = [];
        console.log("search commencing || category: " + category + ", text: " + str);

        for (let i = 0; i < this.list.length; i++) {
            // console.log(this.list[i].getProp(category));
            if(category == "nom"){ //for nom partial match is acceptable
                if(this.matches(str, this.list[i].getProp(category))){
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

    matches(full, partial){
        return partial.toLowerCase().indexOf(full.toLowerCase()) > -1;
    }

}