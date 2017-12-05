var Button = document.querySelector(".write-button");
var Popup = document.querySelector(".modal");
var Close = Popup.querySelector(".modal-close");
var Form = Popup.querySelector(".write-form");
var NameFocus = Popup.querySelector("[name=name]");
var EmailFocus = Popup.querySelector("[name=email]");
var TextFocus = Popup.querySelector("[name=text]");
var NameStorage = localStorage.getItem("name");
var EmailStorage = localStorage.getItem("email");

Button.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add("modal-show");
  if (NameStorage) {
    NameFocus.value = NameStorage;
    EmailFocus.focus();
    if (EmailStorage) {
      EmailFocus.value = EmailStorage;
      TextFocus.focus();
    }
  } else {
    NameFocus.focus();
  }
});

Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("modal-show");
  Popup.classList.remove("modal-error");
});

Form.addEventListener("submit", function (evt) {
  if (!NameFocus.value || !EmailFocus.value || !TextFocus.value) {
    evt.preventDefault();
    Popup.classList.remove("modal-error");
    Popup.offsetWidth = Popup.offsetWidth;
    Popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", NameFocus.value);
    localStorage.setItem("email", EmailFocus.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("modal-show")) {
    Popup.classList.remove("modal-show");
    Popup.classList.remove("modal-error");
    }
  }
});

function initMap() {
  var nerds = {lat: 59.938730, lng: 30.323110};
  var center = {lat: 59.9391120, lng: 30.321520};
  var map = new google.maps.Map(document.querySelector('.google-map'), {
    zoom: 17,
    center: center
  });
  var marker = new google.maps.Marker({
    position: nerds,
    map: map,
    icon: 'img/map-marker.png'
  });
}