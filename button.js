// ***  global variables  ***
var iPlayerNumber = 1;

// ***  functions  *** 
function fnAdd(){
    var sName = window.prompt("Name for player #" + iPlayerNumber + ":","*- ");
    if (sName != null) {
        // create a form
            var f = document.createElement("form");
        //create label for score
            var lScore = document.createElement("label");
            lScore.id = "lblScore" + iPlayerNumber;
            lScore.innerHTML = "0";
            lScore.onclick = function(){fnScore(this.id)};
        // create label for name
            var lName = document.createElement("label");
            lName.id = "lblName" + iPlayerNumber;
            lName.style.paddingBottom = "5px";
            lName.style.paddingRight = "20px";
            lName.style.fontWeight = "bold";
            lName.innerHTML = sName;
            lName.onclick = function(){fnScore(this.id)};
        // add all elements to the form
        f.appendChild(lName);
        f.appendChild(lScore);
        // add the form inside the body
        document.getElementsByTagName('div')[3].appendChild(f);
        // track player count
        iPlayerNumber += 1;
    }
}
function fnClick(buttonID) {
    document.getElementById("txtBox").value += buttonID;
}
function fnClearInput() {
    document.getElementById("txtBox").value = "";
}
function fnNegative() {
    // make the number negative
    var PosNumber = (document.getElementById("txtBox").value) * 1;
    var NegNumber = -PosNumber;
    document.getElementById("txtBox").value = NegNumber;
}
function fnRandom(min, max) {
    // returns random number between "min" and "max"
    var iResult = Math.floor(Math.random() * max) + min;
    return iResult;
}  
function fnRoll() {
    var DieOne = fnRandom(1,6);
    var DieTwo = fnRandom(1,6);
    document.getElementById("DieImg1").src = ".\\images\\Die" + DieOne + ".png";
    document.getElementById("DieImg2").src = ".\\images\\Die" + DieTwo + ".png";
}
function fnScore(playerID) {
    var RowPlayer = playerID.slice(-1);
    var newScore = (document.getElementById("txtBox").value) * 1;
    var currentScore = (document.getElementById("lblScore" + RowPlayer).innerHTML) * 1;
    //console.dir({RowPlayer, newScore, currentScore});
    var newTotal = currentScore + newScore;
    //window.alert("newTotal = " + newTotal);
    document.getElementById("lblScore" + RowPlayer).innerHTML = newTotal;
    document.getElementById("txtBox").value = "";
    fnHighlight();
}
function fnHighlight() {
    var PlayerRank = [];
    var HighScore = 0;

    for (i = 1; i < iPlayerNumber; i++) {
        PlayerRank.push(document.getElementById("lblScore" + i).innerHTML);
        //console.dir(PlayerRank);
    }
    PlayerRank.sort(function(a, b){return b - a});
    //console.log(PlayerRank);
    HighScore = PlayerRank[0];
    LowScore = PlayerRank[PlayerRank.length -1];
    // need to find the player assoc with the high score then highlight green.
    for (let i = 1; i < iPlayerNumber; i++) {
        if (document.getElementById("lblScore" + i).innerHTML == HighScore) {
            document.getElementById("lblName" + i).style.color = "green";
        } else {
            if (document.getElementById("lblScore" + i).innerHTML == LowScore) {
                document.getElementById("lblName" + i).style.color = "red";
            } else {
                document.getElementById("lblName" + i).style.color = "white";
            }
        }
    }
}
