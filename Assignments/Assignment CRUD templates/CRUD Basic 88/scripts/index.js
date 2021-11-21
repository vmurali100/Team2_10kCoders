
//Container section1
var sec1_img = document.createElement("img");
sec1_img.setAttribute("src","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cxJzcWOOfE7Sc7I_kVYuGAHaEK%26pid%3DApi&f=1");
document.getElementById("section1").append(sec1_img);


//Container section2 
var sec2_image_array = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OwU35_CroIEDtXHDCW5lpgHaEc%26pid%3DApi&f=1",
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qujzB7-q73ox4MVkDZ8tfwHaEK%26pid%3DApi&f=1",
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ycHRtIuBlM8TJGWhGIyZaAHaGX%26pid%3DApi&f=1"]

var sec2_h2_array = ["Power Rangers", "kickbutowski", "Phineas & Ferb"];
var sec2_p_array = ["Power Rangers is an American entertainment and merchandising franchise built around a live-action superhero television series",
"Clarence Francis 'Kick Buttowski' is a 10-year-old boy and the titular main protagonist of the show. He aspires to be the world's greatest daredevil (his biggest obsession).",
" Phineas Flynn and his stepbrother Ferb Fletcher, who are between eight and ten years old, on summer vacation. Every day, the boys embark on some grand new project."]

for(i=0; i<3; i++){
  var sec2_article = document.createElement("article");
  var sec2_figure = document.createElement("figure");
  var sec2_figure_img = document.createElement("img");
  var sec2_figcaption = document.createElement("figcaption");
  var sec2_h2 = document.createElement("h2");
  var sec2_p = document.createElement("p");
  var sec2_div = document.createElement("div");
  var sec2_div_a = document.createElement("a");

  sec2_h2.innerHTML = sec2_h2_array[i];
  sec2_p.innerHTML = sec2_p_array[i];
  sec2_div_a.innerHTML = "Read More »"

  sec2_div.setAttribute("class","readmore");
  
  sec2_div.appendChild(sec2_div_a);

  sec2_figure_img.setAttribute("src", sec2_image_array[i]);
  sec2_figure.append(sec2_figure_img);
  sec2_figcaption.append(sec2_h2, sec2_p, sec2_div);
  sec2_article.append(sec2_figure, sec2_figcaption);
  document.getElementById("section2").appendChild(sec2_article);

}

// Container section3 
var sec3_figure = document.createElement("figure");
var sec3_figcaption = document.createElement("figcaption");
var sec3_img = document.createElement("img");
var sec3_figcap_strong = document.createElement("strong");
var sec3_figcap_p1 = document.createElement("p");
var sec3_figcap_p2 = document.createElement("p");
var sec3_figcap_div = document.createElement("div");
var sec3_figcap_div_a = document.createElement("a");

sec3_img.setAttribute("src","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whatutalkingboutwillis.com%2Fwp-content%2Fuploads%2F2014%2F07%2FdisneyXD.jpg&f=1&nofb=1");
sec3_figure.append(sec3_img);

sec3_figcap_strong.innerHTML = "DISNEY XD";
sec3_figcap_p1.innerHTML = "Disney XD is an American pay television channel owned by the Disney Branded Television and Disney Media and Entertainment Distribution units of The Walt Disney Company.";
sec3_figcap_p2.innerHTML = "Disney XD's programming consists of original first-run television series, current and former original series and made-for-TV films inherited from sister network Disney Channel";
sec3_figcap_div_a.innerHTML = "Read More >>";

sec3_figcap_div.setAttribute("class","readmore");
sec3_figcap_div.appendChild(sec3_figcap_div_a);
sec3_figcaption.append(sec3_figcap_strong, sec3_figcap_p1, sec3_figcap_p2, sec3_figcap_div);

document.getElementById("section3").append(sec3_figure, sec3_figcaption);



//Footer1
var h2_array  = ["Adventure","Comic","Action","Others"]
var li_array = [["Dragon Booster","Power Rangers","American Dragon: Jake Long","Martin Mystery","Spider-Man and His Amazing Friends"],
["Dennis the Menace","George of the Jungle","Inspector Gadget","The Owl","Rat-Man"],
["Dragon Booster","Power Rangers","The Incredible Hulk","Spider-Man","X-Men"],
["Goosebumps","Hero - Bhakti Hi Shakti Hai","Gargoyles","Detective Conan","Aryamaan"]]
for(i=0;i<4;i++)
{
    var footer1_sec = document.createElement("section");
    var footer1_sec_h2 = document.createElement("h2");
    var footer1_sec_nav = document.createElement("nav");
    var footer1_sec_nav_ul = document.createElement("ul")
    footer1_sec_h2.innerHTML = h2_array[i];
    for(j=0;j<5;j++)
    {
        var li = document.createElement("li");
        var a = document.createElement("a");

        a.innerHTML = li_array[i][j];
        li.append(a);
        footer1_sec_nav_ul.append(li);
    }
    footer1_sec_nav.appendChild(footer1_sec_nav_ul);
    footer1_sec.append(footer1_sec_h2, footer1_sec_nav)
    document.getElementById("details").append(footer1_sec);
}


