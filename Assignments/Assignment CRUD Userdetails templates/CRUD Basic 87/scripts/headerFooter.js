
// title h1
var title_a = document.createElement("a");
title_a.innerHTML = "Travelling India";
var title_h1 = document.createElement("h1");
title_h1.appendChild(title_a);

// title h2
var title_h2 = document.createElement("h2");
title_h2.innerHTML = "In search of...";

//title
document.getElementById("title").append(title_h1, title_h2);


// //header nav
var nav_ul = document.createElement("ul"); 
var list_items = ["Home","User Detials","Register","Category","Contact us"];
var list_link = ["./index.html","./user_details.html","registration_page.html","#section3","#footer"];

for(var i=0; i<list_items.length; i++)
{
    var nav_a =document.createElement("a"); 
    nav_a.innerHTML = list_items[i];
    nav_a.setAttribute("href",list_link[i]);
    var nav_li = document.createElement("li"); 
    nav_li.appendChild(nav_a);
    nav_ul.appendChild(nav_li);
}
document.getElementsByTagName("nav")[0].appendChild(nav_ul);


//Footer
var footer_p1 = document.createElement("p");
var footer_p2 = document.createElement("p");

footer_p1.innerHTML = "Copyright © 2021 - All Rights Reserved - Travel Blog";
footer_p2.innerHTML = "Template cloned from OS-Templates by Ervin";

document.getElementById("footer").append(footer_p1, footer_p2);