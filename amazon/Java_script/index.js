const userName = sessionStorage.getItem("userName");
        
        // Display the user's name if available
        if (userName) {
            document.getElementById("profile_name").innerHTML = `Welcome <br> ${userName}`;
        } else {
            document.getElementById("profile_name").innerHTML = "Welcome Guest";
        }