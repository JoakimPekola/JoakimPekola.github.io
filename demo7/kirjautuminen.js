document.addEventListener("DOMContentLoaded", onkokirjautunut);
function onkokirjautunut(){
    let kirjautunut = 'k';
    if(kirjautunut ==='k'){
        document.getElementById("tevetuloa_teksti").textContent += localStorage.getItem("nimi");
    }
}

function kirjaudu(){
    localStorage.setItem("nimi",  document.getElementById("nimi").value);
}