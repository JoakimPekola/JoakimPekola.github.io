document.addEventListener("DOMContentLoaded", onkokirjautunut);
function onkokirjautunut(){
    let kirjautunut = 'kylla';
    if(kirjautunut ==='kylla'){
        document.getElementById("tevetuloa_teksti").textContent ;
    }
}

function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
}