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

    getNom() {
        return this.nom;
    }

    getPointDepart() {
        return this.pointdepart;
    }

    getNiveau() {
        return this.niveau;
    }

    getPdf() {
        return this.pdf;
    }

    getDuree() {
        return this.duree;
    }

    getDistance() {
        return this.distance;
    }

    getElevation() {
        return this.elevation;
    }

}