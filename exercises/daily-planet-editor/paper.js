/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function who_wins(is_there_kryptonite, enemyName)  // fixed casing for enemyName
{
    /* fixed spacing between lines*/
    if (is_there_kryptonite)
    {
        return "Superman beats " + enemyName + ", of course"; //fixed spacing for "+enemyName+""
    }
    else 
    {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
    }
}

for (var i = 0; i < Enemies.length; i++)
{
    var is_there_kryptonite; //removed colon and added semi colon
    if (i%2=== 0) 
    {
        is_there_kryptonite = true;
    } 
    else 
    {
        is_there_kryptonite = false;
    }
    console.log(who_wins(is_there_kryptonite,Enemies[i]));
}       //fixed casing of Who_Wins

function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor ( ( Math.random() * 10 ) + 1 );   //Fixed spelling of Mat to Math and added spacing
}

console.log( HowAttractedIsLoisLaneToMe () ) ; //fixed spelling of console

var clarkKent = true;
var superman = false; //added = to false

while (clarkKent) 
{
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) 
    {
        clarkKent = false;
        superman = true;    //added spacing
        console.log("Now I'm Superman!");
    }  
} //fixed location of curly braces
