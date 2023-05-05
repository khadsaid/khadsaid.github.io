
    function login(){
      var  email= document.getElementById("email").value;
      var password=document.getElementById("password").value;
      if(email ==="admin" && password==="12345678"){
        window.location = "pageview.html";
      }else{
        alert("invalid email or password");
      }
    }
