// Dom maupulation

// ways to select elements

// getelementbyid()

// const title = document.getElementById("main-heading");
// console.log(title);

// // getelemnentbyclassname

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// // getEleementbytagname

// const tagName = document.getElementsByTagName("li");
// console.log(tagName);

// // querySelector

// const container = document.querySelector("div");
// console.log(container);

// queryselectorall->>seelects alll the query where as queryselector just selects the first div or conatiner

// -----------------------//
// STYLING-ELEMENTS
// const title = document.querySelector("#main-heading");

// // manupulating the styling of the heading
// // inline-styling--workd on single element
// title.style.color = "red";

// console.log(title);

// const listitems = document.querySelectorAll(".list-items");
// console.log(listitems);

// for (i = 0; i < listitems.length; i++) {
//   listitems[i].style.fontSize = "4rem";
//   listitems[i].style.color = "blue";
// }

// CREATE ELEMENT
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// adding elements
// ul.append(li);
//modifying the text

// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);

// li.innerText = "pagal-Man";

// modifying attributs and classes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// // attribute not working

// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id"));
// li.classList.add("list-items");
// remove elements
// li.remove();
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// TRAVERSING IN THE DOM
let ul = document.querySelector("ul");
//PARENT NODE TRAVERSAL-- DOWN TOO TOP

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// grandparents
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// // console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

// CHILD NODE TRAVERSAL---TOP TO DOWN
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "red";

// console.log(ul.children);

// SIBLING NODE TRAVERSAL--same level dont have to be same type
// console.log(ul.previousSibling);
