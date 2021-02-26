function showresult(choise){
    var white = 2.50 * parseFloat(document.getElementById('white').value);
    var sourdough = 4.60 * parseFloat(document.getElementById("sourdough").value)
    var wheat= 3.70 * parseFloat(document.getElementById('wheat').value);
    var r;
    var c =choise
    



switch(c)
{
case 'checkout':
        r=(wheat+white+sourdough).toFixed(2);
        break;

                
}
document.getElementById('result').value=r;
}
