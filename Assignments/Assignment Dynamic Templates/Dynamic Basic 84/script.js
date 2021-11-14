// title h1
var title_a = document.createElement("a");
title_a.innerHTML = "Indian Cricket";
var title_h1 = document.createElement("h1");
title_h1.appendChild(title_a);
document.getElementById("title").appendChild(title_h1);

// title h2
var title_h2 = document.createElement("h2");
title_h2.innerHTML = "Bleed Blue";
document.getElementById("title").appendChild(title_h2);

// Form searchbox and button
var fieldset = document.createElement("fieldset");
var textbox = document.createElement("input");
var submit = document.createElement("input");

textbox.setAttribute("type","text");
textbox.setAttribute("id","searchbox");
textbox.setAttribute("placeholder","Search Our Website...");
submit.setAttribute("type","submit");
submit.setAttribute("id","submit");
submit.setAttribute("value","SUBMIT");

fieldset.appendChild(textbox);
fieldset.appendChild(submit);

document.getElementsByTagName("form")[0].appendChild(fieldset);

// //header nav
var nav_ul = document.createElement("ul"); 
var list_items = ["Home","Cover Image","Description","Forms","Latest from Gallery"];
var list_link = ["#title","#section1","#section2","#section3","#section4"];

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

//Container section1 image
var sec1_figure = document.createElement("figure");
var sec1_img = document.createElement("img");
sec1_img.setAttribute("src","./images/demo/960x360");
sec1_img.setAttribute("alt","Indian cricket team");
sec1_figure.appendChild(sec1_img);
document.getElementsByClassName("section1")[0].appendChild(sec1_figure);

//Container section2 paragraph
var sec2_p = document.createElement("p");
sec2_p.innerHTML = "The India men's national cricket team, also known as Team India and Men in Blue. The India women's national cricket team, nicknamed the Women in Blue, represents the country of India in international cricket.";
document.getElementById("section2").appendChild(sec2_p);


//Container Homepage h2
var sec3_h1 = document.createElement("h1");
sec3_h1.innerHTML="Forms of Cricket";
document.querySelector(".homepage").insertBefore(sec3_h1, document.querySelector(".section3"));

//Container Homepage section3 article 
var sec3_images_alt_array = ["Test_Cricket","One_Day_International","Twenty20"]

var sec3_para_array = ["Test cricket is the form of the sport of cricket with the longest match duration and is considered the game's highest standard.",
"A ODI is a form of limited overs cricket with a fixed number of overs, currently 50, with the game lasting up to 9 hours.",
"T20 is a shortened game format of cricket with restricted to a maximum of 20 overs."
]
for(i=0; i<(sec3_para_array).length; i++)
{   
    var sec3_image = document.createElement("img");
    var sec3_figure = document.createElement("figure");
    var sec3_strong = document.createElement("strong");
    var sec3_para = document.createElement("p");
    var sec3_readmore_a = document.createElement("a");
    var sec3_readmore_div = document.createElement("div");
    var sec3_article = document.createElement("article");

    sec3_strong.innerHTML = sec3_images_alt_array[i];
    sec3_para.innerHTML = sec3_para_array[i];
    sec3_readmore_a.innerHTML = "Readmore »";

    sec3_image.setAttribute("src","./images/demo/32x32"+("("+(i+1)+")"));
    sec3_image.setAttribute("alt",sec3_images_alt_array[i]);
    sec3_readmore_a.setAttribute("href","https://en.wikipedia.org/wiki/"+sec3_images_alt_array[i]);
    sec3_readmore_div.setAttribute("class","readmore");

    sec3_figure.appendChild(sec3_image);
    sec3_readmore_div.appendChild(sec3_readmore_a);
    sec3_article.append(sec3_figure, sec3_strong, sec3_para, sec3_readmore_div);

    document.getElementsByClassName("section3")[0].appendChild(sec3_article);
}

var sec4_h1 = document.createElement("h1");
sec4_h1.innerHTML="Latest from the gallery";
document.querySelector(".homepage").insertBefore(sec4_h1, document.querySelector(".section4"));





//Footer
var footer_p1 = document.createElement("p");
var footer_p2 = document.createElement("p");

footer_p1.innerHTML = "Copyright © 2021 - All Rights Reserved - ScoreBuddy";
footer_p2.innerHTML = "Template cloned from OS-Templates by Ervin";

document.getElementById("footer").append(footer_p1, footer_p2);