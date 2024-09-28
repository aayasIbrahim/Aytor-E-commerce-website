// search fied start
let searchIcon=document.querySelector("#search");
let cross_searchInput=document.querySelector("#cross_searchInput");
let search_body=document.querySelector("#search-body");
let content=document.querySelector(".content");
let footerSsearch=document.querySelector("#footer-search");

searchIcon.addEventListener("click",function(){
  if(!search_body.classList.contains('active')){
    search_body.classList.add("active")
    content.classList.add("active")
  }

 
});
cross_searchInput.addEventListener("click",function(){
    if(search_body.classList.contains('active')){
        search_body.classList.remove("active")
        content.classList.remove("active")
        
    }
 
})
footerSsearch.addEventListener("click",function(){
    if(!search_body.classList.contains("active")){
        search_body.classList.add("active")
        content.classList.add("active")
    }
})
// search field end




// log in start
let login=document.querySelector("#login");
let logincross=document.querySelector(".logincross");
let account=document.querySelector("#account");

account.addEventListener("click",function(){
    login.classList.add("active")
})
logincross.addEventListener("click",function(){
    login.classList.remove("active")
})
login.addEventListener("click",function(e){
 if(e.target.classList.contains("active")){
    login.classList.remove("active")
 }
})
// log in end




// nav footer mobile for desing start 
let footerSearch=document.querySelector('#footer-search');
footerSearch.addEventListener("click",function(){
  search_body.classList.add("active")
})
// nav footer mobile for desing start 



// jQuery slick slider for bannar start
$(function(){
  
$('.parent').slick({
  dots:true,
  arrows:false,
  dotsClass:"container btnactive"

});
})
// jQuery slick slider  for bannar end
