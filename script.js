//function to initiate onclick event when compute interest button is clicked
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
    var amount = interest; //need to define amount to calculation used in var interest

    //display message with calculated values after button is clicked
    // <mark> was used to highlight words on the output </mark>
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
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


