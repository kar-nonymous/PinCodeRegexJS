// UC 1
{
    let pinCode = '281006';
    let regexPattern = RegExp('^[0-9]{6}$');
    if (regexPattern.test(pinCode))
    {
        console.log("Valid pin");
    } 
    else
    {
        console.log("Invalid pin");
    }
}       