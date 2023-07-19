var randomnumber1 = Math.floor(Math.random() *6) +1;

var randomDice = "dice" + randomnumber1 + ".png";

var randomImagesource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);


var randomnumber2 = Math.floor(Math.random() *6) +1;

var randomDice2 = "dice" + randomnumber2 + ".png";

var randomImagesource2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML ="🏆PLAYER 1 WIN";
}else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML ="PLAYER 2 WIN🏆";
}else{
    document.querySelector("h1").innerHTML ="🏆DRAW🏆";
}

