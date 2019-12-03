
class Link{
    constructor(link, icon, nav){
        this.link = link
        this.icon = icon
        this.nav = nav
        this.createNav()
    }

    createNav(){
     for(let i=0; i<this.link.length; i++){

        this.anchor = document.createElement("a")
        this.liElt = document.createElement("li")

        this.anchor.href = this.link[i]
        this.anchor.classList.add("fas")
        this.anchor.classList.add(this.icon[i])

        this.liElt.appendChild(this.anchor)
        this.nav.appendChild(this.liElt)
     }
     
    }
}

const nav = document.querySelector("nav > ul")

// création de la navbar, a modifié dans un futur proche avec des icones
const navBar = new Link(["home.html", "carte.html", "nav.html"], ["fa-home", "fa-map", "fa-map-marker-alt"], nav)