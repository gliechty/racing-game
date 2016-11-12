// make sure js is connected
console.log("JS WORKS");

//set variables for pl1 and pl2

var p1 = document.getElementById('player1');
var p2 = document.getElementById('player2');

//set event listeners

//set var for num of clicks pl1/pl2
p1Clicks = 0;
p2Clicks = 0;

//set function to move plr positions, and add to #clicks
document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        console.log('p1 moves');
        var p1 = document.getElementById('player1');
        p1.style.left += "200px";
        p1Clicks += 1;
    } else if (event.keyCode == 38) {
    	console.log('p2 moves');
    	var p2 = document.getElementById('player2');
    	p2.style.left += "200px";
    	p2Clicks += 1;
    }
    isWin();
});



//function to determine win @threshold (determine #clicks needed )
var isWin = function () {
};

//reloads page to reset game
var reset = function(){
	location.reload();
};