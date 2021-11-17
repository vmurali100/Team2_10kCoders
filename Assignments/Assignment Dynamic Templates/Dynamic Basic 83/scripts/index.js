// title h1
var title_a = document.createElement("a");
title_a.innerHTML = "Dead Pool";
var title_h1 = document.createElement("h1");
title_h1.appendChild(title_a);
document.getElementById("title").appendChild(title_h1);

// title h2
var title_h2 = document.createElement("h2");
title_h2.innerHTML = "Maximum effort";
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

//header nav
var nav_ul = document.createElement("ul"); 
var list_items = ["Home","Cast","Movie","About","Contact Us"];
var list_link = ["#home","#cast","#movieplot","#about","#footer"]

for(var i=0; i<list_items.length; i++)
{
    var nav_a =document.createElement("a"); 
    nav_a.innerHTML = list_items[i];
    nav_a.setAttribute("href",list_link[i]);
    var nav_li = document.createElement("li"); 
    nav_li.appendChild(nav_a);
    nav_ul.appendChild(nav_li);
}
document.getElementById("nav").appendChild(nav_ul);

//Container section1 image
var sec1_figure = document.createElement("figure");
var sec1_img = document.createElement("img");
sec1_img.setAttribute("src","./images/demo/deadpool cover image.png");
sec1_figure.appendChild(sec1_img);
document.getElementsByClassName("section1")[0].appendChild(sec1_figure);

//Container Homepage section2 article 
var sec2_images_alt_array = ["Ryan_Ronalds","Morena_Baccarin","Ed_Skrein","Karan_Soni"]

var sec2_para_array = ["Ryan Rodney Reynolds (born October 23, 1976) is a Canadian actor and film producer.",
"Morena Silva de Vaz Setta Baccarin ( born June 2, 1979) is a Brazilian actress.",
"Edward George Skrein (born 29 March 1983) is an English actor, film director, screenwriter and rapper.",
"Karan Soni (born January 8, 1989) is an Indian-American actor. Often appearing in comedic roles."
]
for(i=0; i<4; i++)
{   
    var sec2_image = document.createElement("img");
    var sec2_figure = document.createElement("figure");
    var sec2_strong = document.createElement("strong");
    var sec2_para = document.createElement("p");
    var sec2_readmore_a = document.createElement("a");
    var sec2_readmore_div = document.createElement("div");
    var sec2_article = document.createElement("article");

    sec2_strong.innerHTML = sec2_images_alt_array[i];
    sec2_para.innerHTML = sec2_para_array[i];
    sec2_readmore_a.innerHTML = "Readmore »";

    sec2_image.setAttribute("src","./images/demo/32x32image"+(i+1));
    sec2_image.setAttribute("alt",sec2_images_alt_array[i]);
    sec2_readmore_a.setAttribute("href","https://en.wikipedia.org/wiki/"+sec2_images_alt_array[i]);
    sec2_readmore_div.setAttribute("class","readmore");

    sec2_figure.appendChild(sec2_image);
    sec2_readmore_div.appendChild(sec2_readmore_a);
    sec2_article.append(sec2_figure, sec2_strong, sec2_para, sec2_readmore_div);

    document.getElementsByClassName("section2")[0].appendChild(sec2_article);
}


//Container Homepage Section3 Article
var sec3_h2 = document.createElement("h2");
var sec3_para1 = document.createElement("p");
var sec3_para2 = document.createElement("p");
var sec3_readmore_a = document.createElement("a");
var sec3_readmore_div = document.createElement("div");
var sec3_article = document.createElement("article");

sec3_h2.innerHTML = "Movie Plot";
sec3_para1.innerHTML = "This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool.";
sec3_para2.innerHTML = "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life."
sec3_readmore_a.innerHTML = "Read More »";

sec3_readmore_a.setAttribute("href","href='https://www.imdb.com/title/tt1431045/plotsummary'");
sec3_readmore_div.setAttribute("class","readmore");

sec3_readmore_div.appendChild(sec3_readmore_a);
sec3_article.append(sec3_h2, sec3_para1, sec3_para2, sec3_readmore_div)

document.getElementsByClassName("section3")[0].append(sec3_article);



//Container Homepage Section3 Aside
var sec3_aside = document.createElement("aside");
var sec3_aside_h2 = document.createElement("h2");
var sec3_aside_para1 = document.createElement("p");
var sec3_aside_para2 = document.createElement("p");
var sec3_aside_readmore_div = document.createElement("div");
var sec3_aside_readmore_a = document.createElement("a");

sec3_aside_h2.innerHTML = "About";
sec3_aside_para1.innerHTML = "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name.";
sec3_aside_para2.innerHTML = "Directed by Tim Miller it stars Ryan Reynolds, Morena Baccarin.";
sec3_aside_readmore_a.innerHTML = "Read More";

sec3_aside_readmore_a.setAttribute("href","https://en.wikipedia.org/wiki/Deadpool_(film)");
sec3_aside_readmore_a.setAttribute("target","_blank");

sec3_aside_readmore_div.appendChild(sec3_aside_readmore_a);
sec3_aside.append(sec3_aside_h2, sec3_aside_para1, sec3_aside_para2, sec3_aside_readmore_div);

document.getElementsByClassName("section3")[0].appendChild(sec3_aside);



//Footer
var footer_p1 = document.createElement("p");
var footer_p2 = document.createElement("p");

footer_p1.innerHTML = "Copyright © 2021 - All Rights Reserved - CinemaBandi.";
footer_p2.innerHTML = "Template cloned from OS-Templates by Ervin";

document.getElementById("footer").append(footer_p1, footer_p2);