var arr = [];
var arrIndex = 0; //array storing original stylings so they can
// revert when a new one is chosen

function activate(elemId, type, color, resetTrue) {

    //reset only called if not called by reset to avoid endless loops
    if (resetTrue == 'true') {
        reset();
    }

    //variables pour le fonction
    let thisElem = document.getElementById(elemId);
    let OrigColor;

    //si le typ est "background", change le background
    if (type == "background") {
        OrigColor = thisElem.style.background; //stocker le coleur original
        thisElem.style.background = color;
    }

    //si le typ est "border", change le border
    if (type == "border") {
        OrigColor = 'rgba(255, 255, 255, 0)';
        //transparent - toujours pas de bordre avant
        thisElem.style.boxShadow = "inset 0px 0px 0px 3px " + color;
    }

    //add other types of active display here if applicable

    arrIndex++; //ajoute du index de array
    arr.push([elemId, type, OrigColor]); //ajoute de array donc c'est plus facile de changer
}

function reset() {
    arr.forEach(deactivateAll);
    function deactivateAll(item) {
        activate(item[0], item[1], item[2], false);
        // console.log("reverting " + item[0] + " style " + item[1] + " to " + item[2]);
    }
    arr = [];
    arrIndex = 0;
}