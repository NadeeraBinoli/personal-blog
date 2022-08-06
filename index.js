//  hamberger-menue button
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

// menue-search button
const searchForm = document.querySelector(".search-form");
const menueSearchButton = document.querySelector(".menue-search");

menueSearchButton.addEventListener('click',()=> {
const visibility =  searchForm.getAttribute("data-visibility");
if (visibility === "false") {
  searchForm.setAttribute("data-visibility", true);
} else if (visibility==="true") {
  searchForm.setAttribute("data-visibility", false);
}
}) ;
