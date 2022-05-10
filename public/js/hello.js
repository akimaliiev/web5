const url = window.location.search;
const params = new URLSearchParams(url);
let name = params.get("login");
console.log(name);
document.getElementById("name").innerHTML = name;
function hiddd() {
    $("#alllert").hide();
}
setTimeout(hiddd, 5000);
