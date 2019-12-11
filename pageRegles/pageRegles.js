$.getJSON("../assets/regles.json", function (data) {
    console.log(data);
    //import the text

    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");

        //icon
        let img = document.createElement("img");
        img.src = data[i].icon;
        div.appendChild(img);

        //texte fort 
        let p = document.createElement("p");
        let span = document.createElement("span");
        let text = document.createTextNode(data[i].titre + " ");
        span.appendChild(text);
        p.appendChild(span);

        //texte normal
        text = document.createTextNode(data[i].justicatif);
        p.appendChild(text);
        div.appendChild(p);

        //ajoute au document
        document.getElementById("target").appendChild(div);
    }
});