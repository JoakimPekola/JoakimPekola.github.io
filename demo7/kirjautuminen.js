document.addEventListener("DOMContentLoaded", onkokirjautunut);
document.getElementById("kirjaudu_ulos").style.display ="none";
function onkokirjautunut(){
    
    if(localStorage.getItem("kirjautunut") ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla")
}