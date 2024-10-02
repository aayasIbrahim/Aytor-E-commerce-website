// fixed nav bar when you scroll

const menu = document.querySelector('#menu');

window.addEventListener('scroll', () => {
  if (window.scrollY>700) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});

// nav bar end


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
  arrows:false,
  dots:true, 
  autoplay: true,
  autoplaySpeed: 1600,
  slidesToScroll: 1,
  dotsClass:"container btnactive"

});
})
// tooltip start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// tooltip end

// jQuery slick slider  for bannar end



$(function(){
  
  $('.productSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows:true,
    prevArrow:`<i class="arrowsLeft fa-solid fa-arrow-right"></i>`,
    nextArrow:`<i class="arrowsRight fa-solid fa-arrow-left"></i>`,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
})
	// jQuery slick slider for product start
