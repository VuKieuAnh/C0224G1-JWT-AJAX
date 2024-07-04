// let token= "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzIwMDYzMDA3LCJleHAiOjE3MjAxNDk0MDd9.JwtLuU9ddRg94obPoaIOGesMKeAu4q6A25F0sJotJFA";
let token = getToken();
$.ajax({
    // de su dung token
    headers:{
        "Authorization": "Bearer " + token
    },
    method: "GET",
    url: "http://localhost:8080/api/customers",
    success: function (data){
        console.log(data)
    }
})

function getUser() {
    let user = JSON.parse(localStorage.getItem("token"));
    if (user==null){
        window.location.href="../login/login.html";
    }
    else {
        return user;
    }

}
function getToken() {
    let u = getUser();
    let token = u.token;
    return token;

}
