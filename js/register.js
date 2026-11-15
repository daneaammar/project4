const registerform = document.getElementById("registerform")

 registerform.addEventListener("submit",function(event){
    event.preventDefault();
    const firstname = document.getElementById("firstn").value;
    localStorage.setItem("firstname",firstname)
        const lastsname = document.getElementById("lastn").value;
        localStorage.setItem("lastname",lastsname)
            const emailname = document.getElementById("emaill").value;
            localStorage.setItem("email",emailname)
                const passname = document.getElementById("pass").value;
                 localStorage.setItem("password",passname)
                 alert("Registration sucessful")
                 setTimeout(() => {
                    window.location.href="login.html"
                    
                 }, 1000);




 }


);