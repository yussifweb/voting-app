const newVotes = document.getElementsByClassName(vote).values;
console.log(newVotes);

// counts.forEach((count, index) => {
//   count.innerHTML = index + 1;
// });

//Animate
// const viewBoard = $(".view");
// const backToVote = $(".back");
// const leaderboard = $(".leaderboard");

// //Sorting out according to position and votes

// let newMates = [];
// let newMates = contestants.mates.map((u) => Object.assign({}, u));
// let newMateVotes = [];
// newMates.map((mate, index) => {
//       //4
//       newMateVotes.push(mate.votes);
//       newMateVotes.sort((a, b) => b - a);
//       newMateVotes.includes(mate.votes) ?
//         newMateVotes.splice(newMateVotes.indexOf(mate.votes), 0, mate) :
//         "";
//        console.log(newMateVotes); 

// const redirectToBoard = () => {
//     leaderboard.style.opacity = 1;
//     leaderboard.style.pointerEvents = "auto";
// LeaderboardImgs.forEach((image) => {});

// counts = mates.votes;
// counts.forEach((count, index) => {
//   count.innerHTML = mate.votes;
// });

// };

//   });
//   //  console.log(newUsers)
//   newUsers.map((user, index, users) => {
//     LeaderboardNames.forEach((username, ElementIndex) => {
//       index == ElementIndex ? (username.textContent = user.name) : "";
//     });
//     LeaderboardImgs.forEach((userImg, ElementIndex) => {
//       index == ElementIndex ? (userImg.src = user.imgSrc) : "";
//     });
//     lastUser = users[users.length - 1].name;
//     eviction.innerHTML = `${lastUser} was evicted`;
//   });
// };
// const redirectToVote = () => {
//   leaderboard.style.opacity = 0;
//   leaderboard.style.pointerEvents = "none";
//   newUsers = [];
// };

// viewBoard.onclick = redirectToBoard;
// backToVote.onclick = redirectToVote;

  mateVotes.forEach((matevote, voteIndex) => {
        voteIndex == mate.id ? (matevote.textContent = mate.votes) : "";
      });
    });
  });
});