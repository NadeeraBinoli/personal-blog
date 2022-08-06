const navLinkUl = document.querySelector(".nav-link-ul");
const hambergerMenue = document.querySelector(".hamberger-menue");
const menueClose = document.querySelector(".menue-close");

hambergerMenue.addEventListener('click',()=> {
const dataVisible =  navLinkUl.getAttribute("data-visible");
if (dataVisible === "false") {
  navLinkUl.setAttribute("data-visible", true);
}
}) ;

menueClose.addEventListener('click',()=> {
  const dataVisible =  navLinkUl.getAttribute("data-visible");
 if (dataVisible==="true") {
  navLinkUl.setAttribute("data-visible", false);
}
}) ;
