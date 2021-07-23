 
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
 
function spin() {
    var x = 1000;
    var y = 9999;

    var deg = Math.round(Math.random() * (x-y) + y);
    document.getElementById('spin').style.transform = "rotate("+deg+"deg)";
}

 