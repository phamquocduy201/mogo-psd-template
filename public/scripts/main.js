"use strict";var headerToggle=document.querySelector(".header-top__toggle"),headerMenu=document.querySelector(".header-top__menu"),isExpand="is-expand";headerToggle.addEventListener("click",function(){headerMenu.classList.add(isExpand)}),window.addEventListener("click",function(e){headerMenu.contains(e.target)||e.target.matches(".header-top__toggle")||headerMenu.classList.remove(isExpand)}),$(document).ready(function(){$(".quote-container").on("init",function(e,t){t=t.$dots.find("li");t.addClass("circle"),t.find("button").remove()}),$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",dots:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:767,settings:{arrows:!1}}]})});