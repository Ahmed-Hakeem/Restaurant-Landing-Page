let sections1 = document.getElementsByTagName("section");
let allSections = Object.entries(sections1);
let headerSec= document.querySelector(".sec0");
allSections.unshift(headerSec);

for (i=0 ; i < allSections.length ; i+=1) {
  let textContents =["home","fast delivery","Yummy","order Now","find us"]
  let firstList = document.querySelector("#mobile-nav ul")
  let secondList = document.querySelector("#navigation ul")
  let child1 = document.createElement("LI"); 
  let textnode = document.createTextNode(textContents[i]);
  let anchor1=document.createElement("A");
  anchor1.appendChild(textnode);
  child1.appendChild(anchor1);
  child1.className= "active" + i;
  firstList.appendChild(child1);
  secondList.innerHTML += ("<li class=act"+ i + "><a>"+textContents[i]+"</a> </li>");
}

let socialButtonContainer = document.getElementById("show-social")
let socialButtonContainer1 = document.getElementById("show-social1")
let socialButton = document.querySelector("#show-social ion-icon");
let socialButton1 = document.querySelector("#show-social1 ion-icon");
let socialList =document.getElementById("social-list");

function hideIt(){
  socialButton.style.visibility="hidden";
  socialButton1.style.visibility="visible";
  socialList.style.left= "-3vw";
  socialButtonContainer.style.left= "0px";
  socialButtonContainer1.style.left= "0px";
}
window.addEventListener("load" , function(){
  setTimeout(hideIt ,4500 )
});
socialButton.addEventListener("click",function(){
  hideIt()
});
socialButton1.addEventListener("click",function(){
  socialButton1.style.visibility="hidden";
  socialButton.style.visibility="visible";
  socialList.style.left= "0vw";
  socialButtonContainer.style.left= "3vw";
  socialButtonContainer1.style.left= "3vw";
  setTimeout(hideIt ,6500 );
})

let headerImg = document.querySelector("header img")  ;
let DISCOUNT = document.getElementById("disc");
let NAVIGATION = document.getElementById("navigation");

window.addEventListener( "load", function(){
    function myFunc(){headerImg.setAttribute("id", "imgMove1");
    NAVIGATION.setAttribute("id","navigation2"); };
    setTimeout(myFunc, 400);
}); 

headerImg.addEventListener("mousemove", function(){  
    DISCOUNT.style.transition = "3s" ;
    headerImg.style.transform= "translate(0 ,-20%)"; 
    DISCOUNT.style.opacity = "1" ;
    DISCOUNT.setAttribute("class","discount2") ;
});

headerImg.addEventListener("mouseleave", function(){
    DISCOUNT.style.transition = "0s" ;
    headerImg.style.transform= "translate(0% ,0%)"; 
    DISCOUNT.style.opacity = "0" ;
    let Random = Math.floor(Math.random() * 8)+1;
    let cuponlist = ["burger", "cheese24" , "cheese33" , "burger 18" , "hello12" ,
                     "heart attack" , "hello heartattack" , "power", "fries", "Sandwich"];
    let cupon = cuponlist[Random];
    DISCOUNT.innerHTML = ( Random + "% discount!!" +"<br/>"+"write this cupon :"+"<br/>" + cupon +"<br>" +
                          "<span> notice : every one can use one cupon </span>") ; 
});
                                                      
let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;
sticky = 400 ; 
let showingNavButton = document.getElementById("showingNav");

function hideButton(){
  navbar.classList.add("sticky");
  navbar.style.opacity= "1";
  showingNavButton.style.display = "none";
};

function makingNavSticky(){
  if (window.pageYOffset < sticky) {
    navbar.classList.remove("sticky");  
    showingNavButton.style.display = "none"; 
    navbar.style.opacity= "1";
  }
  else {
    navbar.style.opacity= "0"; //use query
    showingNavButton.style.display = "block"; 
    showingNavButton.addEventListener("click", function hideButton(){
      navbar.classList.add("sticky");
      navbar.style.opacity= "1";
      showingNavButton.style.display = "none";
    });
  }
};

let items1 = [document.querySelector(".act0"),document.querySelector(".act1")
              ,document.querySelector(".act2"),document.querySelector(".act3"),
              document.querySelector(".act4")];             
let items = [document.querySelector(".active0"),document.querySelector(".active1")
              ,document.querySelector(".active2"),document.querySelector(".active3"),
              document.querySelector(".active4")];         
let sections =[document.querySelector(".sec0"), document.querySelector(".sec1") 
              ,document.querySelector(".sec2"),document.querySelector(".sec3"),
              document.querySelector(".sec4")];             
let navigationIcon = document.getElementById("nav-icon") ; 
let mobileNavigation = document.getElementById("mobile-nav") ;

navigationIcon.addEventListener("click",function(){
  showingMobileNav();
});

function showingMobileNav() {   
  mobileNavigation.style.opacity= "1"; 
  mobileNavigation.style.height= "100%"; 
  mobileNavigation.style.display= "block"; 
  mobileNavigation.addEventListener("click", function(){ 
    for (i= 0 ; i< items.length ; i+= 1){
      scrollingIntoView(items[i],sections[i])
    };

    setTimeout(function(){mobileNavigation.style.display="none";}, 100);
  })
};

// scrolling to sections by clicking on navbar buttons
for (i= 0 ; i< items.length ; i+= 1){
 scrollingIntoView(items1[i],sections[i])
 scrollingIntoView(items[i],sections[i])
};

function scrollingIntoView(element, elementViewed){
  element.addEventListener("click" , function(){       
  elementViewed.scrollIntoView({behavior: "smooth", block: "start"}) ;
  hideButton();   
  })

}    

 //Checks if section is in view and adds active-class to the active section
function checkIfSectionInView() {
  /*check the current view */
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
// looping through all sections to check if it is in view or not 
  for (i = 0; i <= 4 ; i++) {
    let sectionInFullView = sections[i];
    let actives = items[i]; 
    let actives1 = items1[i];  
    window.addEventListener("scroll", function(){
        if (isInViewport(sectionInFullView)) {
            let current = document.querySelectorAll(".playing");
            // remove playing class from all links and then add it to the section viewed
            for (y=0 ; y < current.length ; y++){
                    current[y].classList.remove("playing"); 
                    current[y].classList.remove("playing");}  ; 
         actives.classList.add("playing");
         actives1.classList.add("playing");
        }      
        makingNavSticky();
    },
      false
    ); 
  }
}

checkIfSectionInView(); 

let images = document.querySelectorAll(".sec2 ul li figure img");
let figCaptions = document.querySelectorAll(".sec2 figcaption");
for( x=0 ;x < images.length ;x++ ){
  let captions = figCaptions[x];/*trick*/
  images[x].addEventListener("mouseover",function(){
    captions.style.visibility="visible";
    captions.style.top="80%";
  });
  images[x].addEventListener("mouseout",function(){
    captions.style.visibility="hidden";
    captions.style.top="120%";  
  });  
  
}