
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


