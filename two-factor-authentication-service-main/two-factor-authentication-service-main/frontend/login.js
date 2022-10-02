function generateToken(){
    let key ="";
    key = document.getElementById('key').value;
    if(key === ""){
        alert("Enter Key to generate token");
    }
    else{
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://two-factor-authentication-api.azurewebsites.net/authentication/generateToken", false);
        xhttp.setRequestHeader('Content-type', 'application/json');
        let json = {
            "key": key
        }; 
        // console.log(JSON.stringify(json));
        xhttp.send(JSON.stringify(json));
        responseToken = JSON.parse(xhttp.responseText);
        // console.log(responseToken);
        document.getElementById('token').value = responseToken;  
    }
}
function verifyToken(){
    let email ="", usertoken ="";
    email = document.getElementById('email').value;
    usertoken = document.getElementById('usertoken').value;
    if(key === "" || usertoken == ""){
        alert("Enter Email and token to login");
    }
    else{
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://two-factor-authentication-api.azurewebsites.net/authentication/verifyToken", false);
        xhttp.setRequestHeader('Content-type', 'application/json');
        let json = {
            "email": email, 
            "token": usertoken
        }; 
        console.log(JSON.stringify(json));
        xhttp.send(JSON.stringify(json));
        verify = JSON.parse(xhttp.responseText);
        // console.log(responseToken);
        if(verify == true){
            alert("Success");
        } 
        else{
            alert("Wrong TOTP");
        }
    }
}