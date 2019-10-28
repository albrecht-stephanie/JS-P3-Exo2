function divShow(id,divVisible){
    if (divVisible == true){
        // on affiche la div
        document.getElementById(id).style.display= "block";
    }
    else{
        //on masque la div
        document.getElementById(id).style.display= "none";
    }
}