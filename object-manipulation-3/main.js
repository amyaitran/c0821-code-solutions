console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create a function that will generate a declared number of players.
// -create a storage for all the players.
// -create a count to generate player IDs.
// -for each of the declared players,
//   -add each player into the list of players with their own set of properties: name, hand, and score. their name will be a unique ID.
//   -increase the player ID by 1
// -return the players.

// create a function that serve each player, and serve a declared number of cards to be dealt per player.
// -create a storage for all the card suits.
// -create a storage for all the card ranks.
// -create a storage for a random card, in which a random suit and rank will be assigned to the card.

// -create a function that will randomize the card with a new random suit and rank.

// -create a storage for all cards that have been "drawn".
// -keep track of the number of cards to be dealt to each person.
//   -keep track of the number of players.
//     -check the random card to see if it's already been dealt. if it's one that's already been drawn,
//       -then keep "shuffling" the card until a new one is generated.
//     -add the random card into each player's hand.
//     -add the random card into the list of dealt cards.
//     -update the player's score with the score from the random card.

// -create a function that will calculate a score based on a card's value.
//   -note the first character in the card's name. if it's a number,
//   then the score will be its corresponding number, except for number 10. if it's a face card or number 10,
//   then the score will be 10, except for the Ace, which will have a score of 11.

// -create a storage for the high score.
// -look at each player.
//   -compare the player's score with the current high score. if the player's score is higher, then replace the high score with the player's high score.

// -create a storage for the winners.
// -look at each player.
//   -if the player has a score equivalent to the high score,
//     -then add the player into the list of winners.

// -declare the winners using the list of winners.

// -create a function that will declare the winners.
//   -if there is only one winner,
//     -then write a message to declare the winner.
//   -otherwise, if there are more,
//     -create a storage for the names of the winners.
//     -look at each of the winners.
//       -if the current winner is not the last,
//         -then add their name to the list of winners with the conjunction "and".
//       -otherwise, if the current winner is the last one,
//         -then add their name to the list of winners with an exclamation point.
//     -write a message declaring the winners and the start of a new game.

// -if the game ended in a tie and there are more than one winner,
//   -then look at each of the winners.
//    -clear each winner's hand.
//    -clear each winner's score.
//  -run the game again, dealing the same number of cards to the winners.

playCards(generatePlayers(4), 2);

function generatePlayers(number) {
  var players = [];
  var count = 1;

  for (var i = 0; i < number; i++) {
    players.push(
      {
        name: 'Player' + count,
        hand: [],
        score: null
      }
    );
    count++;
  }
  return players;
}

function playCards(players, numberCards) {
  var cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  var cardRanks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var randomCard = ((cardRanks[Math.floor(Math.random() * 13)]) + ' of ' + cardSuits[Math.floor(Math.random() * 4)]);

  function shuffle() {
    randomCard = ((cardRanks[Math.floor(Math.random() * 13)]) + ' of ' + cardSuits[Math.floor(Math.random() * 4)]);
  }

  var dealtCards = [];
  for (var x = 0; x < numberCards; x++) {
    for (var y = 0; y < players.length; y++) {
      while (dealtCards.indexOf(randomCard) > -1) {
        shuffle();
      }
      players[y].hand.push(randomCard);
      dealtCards.push(randomCard);
      players[y].score += generateScore(randomCard);
    }
  }

  function generateScore(card) {
    if (card[0] === '2') {
      return 2;
    } else if (card[0] === '3') {
      return 3;
    } else if (card[0] === '4') {
      return 4;
    } else if (card[0] === '5') {
      return 5;
    } else if (card[0] === '6') {
      return 6;
    } else if (card[0] === '7') {
      return 7;
    } else if (card[0] === '8') {
      return 8;
    } else if (card[0] === '9') {
      return 9;
    } else if (card[0] === '1') {
      return 10;
    } else if (card[0] === 'J') {
      return 10;
    } else if (card[0] === 'Q') {
      return 10;
    } else if (card[0] === 'K') {
      return 10;
    } else if (card[0] === 'A') {
      return 11;
    }
  }

  var highScore = 0;
  for (var p = 0; p < players.length; p++) {
    highScore = Math.max(players[p].score, highScore);
  }

  var winners = [];
  for (var h = 0; h < players.length; h++) {
    if (players[h].score === highScore) {
      winners.push(players[h]);
    }
  }

  declareWinners(winners);

  function declareWinners(names) {
    if (names.length === 1) {
      console.log(winners[0].name + ' wins!');
    } else {
      var multiwinners = '';
      for (var w = 0; w < names.length; w++) {
        if (w !== names.length - 1) {
          multiwinners += names[w].name + ' and ';
        } else { multiwinners += names[w].name + '!'; }
      }
      console.log('It\'s a tie. The winners are ' + multiwinners + ' A new game will start to declare the true winner!');
    }
  }

  if (winners.length > 1) {
    for (var a = 0; a < winners.length; a++) {
      winners[a].hand = [];
      winners[a].score = 0;
    }
    playCards(winners, numberCards);
  }
}
