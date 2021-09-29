window.addEventListener("load" , diaplay)

var x = document.getElementById("log_out")
x.addEventListener("click" , logout)

function diaplay (){
    var name = document.getElementById("display_name")
    var time = document.getElementById("time")
    name.textContent = localStorage.getItem("user")
    time.textContent = Date()
    setInterval(check , 1000)
}


function check(){
var data = localStorage.getItem("record")

    arr = JSON.parse(data) || []
    
    for (var i = 0 ; i < arr.length; i++){
        if(localStorage.getItem("user") == arr[i].user){
            var first_log = arr[i].time
            if((Date.now() - first_log) > 10000){
                setTimeout(session_timeout , 0)
            }
            console.log((Date.now() - first_log))
            break
        }
    }
}

function session_timeout(){
    alert("session has expired")
    window.location.replace("index.html")
    localStorage.removeItem("user")
}




function logout(){
    alert("You are logged out")
    window.location.replace("index.html")
    localStorage.removeItem("user")
}
 