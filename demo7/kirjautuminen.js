document.addEventListener("DOMContentLoaded", onkokirjautunut);
let a = 1
function onkokirjautunut(){
    
    if(localStorage.getItem("kirjautunut") ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display="none";
        document.getElementById("kirjaudu_ulos").style.display="block";
        
        
    }
}
function kirjaudulos(a){
    if(a===1){
        document.getElementById("kirjaudu_ulos").style.display="block";
    }
    
}
function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla")
}