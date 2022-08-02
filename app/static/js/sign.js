$(function() {
  function checkPasswordMatch() {
    var password = $("#p1").val();
    var confirmPassword = $("#p2").val();
    var name = $("#name").val();
    var mail = $("#mail").val();

    let btn = document.querySelectorAll('.btn6');

    if (password != confirmPassword) {
      $("#divCheckPasswordMatch").html("Пароли не совпадают");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if (mail === '') {
      $("#divCheckPasswordMatch").html("Заполните поле почты");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if (name === '') {
      $("#divCheckPasswordMatch").html("Заполните поле имени");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if (password === '' && confirmPassword === '') {
      $("#divCheckPasswordMatch").html("");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if(password.length < 8) {
      $("#divCheckPasswordMatch").html("Минимальная длина пароля 8 символов");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if(!/[0-9]/.test(password)) {
      $("#divCheckPasswordMatch").html("Пароль должен содержать в себе цифры");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else if(/[? $ # @ % & * ~ ! ^ ( ) ' " > < \/ \\ +]/.test(password)) {
      $("#divCheckPasswordMatch").html("Пароль содержит недопустимые символы");
      btn[0].disabled = true;
      btn[0].style.color = 'rgb(193, 193, 193)';
    }
    else {
      $("#divCheckPasswordMatch").html("");
      btn[0].disabled = false;
      btn[0].style.color = 'white';
    }

  }

  $(document).ready(function () {
    $("#p1").keyup(checkPasswordMatch);
    $("#p2").keyup(checkPasswordMatch);
    $("#name").keyup(checkPasswordMatch);
    $("#mail").keyup(checkPasswordMatch);
  });
})