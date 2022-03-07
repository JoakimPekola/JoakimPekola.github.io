document.addEventListener("DOMContentLoaded", onkokirjautunut);
let a
function onkokirjautunut(){
    
    if(localStorage.getItem("kirjautunut") ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display="none";
        document.getElementById("kirjaudu_ulos").style.display="block";
        
        
    }
}
function kirjaudulos(){
    
        document.getElementById("kirjaudu_ulos").style.display="none";
        localStorage.clear()
    
    
}
function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla")
}