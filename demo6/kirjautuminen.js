document.addEventListener("DOMContentLoaded", onkokirjautunut);
function onkokirjautunut(){
    let kirjautunut = 'kylla'
    if(kirjautunut==='kylla'){
        document.getElementById('tevetuloa_teksti').textContent += ' Joakim!'
    }
}