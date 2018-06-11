document.getElementById('lets-play_button').addEventListener('click' , function (event) {
  document.getElementById('major_block').style.display = 'flex'
})

document.getElementById('lets-play_button').addEventListener('click' , function (event) {
  document.getElementById('reset_block').style.display = 'flex'
})

var player = 1
function clickBlock(buttonId) {
  if (player == 1) {
    console.log(document.getElementById(buttonId))
    document.getElementById(buttonId).innerHTML = "X";
    document.getElementById(buttonId).disabled = "disabled";
    player -= 1;
    winner()
  } else {
    console.log(document.getElementById(buttonId))
    document.getElementById(buttonId).innerHTML = "O";
    document.getElementById(buttonId).disabled = "disabled";
    player += 1;
    winner();
  }
}

document.getElementById("button1").addEventListener('click' , function() {
  clickBlock('button1');
})
document.getElementById("button2").addEventListener('click' , function() {
  clickBlock('button2');
})
document.getElementById("button3").addEventListener('click' , function() {
  clickBlock('button3');
})
document.getElementById("button4").addEventListener('click' , function() {
  clickBlock('button4');
})
document.getElementById("button5").addEventListener('click' , function() {
  clickBlock('button5');
})
document.getElementById("button6").addEventListener('click' , function() {
  clickBlock('button6');
})
document.getElementById("button7").addEventListener('click' , function() {
  clickBlock('button7');
})
document.getElementById("button8").addEventListener('click' , function() {
  clickBlock('button8');
})
document.getElementById("button9").addEventListener('click' , function() {
  clickBlock('button9');
})
document.getElementById('the-reset-button').addEventListener('click', function () {
  reset();
})

function winner() {
   if (document.getElementById('button1').innerHTML == "X" &&
       document.getElementById('button2').innerHTML == "X" &&
       document.getElementById('button3').innerHTML == "X" ||

       document.getElementById('button4').innerHTML == "X" &&
       document.getElementById('button5').innerHTML == "X" &&
       document.getElementById('button6').innerHTML == "X" ||

       document.getElementById('button7').innerHTML == "X" &&
       document.getElementById('button8').innerHTML == "X" &&
       document.getElementById('button9').innerHTML == "X" ||

       document.getElementById('button1').innerHTML == "X" &&
       document.getElementById('button4').innerHTML == "X" &&
       document.getElementById('button7').innerHTML == "X" ||

       document.getElementById('button2').innerHTML == "X" &&
       document.getElementById('button5').innerHTML == "X" &&
       document.getElementById('button8').innerHTML == "X" ||

       document.getElementById('button3').innerHTML == "X" &&
       document.getElementById('button6').innerHTML == "X" &&
       document.getElementById('button9').innerHTML == "X" ||

       document.getElementById('button1').innerHTML == "X" &&
       document.getElementById('button5').innerHTML == "X" &&
       document.getElementById('button9').innerHTML == "X" ||

       document.getElementById('button3').innerHTML == "X" &&
       document.getElementById('button5').innerHTML == "X" &&
       document.getElementById('button7').innerHTML == "X") {
    alert("THE WINNER IS X!!!");
   } else if (
       document.getElementById('button1').innerHTML == "O" &&
       document.getElementById('button2').innerHTML == "O" &&
       document.getElementById('button3').innerHTML == "O" ||

       document.getElementById('button4').innerHTML == "O" &&
       document.getElementById('button5').innerHTML == "O" &&
       document.getElementById('button6').innerHTML == "O" ||

       document.getElementById('button7').innerHTML == "O" &&
       document.getElementById('button8').innerHTML == "O" &&
       document.getElementById('button9').innerHTML == "O" ||

       document.getElementById('button1').innerHTML == "O" &&
       document.getElementById('button4').innerHTML == "O" &&
       document.getElementById('button7').innerHTML == "O" ||

       document.getElementById('button2').innerHTML == "O" &&
       document.getElementById('button5').innerHTML == "O" &&
       document.getElementById('button8').innerHTML == "O" ||

       document.getElementById('button3').innerHTML == "O" &&
       document.getElementById('button6').innerHTML == "O" &&
       document.getElementById('button9').innerHTML == "O" ||

       document.getElementById('button1').innerHTML == "O" &&
       document.getElementById('button5').innerHTML == "O" &&
       document.getElementById('button9').innerHTML == "O" ||

       document.getElementById('button3').innerHTML == "O" &&
       document.getElementById('button5').innerHTML == "O" &&
       document.getElementById('button7').innerHTML == "O") {
    alert("THE WINNER IS O!!!");
   } else if (
       document.getElementById('button1').innerHTML != " " &&
       document.getElementById('button2').innerHTML != " " &&
       document.getElementById('button3').innerHTML != " " &&
       document.getElementById('button4').innerHTML != " " &&
       document.getElementById('button5').innerHTML != " " &&
       document.getElementById('button6').innerHTML != " " &&
       document.getElementById('button7').innerHTML != " " &&
       document.getElementById('button8').innerHTML != " " &&
       document.getElementById('button9').innerHTML != " ") {
    alert("IT'S A DRAW");
  }
}

function reset() {
  document.getElementById('button1').innerHTML = " ";
  document.getElementById('button2').innerHTML = " ";
  document.getElementById('button3').innerHTML = " ";
  document.getElementById('button4').innerHTML = " ";
  document.getElementById('button5').innerHTML = " ";
  document.getElementById('button6').innerHTML = " ";
  document.getElementById('button7').innerHTML = " ";
  document.getElementById('button8').innerHTML = " ";
  document.getElementById('button9').innerHTML = " ";

  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
  document.getElementById('button5').disabled = false;
  document.getElementById('button6').disabled = false;
  document.getElementById('button7').disabled = false;
  document.getElementById('button8').disabled = false;
  document.getElementById('button9').disabled = false;
}