// let token= "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzIwMDYzMDA3LCJleHAiOjE3MjAxNDk0MDd9.JwtLuU9ddRg94obPoaIOGesMKeAu4q6A25F0sJotJFA";
let token = getToken();
function showAllCustomer() {
    $.ajax({
        // de su dung token
        headers:{
            "Authorization": "Bearer " + token
        },
        method: "GET",
        url: "http://localhost:8080/api/customers",
        success: function (data){
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td><a onclick="deleteById(${data[i].id})">delete</a></td>
    </tr>`;
            }
            document.getElementById("content").innerHTML = content;
        }
    })
}
showAllCustomer();


// Xoa
function deleteById(id) {
    // chan su kien mac dinh cua the
    event.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/customers/" + id,
        success: function (data){
            showAllCustomer();
        }
    })

}

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

function create() {
    let name = document.getElementById('name').value;
}
