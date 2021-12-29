
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


//Container Homepage section3 h1
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

// Container Homepage section4 h1
var sec4_h1 = document.createElement("h1");
sec4_h1.innerHTML="Latest from the gallery";
document.querySelector(".homepage").insertBefore(sec4_h1, document.querySelector(".section4"));

//Container Homepage section4 aticle
var sec4_figcap_array = ["smriti mandana", "Mitali Raj", "MS Dhoni", "Virat Kohli"]
for(i=0; i<4; i++)
{
    var sec4_article = document.createElement("article");
    var sec4_figure = document.createElement("figure");
    var sec4_image = document.createElement("img");
    var sec4_figcap = document.createElement("figcaption");

    sec4_image.setAttribute("src","images/demo/215x315"+"("+(i+1)+")");
    sec4_figcap.innerHTML = sec4_figcap_array[i];

    sec4_figure.append(sec4_image, sec4_figcap);

    sec4_article.appendChild(sec4_figure);

    document.querySelector(".section4").appendChild(sec4_article);
}