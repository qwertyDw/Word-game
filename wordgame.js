alert("You have woken up...");
alert("If you want to go back play a game...")
alert("Rule is simple. You have 5 bullets.")
alert("3 bullets can shoot. And other 2 won't.")
alert("And you just have to make a choice between you and me.")
alert("Which one to shoot.")
alert("If you shoot yourself and left unscatched then you get a chance to knife me. You have 2 chances to knife me.")
alert("Of course we won't kill each other directly. First bullet is for an arm. Second one is for other arm. And third one is for the HEAD..")
alert("Lets play for a 5 rounds.")
var chance=3;
var enemy=3;
var empty=2;
var bull=3;
var knife=2;
var first=prompt("Please make a choice..You or Me.")
if(first=="You"){
    alert("...")
    empty--;
}else if(first=="Me"){
    alert("Oh god..sharp eye...")
    empty--;
    knife--;
    enemy--
}else{
    alert("You missed a chance...")
}
var second=prompt("Please make a choice..You or Me.")
if(second=="You"){
    alert("Rahhhhhh.....")
    bull--;
    enemy--;
}else if(second=="Me"){
    alert("Pfhh.. Well unfortune.")
    bull--;
    chance--;
}else{
    alert("You missed a chance...")
}
var third=prompt("Please make a choice..You or Me.")
if(third=="You"){
    alert("Rahhhhhh.....")
    bull--
    enemy--
}else if(third=="Me"){
    alert("Pfhh.. Well unfortune.")
    bull--;
    chance--;
}else{
    alert("You missed a chance...")
}if(chance>0 && enemy>0){
    var fourth=prompt("Please make a choice..You or Me.")
    if(fourth=="You"){
        alert("...")
        empty--
    }else if(fourth=="Me"){
        alert("Oh god..sharp eye...")
        empty--;
        knife--;
        enemy--;
    }else{
        alert("You missed a chance...")
    }if(chance>0 && enemy>0){
        var fifth=prompt("Please make a choice..You or Me.")
        if(fifth=="You"){
            alert("Rahhhhhh.....")
            bull--;
            enemy--;
        }else if(fifth=="Me"){
            alert("Pfhh.. Well unfortune.")
            bull--;
            chance--;
        }else{
            alert("You missed a chance...")
        }
    }if(enemy==0){
        alert("You may go home now....")
    }if(chance==0){
        alert("Haa.. Another victim...")
        alert("YOU ARE DEAD")
    }if(chance>0 && enemy>0){
        alert("Mercy is granted for prepared. But you weren't one.")
        alert("YOU ARE DEAD")
    }
}if(enemy==0){
    alert("You may go home now....")
}if(chance==0){
    alert("Haa.. Another victim...")
    alert("YOU ARE DEAD")
}