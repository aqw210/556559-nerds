﻿var link=document.querySelector(".write-button"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),mail=popup.querySelector("[name=mail]"),storage=localStorage.getItem("login");link.addEventListener("click",function(e){event.preventDefault(),popup.classList.add("modal-content-show"),login.focus(),storage?(login.value=storage,mail.focus()):login.focus()}),close.addEventListener("click",function(e){event.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&mail.value?localStorage.setItem("login",login.value):(e.preventDefault(),console.log("Нужно ввести логин и email"),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});