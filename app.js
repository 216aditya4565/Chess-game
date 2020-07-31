//Queen is the object and position is the property of the object. x and y are positions of the queen
var queen = {
  position: {
    x: 0,
    y: 0,
  },
  //var steps =  window.prompt("Enter the number of steps");
  //var direction = window.prompt("Enter the direction:");
  //steps = parseInt(steps);
};

//Creating a chess board using mult-dimensional array
var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

function move(numberofsteps, direction) {
  let temp;
  let temp1;

  //E-> east, N-> North, W-> West, S-> South
  switch (direction) {
    case "E":
      temp = queen.position.y + numberofsteps; //If player choses East,then add number of steps by player in vertical direction from the existing y position
      if (temp > 8 || temp < 0) {
        //If player's position is greater than 8 and less than 0, he is out of bounds
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.y = temp; //Store the value of temp in y
      }
      break;

    case "W":
      temp = queen.position.y - numberofsteps; //If player choses West,then subtract number of steps by player in vertical direction from the existing y position
      if (temp > 8 || temp < 0) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.y = temp;
      }
      break;

    case "N":
      temp = queen.position.x - numberofsteps; //If player choses North,then subtract number of steps by player in vertical direction from the existing x position
      if (temp > 8 || temp < 0) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp; //Store the value of temp in y
      }
      break;

    case "S":
      temp = queen.position.x + numberofsteps; //If player choses West,then subtract number of steps by player in vertical direction from the existing x position
      if (temp > 8 || temp < 0) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp;
      }
      break;

    case "SE":
      temp = queen.position.x + numberofsteps;
      temp1 = queen.position.y + numberofsteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    case "SW":
      temp = queen.position.x + numberofsteps;
      temp1 = queen.position.y - numberofsteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    case "NE":
      temp = queen.position.x - numberofsteps;
      temp1 = queen.position.y + numberofsteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    case "NW":
      temp = queen.position.x - numberofsteps;
      temp1 = queen.position.y - numberofsteps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of bounds");
        document.write("Out of bounds");
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    default:
      document.write("Invalid Input!!"); //If player enters a special character, then display Invalid Input in document
  }
}

function play() {
  var value = document.getElementById("position").value; //get the id from html input
  var input = value.split(" "); //split the input(for eg:-"S5" is splitted into S and 5 )
  input.forEach((num) => {
    //Run for each loop till user enter input
    let num1 = Number(num.slice(num.length - 1));
    let dir = num.slice(0, num.length - 1);
    move(num1, dir); //Call the move function
  });
  console.log(
    "Queen's current position-> " + board[queen.position.x][queen.position.y] //Print the output in the browser's console
  );
}
