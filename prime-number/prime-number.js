function prime_cal(){
    var i,j=0;
    var prime_checker = document.getElementById("prime_number_input").value;
    for(i=2;i<prime_checker;i++){
        if(prime_checker % i != 0){
            j++;
        }
        else{
            j=0;
        }
    }
    if(j==(prime_checker-2)){
        document.getElementById("prime_result").innerHTML = prime_checker+" is a Prime Number";
    }
    else{
        document.getElementById("prime_result").innerHTML = prime_checker+" is not a Prime Number";
    }
}