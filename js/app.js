//global variable, Part 2: Task 5.1
var showingSubMenu = false;

// Menu data structure
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
  

var mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

var topMenuEl = document.getElementById("top-menu");
//topMenuEl.style.height = "100%";
topMenuEl.setAttribute("style", "height:100%")
// ref https://www.w3schools.com/jsref/prop_style_height.asp
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part 2: Task 5.2 - Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(evt){
    evt.preventDefault()
    let lmnt = evt.target; //https://www.w3schools.com/jsref/event_target.asp
                            // "Get the element where the event occured: const element = event.target;"
    if (lmnt.tagName !== "A"){
        return;
    }
    console.log(lmnt.textContent); //https://www.w3schools.com/jsref/prop_node_textcontent.asp
                                //"Return the text content of an element: let text = element.textContent"
// Task 5.3
    if (lmnt.classList.contains("active")){
        lmnt.classList.remove("active");
        showingSubMenu = false;
        subMenuEl.style.top = "0";
        return;
    }
//Task 5.4
    topMenuLinks.forEach()
    this.classList.remove()

});



//3 
menuLinks.forEach(function(link){
    var linksEl = document.createElement("a");
// helpful https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    linksEl.setAttribute("href", link.href)
    linksEl.textContent = link.text
//thank god https://www.w3schools.com/jsref/prop_node_textcontent.asp
//thank god(2) https://www.w3schools.com/jsref/prop_option_text.asp
    topMenuEl.appendChild(linksEl)
//https://developer.mozilla.org/en-US/docs/Web/API/Element/append is this useful? 
//append child seems better
});


/*
  ==========Part 2==========
  */

  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.setAttribute("style", "height:100%")
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a")


  