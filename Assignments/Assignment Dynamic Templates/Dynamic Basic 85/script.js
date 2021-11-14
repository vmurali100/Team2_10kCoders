// title h1
var title_a = document.createElement("a");
title_a.innerHTML = "Indian Premier League";
var title_h1 = document.createElement("h1");
title_h1.appendChild(title_a);
document.getElementById("title").appendChild(title_h1);

// title h2
var title_h2 = document.createElement("h2");
title_h2.innerHTML = "Twenty20 cricket league";
document.getElementById("title").appendChild(title_h2);


// //header nav
var nav_ul = document.createElement("ul"); 
var list_items = ["Home","About","Images","Team","Contact Us"];
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


//Container section1 paragraph
var sec1_p = document.createElement("p");
sec1_p.innerHTML = "The Indian Premier League (IPL) is a professional Twenty20 cricket league, contested by eight teams based out of eight Indian cities. founded by the Board of Control for Cricket in India (BCCI) in 2007. It is usually held between March and May of every year.";
document.getElementById("section1").appendChild(sec1_p);


//Container section2 images
var sec2_article = document.createElement("article");
var sec2_figure = document.createElement("figure");
var sec2_ul = document.createElement("ul");
for(i=0; i<4; i++){
    var sec2_li = document.createElement("li");
    var sec2_img = document.createElement("img");

    sec2_img.setAttribute("src","./images/demo/215x150"+"("+(i+1)+")");

    sec2_li.appendChild(sec2_img);

    sec2_ul.appendChild(sec2_li);
}
sec2_figure.appendChild(sec2_ul);
sec2_article.appendChild(sec2_figure);
document.getElementById("section2").appendChild(sec2_article);


// //Container Homepage section3 h1
// var sec3_h1 = document.createElement("h1");
// sec3_h1.innerHTML="Forms of Cricket";
// document.querySelector(".homepage").insertBefore(sec3_h1, document.querySelector(".section3"));

// //Container Homepage section3 article 
// var sec3_images_alt_array = ["Test_Cricket","One_Day_International","Twenty20"]

// var sec3_para_array = ["Test cricket is the form of the sport of cricket with the longest match duration and is considered the game's highest standard.",
// "A ODI is a form of limited overs cricket with a fixed number of overs, currently 50, with the game lasting up to 9 hours.",
// "T20 is a shortened game format of cricket with restricted to a maximum of 20 overs."
// ]
// for(i=0; i<(sec3_para_array).length; i++)
// {   
//     var sec3_image = document.createElement("img");
//     var sec3_figure = document.createElement("figure");
//     var sec3_strong = document.createElement("strong");
//     var sec3_para = document.createElement("p");
//     var sec3_readmore_a = document.createElement("a");
//     var sec3_readmore_div = document.createElement("div");
//     var sec3_article = document.createElement("article");

//     sec3_strong.innerHTML = sec3_images_alt_array[i];
//     sec3_para.innerHTML = sec3_para_array[i];
//     sec3_readmore_a.innerHTML = "Readmore »";

//     sec3_image.setAttribute("src","./images/demo/32x32"+("("+(i+1)+")"));
//     sec3_image.setAttribute("alt",sec3_images_alt_array[i]);
//     sec3_readmore_a.setAttribute("href","https://en.wikipedia.org/wiki/"+sec3_images_alt_array[i]);
//     sec3_readmore_div.setAttribute("class","readmore");

//     sec3_figure.appendChild(sec3_image);
//     sec3_readmore_div.appendChild(sec3_readmore_a);
//     sec3_article.append(sec3_figure, sec3_strong, sec3_para, sec3_readmore_div);

//     document.getElementsByClassName("section3")[0].appendChild(sec3_article);
// }

// // Container Homepage section4 h1
// var sec4_h1 = document.createElement("h1");
// sec4_h1.innerHTML="Latest from the gallery";
// document.querySelector(".homepage").insertBefore(sec4_h1, document.querySelector(".section4"));

// //Container Homepage section4 aticle
// var sec4_figcap_array = ["smriti mandana", "Mitali Raj", "MS Dhoni", "Virat Kohli"]
// for(i=0; i<4; i++)
// {
//     var sec4_article = document.createElement("article");
//     var sec4_figure = document.createElement("figure");
//     var sec4_image = document.createElement("img");
//     var sec4_figcap = document.createElement("figcaption");

//     sec4_image.setAttribute("src","images/demo/215x315"+"("+(i+1)+")");
//     sec4_figcap.innerHTML = sec4_figcap_array[i];

//     sec4_figure.append(sec4_image, sec4_figcap);

//     sec4_article.appendChild(sec4_figure);

//     document.querySelector(".section4").appendChild(sec4_article);
// }





// //Footer
// var footer_p1 = document.createElement("p");
// var footer_p2 = document.createElement("p");

// footer_p1.innerHTML = "Copyright © 2021 - All Rights Reserved - ScoreBuddy";
// footer_p2.innerHTML = "Template cloned from OS-Templates by Ervin";

// document.getElementById("footer").append(footer_p1, footer_p2);