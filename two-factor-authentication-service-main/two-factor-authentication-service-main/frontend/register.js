let secret = "";
function register() {
    // alert("The function 'test' is executed");

    if(secret == ""){
        alert("Generate Key first");
    }
    else{
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://two-factor-authentication-api.azurewebsites.net/authentication/registerService");
        xhttp.setRequestHeader('Content-type', 'application/json');
        let json = {
            "email": document.getElementById('email').value,
            "key": document.getElementById('key').value
        }; 
        console.log(JSON.stringify(json));
        xhttp.send(JSON.stringify(json));
    }

}

function generateKey(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://two-factor-authentication-api.azurewebsites.net/authentication/generateKey", false);
    xhttp.send();
    secret = JSON.parse(xhttp.responseText);
    // console.log("working");
    document.getElementById('key').value = secret.base32;    
}