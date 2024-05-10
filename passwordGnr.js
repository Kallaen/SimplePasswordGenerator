function generatepass(plength){
    var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~£¨";
    var numbers="0123456789"
    var dictionary = new Array();

    var chkChars = document.getElementById("chkBoxChars").checked;
    var chkSpCha = document.getElementById("chkBoxSpecialChars").checked;
    var chkNumbers = document.getElementById("chkBoxNumbers").checked;

    if (chkChars) {
        dictionary[0] = keylist;
    }
    if (chkSpCha) {
        if (dictionary.length > 0)
            dictionary[1] = specialChars;
        else
            dictionary[0] = specialChars;
    }
    if (chkNumbers) {
        if (dictionary.length > 1)
            dictionary[2] = numbers;
        else
            dictionary[1] = numbers;
    }

    var temp='';
    for (var i=0;i<plength;i++)
    {
        var tmpArr = dictionary[Math.floor(Math.random()*dictionary.length)];
        temp+= tmpArr.charAt(Math.floor(Math.random()*tmpArr.length))
    }
    return temp;
}

function populateform(enterlength){
    var group = document.pwdGen.group1;
    var hasChecked = false;
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked)
        {
            hasChecked = true;
            break;
        }
    }
    if (hasChecked == false) {
        alert("Mindst en skal være valgt");
        return false;
    } else {
        document.getElementById("lblResult2").innerHTML = generatepass(enterlength);
        document.getElementById("lblResult1").innerHTML = generatepass(enterlength);
        document.getElementById("lblResult3").innerHTML = generatepass(enterlength);
    }
}



