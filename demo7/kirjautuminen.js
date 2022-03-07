document.addEventListener("DOMContentLoaded", onkokirjautunut);
function onkokirjautunut(){
    
    if(localStorage.getItem("kirjautunut") ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
    }
}

function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla")
}