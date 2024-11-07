function converttemp(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32
    document.getElementById("f").value = f
}