﻿function initMap(){var e={lat:59.93873,lng:30.32311},o={lat:59.939112,lng:30.32152},a=new google.maps.Map(document.querySelector(".google-map"),{zoom:17,center:o});new google.maps.Marker({position:e,map:a,icon:"img/map-marker.png"})}var Button=document.querySelector(".write-button"),Popup=document.querySelector(".modal"),Сlose=Popup.querySelector(".modal-close"),Form=Popup.querySelector(".write-form"),NameFocus=Popup.querySelector("[name=name]"),EmailFocus=Popup.querySelector("[name=email]"),TextFocus=Popup.querySelector("[name=text]"),NameStorage=localStorage.getItem("name"),EmailStorage=localStorage.getItem("email");Button.addEventListener("click",function(e){e.preventDefault(),Popup.classList.add("modal-show"),NameStorage?(NameFocus.value=NameStorage,EmailFocus.focus(),EmailStorage&&(EmailFocus.value=EmailStorage,TextFocus.focus())):NameFocus.focus()}),Сlose.addEventListener("click",function(e){e.preventDefault(),Popup.classList.remove("modal-show"),Popup.classList.remove("modal-error")}),Form.addEventListener("submit",function(e){NameFocus.value&&EmailFocus.value&&TextFocus.value?(localStorage.setItem("name",NameFocus.value),localStorage.setItem("email",EmailFocus.value)):(e.preventDefault(),Popup.classList.remove("modal-error"),Popup.offsetWidth=Popup.offsetWidth,Popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&Popup.classList.contains("modal-show")&&(Popup.classList.remove("modal-show"),Popup.classList.remove("modal-error"))});