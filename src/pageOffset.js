// //function pageOffset() {
//     document.querySelector('bio-page').scrollIntoView({
//         top:2914,
//         behavior: 'smooth'
//     });
//     // let testDiv = document.getElementById("bio-page");
//     setTimeout("window.(0, 2914);", 2500
//     );
//     // alert(document.getElementById("work-page").offsetTop);
// //}
//   console.log(testDiv.offsetTop);
// 2914
// id="work-offset" onClick=pageOffset()

// $('html, body').animate({
//     scrollTop: $("bio-page").offset().top
// }, 8000);

// setTimeout(function pageOffset() {
//     $('html, body').animate({
//       scrollTop: $(window).scrollTop() + 2914
//     });
//   },9000);
function pageOffset(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top:targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    }); // horizontal and vertical scroll increments
     //scrolldelay = setTimeout('pageOffset()'); // scrolls every 100 milliseconds
}

/* To actually start scrolling down */

// pageOffset();