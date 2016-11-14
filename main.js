// make sure js is connected
console.log("JS WORKS");

//set var for num of clicks pl1/pl2
p1Clicks = 0;
p2Clicks = 0;

// sets a margin counter
mar1=0;
mar2=0;

//set event listeners
//set function to move plr positions, and add to #clicks
document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        console.log('p1 moves');
        var p1 = document.getElementById('player1');
        p1.style.left = mar1 + "px";
        p1Clicks += 1;
        mar1 += 27;
    } else if (event.keyCode == 38) {
    	console.log('p2 moves');
    	var p2 = document.getElementById('player2');
    	p2.style.left = mar2 + "px";
    	p2Clicks += 1;
    	mar2 += 27;
    	console.log(mar2);
    }
    isWin();
});



//function to determine win @threshold (determine #clicks needed )
var isWin = function () {
	if (p1Clicks == 25) {
		alert("Player 1 Wins!");
	} else if (p2Clicks == 25) {
		alert("player 2 Wins!");
	}
};

//reloads page to reset game
var reset = function(){
	location.reload();
};