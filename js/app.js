

// Menu data structure, Task 5.0
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  

//Task 1.0
var mainEl = document.querySelector("main");
//Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";
//Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//Task 1.3
mainEl.classList.add("flex-ctr");
//Task 2.0
const topMenuEl = document.getElementById("top-menu");
//Task 2.1
topMenuEl.style.height = "100%"
//Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Task 2.3
topMenuEl.classList.add("flex-around");

//Task 3.1 
menuLinks.forEach(function(link){
    const linksEl = document.createElement("a");
    linksEl.setAttribute("href", link.href);
    linksEl.textContent = link.text;
    topMenuEl.appendChild(linksEl)
// ref https://www.w3schools.com/jsref/prop_style_height.asp
// helpful https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//thank god https://www.w3schools.com/jsref/prop_node_textcontent.asp
//thank god(2) https://www.w3schools.com/jsref/prop_option_text.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Element/append is this useful? 
//append child seems better
});

//======Part 2======//
  //Task 4.0
  const subMenuEl = document.getElementById("sub-menu"); 
  //Task 4.1
  //subMenuEl.setAttribute("style.height:100%");  
  subMenuEl.style.height = "100%";
  //Task 4.2
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"; 
  //Task 4.3
  subMenuEl.classList.add("flex-around"); 
  //Task 4.4
  subMenuEl.style.position = "absolute";  
  //Task 4.5
  subMenuEl.style.top = "0";  

//Task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu A");
let showingSubMenu = false;

//Task 5.2 - Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(evt){
    evt.preventDefault()
    const lmnt = evt.target; 
    if (lmnt.tagName !== "A")
        return;
    console.log(lmnt.textContent); 

//https://www.w3schools.com/jsref/event_target.asp
// "Get the element where the event occured: const element = event.target;"
//https://www.w3schools.com/jsref/prop_node_textcontent.asp
//"Return the text content of an element: let text = element.textContent"

// Task 5.3
    if (lmnt.classList.contains("active")){
        lmnt.classList.remove("active");
        showingSubMenu = false;
        subMenuEl.style.top = "0";
        return;
    }
//Task 5.4
    topMenuLinks.forEach(function(lmnt){
    lmnt.classList.remove("active");
    });

//Task 5.5
lmnt.classList.add("active")

//Task 5.6 //peeked
const lmntData = menuLinks.find(function(lmntObj){
  return lmntObj.text === lmnt.textContent;
});
showingSubMenu = "subLinks" in lmntData;

//Task 5.7
if (showingSubMenu){
  buildSubMenu(lmntData.subLinks);
  subMenuEl.style.top = "100%"
}
else {
  subMenuEl.style.top = "0"
  mainEl.innerHTML = "<h1>about</h1>";
  }
});

//Task 5.8
function buildSubMenu(subLinks){
  subMenuEl.innerHTML = "";
  subLinks.forEach(function(lmnt){
    const linksEl = document.createElement("A")
    linksEl.setAttribute("href", lmnt.href); //
    linksEl.textContent = lmnt.text; //
    subMenuEl.appendChild(linksEl);
  });
}

//Task 6.0
subMenuEl.addEventListener("click", function(evt){
  evt.preventDefault()
  let lmnt = evt.target; 
  if (lmnt.tagName !== "A"){
    return;
  }
  console.log(lmnt.textContent);

  //Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  //Task 6.2
  topMenuLinks.forEach(function(link){
    link.classList.remove("active");
  });

  //Task 6.3
  mainEl.innerHTML = `<h1>${link.textcontent}</h1>`;

});







