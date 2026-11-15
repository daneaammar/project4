




const loginform = document.getElementById("loginform")

 loginform.addEventListener("submit",function(event){
    event.preventDefault();
   
            const emailn= document.getElementById("email").value;
             const email=(localStorage.getItem("email"))
                const passn = document.getElementById("password").value;
                  const password= (localStorage.getItem("password"))
                
                
if( email===emailn&&password===passn){
   alert("welcome in account")
   setTimeout(() => {
                    window.location.href="home.html"
                    
                 }, 1000);
const links=getElementsByClassName("linkin");


}
else{
   alert("password or email Invalid")
}



               }
);