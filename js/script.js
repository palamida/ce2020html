var menubuton = document.getElementsByClassName("menubuton")[0];
var menuwrapper = document.getElementsByClassName("mainmenuoverlay")[0];
var menu = document.getElementsByClassName("mainmenu")[0];
var searchcal = document.getElementsByClassName("searchcall")[0];
var searchizlet = document.getElementsByClassName("searchizlet")[0];
var pozicija = 0;

menubuton.onclick = function () {
  // console.log("click");
  // document.body.classList.contains("menuout")
  //   ? console.log("JE")
  //   : console.log("NIJE");
  menubuton.classList.toggle("menuclose");
  menuwrapper.classList.toggle("visible");
  document.body.classList.toggle("menuout");
};

// var previousScroll = 0;
// window.onscroll = getScrollPosition;

// function getScrollPosition() {
//   var n = window.pageYOffset;
//   n > previousScroll
//     ? menubuton.classList.remove("gore")
//     : menubuton.classList.add("gore");
//   previousScroll = n;
// }

searchcal.onclick = function () {
  searchizlet.classList.toggle("visiblesearch");
};

// harmo.onclick = function (e) {
//   searchizlet.classList.toggle("visiblesearch");
// };

//   $('.harmo').click(function (n) {
//     $(this).toggleClass('isOpen'), $(this).next('.nika').toggleClass('isDown')
//   }),

document.querySelectorAll(".harmo").forEach((item) => {
  item.addEventListener("click", (event) => {
    //handle click
    item.classList.toggle("isOpen");
    item.nextElementSibling.classList.toggle("isDown");
  });
});

document.querySelectorAll(".harmo2").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    //handle click
    item.classList.toggle("isOpen");
    item.nextElementSibling.classList.toggle("isDown");
  });
});

//   $('.harmo2').click(function (n) {
//     return (
//       n.preventDefault(),
//       $(this).next('.nika').hasClass('isDown')
//         ? ($(this).next('.nika').stop().animate({ height: 'hide' }, 500),
//           $(this).next('.nika').removeClass('isDown'))
//         : ($('.isDown')
//             .stop()
//             .animate({ height: 'hide' }, 250)
//             .removeClass('isDown'),
//           $(this).next('.nika').stop().animate({ height: 'show' }, 500),
//           $(this).next('.nika').addClass('isDown')),
//       !1
//     )
//   }),
