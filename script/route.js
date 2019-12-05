export class route {
    constructor(nom, pointdepart, niveau, pdf, gpx, duree, distance, elevation) {
        this.nom = nom;
        this.pointdepart = pointdepart;
        this.niveau = niveau;
        this.pdf = pdf;
        this.gpx = gpx;
        this.duree = duree;
        this.distance = distance;
        this.elevation = elevation;
    }

    getProp(prop) {
        return this[prop];
    }
}