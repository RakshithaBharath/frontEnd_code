function log_in(){
    let user_name = document.getElementById("user_name").value;
    let user_password = document.getElementById("user_password").value;

    if(user_name === ""){
        alert("Enter User Number")
    }
    else if(user_password === ""){
        alert("Enter Password")
    }else{

        window.location.href = "amazon_home.html";
        sessionStorage.setItem("userName", user_name); 
    }
}