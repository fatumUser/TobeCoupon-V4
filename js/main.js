
function ContentLoaded() {
  document.getElementById("slider").classList.toggle("slider-show");
}
function ContentLoadedAlphabet() {
  document.getElementById("alphabet").classList.toggle("content-show");
}
function ContentLoadedShop() {
  document.getElementById("shop").classList.toggle("content-show");
}
function ContentLoaded_StorePage() {
  document.getElementById("catalog").classList.toggle("content-show");
}
function ContentLoaded_FaqPage() {
  document.getElementById("catalog_faq").classList.toggle("content-show");
}
function ContentLoaded_StoreCouponPage() {
  document.getElementById("catalog_stores-coupons").classList.toggle("content-show");
}
function ContentLoaded_BlogPage() {
  document.getElementById("catalog_blog").classList.toggle("content-show");
}
function ContentLoaded_BlogArticlePage() {
  document.getElementById("catalog_blog-article").classList.toggle("content-show");
}

document.addEventListener("DOMContentLoaded", ContentLoaded);
document.addEventListener("DOMContentLoaded", ContentLoadedAlphabet);
document.addEventListener("DOMContentLoaded", ContentLoadedShop);
document.addEventListener("DOMContentLoaded", ContentLoaded_StorePage);
document.addEventListener("DOMContentLoaded", ContentLoaded_FaqPage);
document.addEventListener("DOMContentLoaded", ContentLoaded_StoreCouponPage);
document.addEventListener("DOMContentLoaded", ContentLoaded_BlogPage);
document.addEventListener("DOMContentLoaded", ContentLoaded_BlogArticlePage);

function dropBlock() {
  document.getElementById("drop-block").classList.toggle("drop-block-show");
  document.getElementById("text_special-offers").classList.toggle("text_special-offers-show");
}
function footerMenuCoupons() {
  document.getElementById("footer-col__title-1").classList.toggle("footer-col__title-show");
}
function footerMenuSocial() {
  document.getElementById("footer-col__title-2").classList.toggle("footer-col__title-show");
}
function imgPlusMinus() {
  document.getElementById("accordeon-block__img-plus").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus").classList.toggle("accordeon-block__img-minus-show");
  document.getElementById("faq-top").classList.toggle("faq-top-show");
}
function imgPlusMinus_2() {
  document.getElementById("accordeon-block__img-plus_2").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_2").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_3() {
  document.getElementById("accordeon-block__img-plus_3").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_3").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_4() {
  document.getElementById("accordeon-block__img-plus_4").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_4").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_5() {
  document.getElementById("accordeon-block__img-plus_5").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_5").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_6() {
  document.getElementById("accordeon-block__img-plus_6").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_6").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_7() {
  document.getElementById("accordeon-block__img-plus_7").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_7").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_8() {
  document.getElementById("accordeon-block__img-plus_8").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_8").classList.toggle("accordeon-block__img-minus-show");
}
function imgPlusMinus_9() {
  document.getElementById("accordeon-block__img-plus_9").classList.toggle("accordeon-block__img-plus-none");
  document.getElementById("accordeon-block__img-minus_9").classList.toggle("accordeon-block__img-minus-show");
}

function AccordeonPadding() {
  document.getElementById("faq-top").classList.toggle("faq-top-show");
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-scroll-show');
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements =
document.querySelectorAll(
  '.article, .shops-col, .main-btn, .banners, .about, .faq-accordeon, .coupons-col__wrap, .content-img, .brand-content__info, .banner-sale, .brand-content__block-info'); /*''*/
for (let elm of elements) {
  observer.observe(elm);
}
