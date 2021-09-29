window.addEventListener("load" , addrecord)

var x = document.getElementById("log_out")
x.addEventListener("click" , logout)

function logout(){
    alert("You are logged out")
    window.location.replace("index.html")
}



var auth_customer_arr = [
    {
        user: "ritesh@gmail.com",
        admin: "adminritesh@abc.com",
        pass: "12345"
    },
    {
        user: "ram@gmail.com",
        admin: "adminram@abc.com",
        pass: "5500"
    },
    {
        user: "ravi",
        pass: "87898"
    },
    {
        user: "qwerty",
        pass: "55500"
    },
]

function addrecord() {
    var target = document.getElementById("all_user")

    var div = document.createElement("div")

    for (var i = 0  ; i <  auth_customer_arr.length; i++){
        var x = auth_customer_arr[i]
        var h4 = document.createElement("h4")
        h4.setAttribute("name", x.user)
        h4.textContent = x.user
        h4.addEventListener("click" , display_record)
        div.append(h4)
    }

    target.append(div)
}

function display_record(elem){
    var target = document.getElementById("history")
    target.innerHTML = ""
    var request = elem.target.textContent
    //console.log(elem.target.textContent)
    var data = localStorage.getItem("record")
    data = JSON.parse(data)


    var div = document.createElement("div")

    for (var i = 0 ; i < data.length; i++){
        var x = data[i]
        //console.log(x)
        if (request == x.user){
            var p = document.createElement("p")
            p.textContent = x.time
            div.append(p)
        }
    }

    /*var p = document.createElement("p")
            p.textContent = "Nothing to display"
        div.append(p)*/




    target.append(div)
}