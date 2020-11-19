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

// UC 2
{
    let pinCode = 'A28100';
    let regexPattern = RegExp('^[0-9]{1}[a-zA-Z0-9]{5}$');
    if (regexPattern.test(pinCode))
    {
        console.log("Valid pin");
    } 
    else
    {
        console.log("Invalid pin");
    }
}

// UC 3
{
    let pinCode = '28100B';
    let regexPattern = RegExp('^[0-9]{1}[a-zA-Z0-9]{4}[0-9]{1}$');
    if (regexPattern.test(pinCode))
    {
        console.log("Valid pin");
    } 
    else
    {
        console.log("Invalid pin");
    }
}