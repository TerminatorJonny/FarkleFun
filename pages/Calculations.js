export function calculateStraightScore(dice) {
  const straight = [1, 2, 3, 4, 5, 6];
  const isMatch = straight.every((diceNumber) => dice.includes(diceNumber));
  if (isMatch) {
    console.log("getting hit");
    return 3000;
  }
  return 0;
}

export function calculateThreePairsScore(dice) {
  var sum = dice.reduce((total, a) => total + a, 0);
  if (sum % 2 == 1) {
    return 0;
  }
  return 0;
}

export function calculateOneOrFiveScore(dice) {
  const isOne = [1];
  const isFive = [5];
  if (isOne) {
    return 100;
  } else if (isFive) {
    return 50;
  }
}

export function calculateOneTriple(dice) {
  for (var i = 1; i <= 6; i++) {
    const pairOfThree = [i, i, i];
    if (
      dice.every((diceNumber) => {
        return pairOfThree.includes(diceNumber);
      })
    ) {
      switch (i) {
        case 1:
          return 1000;
        case 2:
          return 200;
        case 3:
          return 300;
        case 4:
          return 400;
        case 5:
          return 500;
        case 6:
          return 600;
      }
    }
  }
  return 0;
}

  // Ensure that we're getting correct scores for each function
  // Not double counting rolls because of two rolls
  

/*
set of instructions
1 = 100 points
5 = 50 points
Three 1's = 1,000 points
Three 2's = 200 points
Three 3's = 300 points
Three 4's = 400 points
Three 5's = 500 points
Three 6's = 600 points
3 Pairs = 1500 points (including 4-of-a-kind and a pair)
1-2-3-4-5-6 = 3000 points
*/
