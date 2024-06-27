var emailArray=[
    "test@example.com",
    "user123@gmail.com",
    "john.doe@example.org",
    "jane_doe@hotmail.com",
    "info@website.com"
];

var logform =document.getElementById("log")

    logform.addEventListener("submit",function(event){
        event.preventDefault()

        var studId = document.getElementById("studentId").value;
        var email = document.getElementById("email").value;

        var bookingSystemLoginVal ={"studentID":studId,"email":email}

        localStorage.setItem('loginFormvalsForBookingSystem' , JSON.stringify(bookingSystemLoginVal))

        if(emailArray.includes(email)){
            window.location.href ='seachpage.htm'
        }else{
            alert("email is not officially registered by berea")
        }
    
})  

//method to prevent use of nav unless logged in

document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            
                e.preventDefault();
                alert("Error: Please log in first.");
            
        });
    }
})


//footer to appear at bottom
function getBodyHeight() {
    let body = document.body, html = document.documentElement;
    return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  document.getElementById("foot").style.top = (getBodyHeight()/5)+"px";