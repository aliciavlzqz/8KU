// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string
//  in the format "x:y", where x is our team's score and y is our opponents score.

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
 
    let sum = 0
    for(let i =0; i < games.length; i ++){
      //add conditional
      if(games[i][0] > games[i][2])
        sum += 3;
      if(games[i][0] == games[i][2])
        sum += 1
    }
    return sum
  }

//alternate solution

  function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }