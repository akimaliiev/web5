$(document).ready(function () {
  $(':input[type="submit"]').prop("disabled", true);
});

function Log() {
  let x = $("#login").val();
  if (x.length > 5) {
    $("#true").removeClass("b");
    plays();
    return true;
  } else {
    alert("login should consist at least 6 characters");
    true
  }
}
function Pass() {
  let x = $("#pass1").val();
  if (
    x.length > 5 &&
    Log() &&
    CheckPassUp() &&
    CheckPassChar() &&
    CheckPassNumber()
  ) {
    plays();
    $("#true1").removeClass("b");
    $("#textpass").removeClass("b");
    $("#pass2").removeClass("b");
    $(':input[type="submit"]').prop("disabled", false);
    $(':input[type="submit"]').css('color', 'white');
  } else {
    alert("login should consist at least 6 characters");
    return false
  }
}

function CheckPassUp() {
  let x = $("#pass1").val();
  if (/[A-Z]/.test(x)) {
    document.getElementById("password1").classList.add("f");
    return true;
  } else {
    return false;
  }
}
function CheckPassChar() {
  let x = $("#pass1").val();
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(x)) {
    document.getElementById("password2").classList.add("f");
    return true;
  } else {
    return false;
  }
}
function CheckPassNumber() {
  let x = $("#pass1").val();
  if (/\d/.test(x)) {
    document.getElementById("password3").classList.add("f");
    return true;
  } else {
    return false;
  }
}
function plays() {
  var audio = document.getElementById("audio");
  audio.play();
}

