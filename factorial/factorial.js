function factorial_cal(){
    var i,j=1;
    var factorial_input = document.getElementById("factorial_input").value;
    for(i=factorial_input;i>=1;i--){
        j = j * i;
    }
    document.getElementById("factorial_result").innerHTML = "Factorial of"+factorial_input+" is "+j;
}