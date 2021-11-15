
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
var list_items = ["Home","Places","About","Category","Contact us"];
var list_link = ["#title","#section1","#section2","#section3","#footer"];

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

//Container section1 
var sec1_image_array = ["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thetoptravelclub.com%2Fwp-content%2Fuploads%2F2020%2F03%2F4b77d2f4-20d5-4394-fdde-994322566c79.jpg&f=1&nofb=1",
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iyFTshzC1-NPo9KCPmZdwwAAAA%26pid%3DApi&f=1",
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.R9ohYI7KfGZE0v3TQ3VPSwHaIc%26pid%3DApi&f=1",
 "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nolG_jwRXPmDOY5FxtYKqgHaE8%26pid%3DApi&f=1"]

var sec1_figcap_array = ["TajMahal", "Araku", "Charminar", "India Gate"];
for(i=0; i<4; i++){
  var sec1_article = document.createElement("article");
  var sec1_figure = document.createElement("figure");
  var sec1_figure_img = document.createElement("img");
  var sec1_figcaption = document.createElement("figcaption");
  
  sec1_figure_img.setAttribute("src", sec1_image_array[i]);
  sec1_figcaption.innerHTML = sec1_figcap_array[i];
  sec1_figure.append(sec1_figure_img, sec1_figcaption);
  sec1_article.append(sec1_figure);
  document.getElementById("section1").appendChild(sec1_article);

}

// Container section2
var sec2_p = document.createElement("p");
sec2_p.innerHTML = "“Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving.”";
document.getElementById("section2").appendChild(sec2_p);



//Container main section3 
var sec3_img_array = ["https://www.thrillophilia.com/blog/wp-content/uploads/2017/05/how-to-reach-ladakh-1.jpg","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q1HOcGvvkVGWNBNWBtzvvgHaFi%26pid%3DApi&f=1"];
var sec3_h2_array = ["Ladakh","Kerala"];
var sec3_p_array = ["The stunning valleys, the magnificent mountains and the breathtaking views of the landscape call every traveler to explore.  Whether you are on a bike trip with your friends or just spending a vacation in the bosom of the mountains, you will come across the singing mountain passes here.",
"God’s Own Country, Kerala has some extremely beautiful tourist destinations to hold the attention of global tourists. There are hill-stations, backwaters, commercial cities, hamlets, and much more to explore. Rich culture and heritage coupled with some of the best places to visit in Kerala attract crowds from all over the world."]
var sec3_ul = document.createElement("ul");
for(i=0; i<2; i++){
  var sec3_li = document.createElement("li");
  var sec3_article = document.createElement("article");
  var sec3_figure = document.createElement("figure");
  var sec3_figure_img = document.createElement("img");
  var sec3_figcaption = document.createElement("figcaption");
  var sec3_h2 = document.createElement("h2");
  var sec3_p = document.createElement("p");
  var sec3_div = document.createElement("div");
  var sec3_div_a = document.createElement("a");
  
  sec3_figure_img.setAttribute("src", sec3_img_array[i]);
  sec3_div.setAttribute("class","readmore");

  sec3_h2.innerHTML = sec3_h2_array[i];
  sec3_p.innerHTML = sec3_p_array[i];
  sec3_div_a.innerHTML = "Read More »"

  sec3_div.appendChild(sec3_div_a);
  sec3_figcaption.append(sec3_h2, sec3_p, sec3_div);
  sec3_figure.append(sec3_figure_img , sec3_figcaption);
  sec3_article.append(sec3_figure);
  sec3_li.append(sec3_article);
  sec3_ul.append(sec3_li);
}
document.getElementById("section3").appendChild(sec3_ul);

//Container aside
var aside_h2 = document.createElement("h2");
aside_h2.innerHTML = "CATEGORIES";
document.querySelector("aside").insertBefore(aside_h2,document.querySelectorAll("nav")[1]);
var aside_ul = document.createElement("ul");
var aside_array = [" Adventure Travel","Backpack Travel","Budget Travel","Business Travel","Couple Travel","Cruise Travel","Event Travel","Flashpacking Travel"," Food Travel","Group Travel"];  
for(i=0; i<10; i++)
{
    var aside_li = document.createElement("li");
    var aside_a = document.createElement("a");
    aside_a.innerHTML = aside_array[i];
    aside_li.appendChild(aside_a);
    aside_ul.appendChild(aside_li);
}
document.querySelectorAll("nav")[1].append(aside_ul);



//Footer
var footer_p1 = document.createElement("p");
var footer_p2 = document.createElement("p");

footer_p1.innerHTML = "Copyright © 2021 - All Rights Reserved - Food Blog";
footer_p2.innerHTML = "Template cloned from OS-Templates by Ervin";

document.getElementById("footer").append(footer_p1, footer_p2);