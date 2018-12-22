var d, h, m, s, ms, clock, color;

//creating function for date time minutes seconds and put it in a variable to display on web page.
function clocky() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

if (h <= 9){
    h = '0' + h;
}

if (m <= 9){
    m = '0' + m;
}

if (s <= 9){
    s = '0' + s;
}



clock = h + ':' + m + ':' + s;
color = '#' + h + m + s;


document.getElementById('clock').innerHTML = clock;
document.body.style.background = color;


}
setInterval(clocky,1000);
