
//Function to compute
function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let amount = principal * interest;
    let year = new Date().getFullYear() + parseInt(years);

    if(principal <= 0){
        alert("Enter a positive number");
    }else{
        p = document.getElementById("principal").value;
        document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
}

//Function to compute rate

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}


        