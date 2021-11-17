

//Container section1 paragraph
var sec1_p = document.createElement("p");
sec1_p.innerHTML = "The Indian Premier League (IPL) is a professional Twenty20 cricket league, contested by eight teams based out of eight Indian cities. founded by the Board of Control for Cricket in India (BCCI) in 2007. It is usually held between March and May of every year.";
document.getElementById("section1").appendChild(sec1_p);


//Container section2 images
var sec2_article = document.createElement("article");
var sec2_figure = document.createElement("figure");
var sec2_figcaption = document.createElement("figcaption");
var sec2_a =document.createElement("a");
var sec2_p = document.createElement("p");
var sec2_ul = document.createElement("ul");
for(i=0; i<4; i++){
    var sec2_li = document.createElement("li");
    var sec2_img = document.createElement("img");

    sec2_img.setAttribute("src","./images/demo/215x150"+"("+(i+1)+")");

    sec2_li.appendChild(sec2_img);

    sec2_ul.appendChild(sec2_li);
}
sec2_a.innerHTML = "View all our recent works for ipl here »";
sec2_a.setAttribute("href","https://www.iplt20.com/");
sec2_a.setAttribute("target","_blank");

sec2_figure.appendChild(sec2_ul);
sec2_p.appendChild(sec2_a);
sec2_figcaption.appendChild(sec2_p);
sec2_article.append(sec2_figure, sec2_figcaption);
document.getElementById("section2").appendChild(sec2_article);


//Container Homepage section3 article 
var sec3_strong_array =["CSK","MI","RCB","SRH","DC","PBKS","RR","KKR"]
var sec3_images_alt_array = ["Chennai_Super_Kings","Mumbai_Indians","Royal_Challengers_Bangalore","Sunrisers_Hyderabad","Delhi_Capitals","Punjab_Kings","Rajasthan_Royals","Kolkata_Knight_Riders"]

var sec3_para_array = ["The Chennai Super Kings (CSK) is a franchise cricket team based in Chennai, Tamil Nadu. Founded in 2008",
"The Mumbai Indians (MI) are a franchise cricket team based in Mumbai, Maharashtra. Founded in 2008.",
"The Royal Challengers Bangalore (RCB) are a franchise cricket team based in Bangalore, Karnataka. It was founded in 2008.",
"The Sunrisers Hyderabad (SRH) are a franchise cricket team based in Hyderabad, Telangana, India. Founded in 2012.",
"The Delhi Capitals (DC) are a franchise cricket team based out of Delhi in the Indian Premier League (IPL). Founded in 2008 .",
"The Punjab Kings (PBKS) are a franchise cricket team based in Mohali, Punjab India. Established in 2008.",
"The Rajasthan Royals (RR) are a franchise cricket team based in Jaipur, Rajasthan. Founded in 2008.",
"The Kolkata Knight Riders (KKR) are a franchise cricket team representing the city of Kolkata in the Indian Premier League."
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

    sec3_strong.innerHTML = sec3_strong_array[i];
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

