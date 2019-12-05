export class routeList {

    constructor(list) {
        this.list = list;
    }

    push(listItem) {
        // console.log(listItem);
        this.list.push(listItem);
        // console.log(this.list.length);
    }

    getLength() {
        return this.list.length;
    }

    check() {
        console.log("checking array.......");
        console.log(this.getLength());
    }

}