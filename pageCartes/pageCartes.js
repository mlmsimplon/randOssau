
    console.log("getText called");
    $.getJSON("../assets/circuits.json", function (data) {
        console.log(data);
        //import the text

        for (let i = 0; i < data.length; i++) {
            let article = document.createElement("article");
            let div = document.createElement("div");
            div.setAttribute("class", "article-item");

            //heading
            let h2 = document.createElement("h2");
            let titre = document.createTextNode(data[i].nom);
            h2.appendChild(titre);
            document.getElementById("target").appendChild(h2);

            //image
            let div2 = document.createElement("div");
            div2.setAttribute("class", "itemsCartes flex-3");
            let img = document.createElement("img");
            img.src = "https://cdn.pixabay.com/photo/2015/11/07/11/55/hiking-1031628_960_720.jpg";
            div2.appendChild(img);
            div.appendChild(div2);

            //contenu 1
            let div3 = document.createElement("div");
            div3.setAttribute("class", "itemsCartes");

            //pdf
            let a1 = document.createElement("a");
            a1.setAttribute("class", "fas fa-download");
            a1.setAttribute("href", data[i].pdf);
            a1.setAttribute("target", "_blank");
            let p = document.createElement("p");
            p.setAttribute("class", "download-card");
            let text = document.createTextNode("PDF");
            p.appendChild(text);
            p.appendChild(a1);
            div3.appendChild(p);

            //gpx
            a2 = document.createElement("a");
            a2.setAttribute("class", "fas fa-download");
            a2.setAttribute("href", data[i].gpx);
            a2.setAttribute("target", "_blank");
            let p2 = document.createElement("p");
            p2.setAttribute("class", "download-card");
            text = document.createTextNode("GPX");
            p2.appendChild(text);
            p2.appendChild(a2);
            div3.appendChild(p2);
            div.appendChild(div3);

            //bouton à bas
            article.appendChild(div);
            let p3 = document.createElement("p");
            p3.setAttribute("class", "text-black text-center");
            text = document.createTextNode("(GPX : TRACE DE VOTRE PARCOURS)");
            p3.appendChild(text);
            article.appendChild(p3);

            document.getElementById("target").appendChild(article);

        }
    });