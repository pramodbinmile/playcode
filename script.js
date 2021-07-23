 
function change(){
    var x = document.getElementById('heading').innerText;    
    document.getElementById('copy').innerText = x;
    document.getElementById('copy').style.color = 'blue';

    var y = document.getElementsByTagName('p')[0].innerText;
    document.getElementById('para').innerText = y;
    
}
function onMouse(a){
    a.innerText = "Welcome !";
    
}
function offMouse(b){
    b.innerText = 'Hover Me';
}
function colorChange(){
    document.getElementById('color').style.background ='blue';
}
function imgChange1(){
    document.getElementsByClassName('img')[0].src = 'fruit_img3.jpg';
    document.getElementsByClassName('img')[1].src = 'fruit_img4.jpg';

}
function imgChange2(){
    document.getElementsByClassName('img')[1].src = 'fruit_img3.jpg';
    document.getElementsByClassName('img')[0].src = 'fruit_img4.jpg';

}

function stop(){
    document.getElementById('spin').style.animation = "pause";
}
function play(){
    document.getElementById('spin').style.animationPlayState ='initial';

}