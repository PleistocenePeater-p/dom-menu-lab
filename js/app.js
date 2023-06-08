// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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