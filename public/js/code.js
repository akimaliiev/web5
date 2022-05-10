let post = document.getElementById("post");
post.addEventListener("click", function () {
  let name = document.getElementById("names").value;
  let comment = document.getElementById("comment").value;

  let li = document.createElement("li");
  let text = document.createTextNode(name + ": " + comment);
    li.style.before = "none";
  li.appendChild(text);
  document.getElementById("ddd").appendChild(li);
});
