// wow bounceInLeft | wow bounceInUp | wow bounceInDown | wow rollIn |wow bounceInRight
function renderLink() {
  const alist = document.getElementsByClassName("recent-post-item");
  if (alist) {
    for (var idx = 0; idx < alist.length; idx++) {
      var mya = alist[idx];
      mya.className += " wow rollIn";
    }
  }
  const arr = document.getElementsByClassName("card-widget");
  if (arr) {
    for (var idx = 0; idx < arr.length; idx++) {
      var mya = arr[idx];
      mya.className += " wow slideInRight";
    }
  }
  new WOW().init();
}
renderLink();
// var arr = document.getElementsByClassName("recent-post-item");
// for (var i = 0; i < arr.length; i++) {
//   arr[i].classList.add("wow bounceInUp");
// }
// 给首页文章卡片套上动画
// var arr = document.getElementsByClassName("recent-post-item");
// for (var i = 0; i < arr.length; i++) {
//   arr[i].classList.add("wow");
//   arr[i].classList.add("animate__zoomIn");
// }
// // 给侧栏卡片套上动画
// var arr = document.getElementsByClassName("card-widget");
// for (var i = 0; i < arr.length; i++) {
//   arr[i].classList.add("wow");
//   arr[i].classList.add("animate__slideInRight");
// }

// wow = new WOW({
//   boxClass: "wowjs",
//   // 当用户滚动时显示隐藏框的类名称
//   animateClass: "animate__animated",
//   // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
//   offset: 0,
//   // 定义浏览器视口底部与隐藏框顶部之间的距离。
//   // 当用户滚动并到达此距离时，将显示隐藏的框。
//   mobile: true,
//   // 在移动设备上打开/关闭wow.js。
//   live: true,
//   // 在页面上检查新的 wow.js元素。
// });
// wow.init();
