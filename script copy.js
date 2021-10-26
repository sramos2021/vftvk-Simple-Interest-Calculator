let principal = document.getElementById("principal");
let amount = 0;
let rate = document.getElementById("rate");
let years = document.getElementById("years");
let interest = principal * years * rate /100;
let year = new Date().getFullYear()+parseInt(years);
let result = document.getElementById("result");
let rateval = document.getElementById("rate_val")
function compute()
{
    // p = document.getElementById("principal").value;
    
    let _year = years.options[years.selectedIndex].text;

    result.innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rateval.innerText+"%\<br\>You will receive an amount of "+amount.value+",\<br\>in the year "+_year+"\<br\>"

}


function updateRate() 
{
    amount = principal.value;
    rateval.innerText=rate.value;
    
}

