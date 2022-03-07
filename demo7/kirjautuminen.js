document.addEventListener("DOMContentLoaded", onkokirjautunut);
let a = 1
function onkokirjautunut(){
    
    if(localStorage.getItem("kirjautunut") ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        a = 2
        
    }
}
function kirjaudulos(a){
    if(a===1){
        document.getElementById("kirjaudu_ulos").style.display="none";
    }else{
            document.getElementById("kirjaudu_ulos").style.display="block";
        }
    
}
function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla")
}