

//Container section1 
var sec1_img = document.createElement("img");
var sec1_figure = document.createElement("figure");
var sec1_figcaption = document.createElement("figcaption");
var sec1_figcaption_strong = document.createElement("strong");
var sec1_figcaption_p = document.createElement("p");
var sec1_figcaption_blockquote = document.createElement("blockquote");
var sec1_figcaption_div = document.createElement("div");
var sec1_figcaption_div_a = document.createElement("a");

sec1_figcaption_strong.innerHTML = "Bistro";
sec1_figcaption_p.innerHTML = "Black Goose Bistro is a gorgeous Mediterranean getaway with a big hearted, bountiful Bistro kitchen at its heart";
sec1_figcaption_blockquote.innerHTML = "“A white walled bungalow, tranquil in the sunshine with serene views of a secret lake.”";
sec1_figcaption_div_a.innerHTML = "Read More »"

sec1_img.setAttribute("src","./images/main_logo1.jfif");
sec1_figcaption_div.setAttribute("class","readmore");

sec1_figure.appendChild(sec1_img);
sec1_figcaption_div.appendChild(sec1_figcaption_div_a);
sec1_figcaption.append(sec1_figcaption_strong, sec1_figcaption_p, sec1_figcaption_blockquote, sec1_figcaption_div)

document.getElementById("section1").append(sec1_figure, sec1_figcaption);


//Container section2 
var chefs_h2_array = ["Chef Viraf Patel","Chef Vineet Bhatia","Chef Vikas Khanna"];
var chefs_p_array = ["Viraf Patel, known for his culinary adventures laced with much eccentricity, conviction and belief in truly honest cooking, is one of India’s most celebrated young chefs.",
"He professes to be the first Indian chef restaurateur to receive the honour since the guide started. Cuisines made by the celebrated chef can be categorized as Awadhi and he was awarded for the London-located restaurant Zaika in 2001.",
"The New-York based celebrity chef is known for the who’s who of the world. He is awarded for the Junoon restaurant for three consecutive years since 2012."]
for(i=0; i<3; i++){
  var sec2_article = document.createElement("article");
  var sec2_h2 = document.createElement("h2");
  var sec2_figure = document.createElement("figure");
  var sec2_figure_img = document.createElement("img");
  var sec2_p = document.createElement("p");
  var sec2_div = document.createElement("div");
  var sec2_div_a = document.createElement("a");
  
  sec2_figure_img.setAttribute("src","./images/demo/80x80"+"("+(i+1)+")");
  sec2_div.setAttribute("class","readmore");

  sec2_h2.innerHTML = chefs_h2_array[i];
  sec2_p.innerHTML = chefs_p_array[i];
  sec2_div_a.innerHTML = "Read More »"

  sec2_figure.append(sec2_figure_img);
  sec2_div.appendChild(sec2_div_a);
  sec2_article.append(sec2_h2, sec2_figure, sec2_p, sec2_div);
  document.getElementById("section2").appendChild(sec2_article);

}

//Container Homepage section3 
var food_h2_array = ["Lohikeitto (Salmon Soup)","Burgers","Burritos","Beer"];
var food_p_array = ["Lohikeitto is a soup made with salmon, onions, carrots, potatoes, and cream or full-fat milk.",
"A sandwich consisting of one or more cooked patties, placed inside a sliced bread roll or bun.",
"Burritos consist of two thin flour tortillas filled with meat, vegetables, and beans.",
"It is produced by the brewing and fermentation of starches, derived from cereal grain"]
for(i=0; i<4; i++){
  var sec3_article = document.createElement("article");
  var sec3_figure = document.createElement("figure");
  var sec3_figure_img = document.createElement("img");
  var sec3_figcaption = document.createElement("figcaption");
  var sec3_h2 = document.createElement("h2");
  var sec3_p = document.createElement("p");
  var sec3_div = document.createElement("div");
  var sec3_div_a = document.createElement("a");
  
  sec3_figure_img.setAttribute("src","./images/demo/215x100"+"("+(i+1)+")");
  sec3_div.setAttribute("class","readmore");

  sec3_h2.innerHTML = food_h2_array[i];
  sec3_p.innerHTML = food_p_array[i];
  sec3_div_a.innerHTML = "Read More »"

  sec3_figure.append(sec3_figure_img);
  sec3_div.appendChild(sec3_div_a);
  sec3_figcaption.append(sec3_h2, sec3_p, sec3_div);
  sec3_article.append(sec3_figure, sec3_figcaption);
  document.getElementById("section3").appendChild(sec3_article);
}
