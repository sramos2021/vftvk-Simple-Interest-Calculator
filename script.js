function compute()
 {
    var principal = document.getElementById("principal").value;
     //if Amount is < or = 0  display alert
    if (principal <= "0") {
        alert("Enter a positive number");
        principal.focus();
        return false;}
        //if Amount is left empty display alert 
    if (principal == "") {
        alert("Enter a positive number");
        principal.focus();
        return false;} 
      
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest;

    //display message with calculated values after button is clicked
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
//Function to set focus to Amount Box after validation box disappears
function setFocusToTextBox(){
    document.getElementById("principal").focus();
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}


