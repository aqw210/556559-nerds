 var link =document.querySelector(".write-button");

    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-content-close");

    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=login]");
    var mail = popup.querySelector("[name=mail]");

    var storage = localStorage.getItem("login");

    link.addEventListener("click", function(evt) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      login.focus();

      if (storage) {
        login.value = storage;
        mail.focus();
      } else {
        login.focus();
      }

    });

    close.addEventListener("click", function(evt) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
      if (!login.value || !mail.value) {
        evt.preventDefault();
        console.log("Нужно ввести логин и email");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        localStorage.setItem("login", login.value);
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
          popup.classList.remove("modal-content-show");
          popup.classList.remove("modal-error");
        }
      }
    });