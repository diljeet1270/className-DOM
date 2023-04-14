function changeStyle(){
    let element = document.getElementById('name');
    element.className = 'showBlue';
}
function changeAllStyle(){
    let ids = ['name', 'email', 'mobile'];
    for(let i = 0 ; i< ids.length; i++){
        let element = document.getElementById(ids[i]);
        element.className = 'showGreen';
    }
}
function clearStyle(){
    let ids = ['name', 'email', 'mobile'];
    for(let i = 0 ; i< ids.length; i++){
        let element = document.getElementById(ids[i]);
        element.className = '';
    }
}