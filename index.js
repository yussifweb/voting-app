const $ = (element) => document.querySelector(element);
const $All = (element) => document.querySelectorAll(element);
const addBtn = $All(".plus");
const total = $(".max-votes");
const subtractBtn = $All(".minus");
const mateNames = $All(".name");
const mateVotes = $All(".vote");
const mateImages = $All(".mate");
const progressBar = $(".progress");
const LeaderboardImgs = $All(".lb-mate");
const LeaderboardNames = $All(".lb-name");
const eviction = $(".evicted p");
const counts = $All(".level span");

const contestants = {
  totalMarks: 100,
  mates: [{
      name: "Dorathy",
      votes: 0,
      id: 0,
      imageSrc: "./images/dorathy.png",
    },
    {
      name: "Laycon",
      votes: 0,
      id: 1,
      imageSrc: "./images/laycon.png",
    },
    {
      name: "Erica",
      votes: 0,
      id: 2,
      imageSrc: "./images/erica.png",
    },
    {
      name: "Kaena",
      votes: 0,
      id: 3,
      imageSrc: "./images/kaena.png",
    },
    {
      name: "Britho",
      votes: 0,
      id: 4,
      imageSrc: "./images/brighto.png",
    },
    {
      name: "Tochi",
      votes: 0,
      id: 5,
      imageSrc: "./images/tochi.png",
    },
  ],
};

total.textContent = contestants.totalMarks;

//Display username
const displayMates = () => {
  contestants.mates.map((mate) => {
    mateNames.forEach((matename, ElementIndex) => {
      mate.id == ElementIndex ? (matename.textContent = mate.name) : "";
    });

    mateVotes.forEach((uservote, voteIndex) => {
      mate.id == voteIndex ? (uservote.textContent = mate.votes) : "";
    });
    mateImages.forEach((userImage, imageIndex) => {
      mate.id == imageIndex ? (userImage.src = mate.imageSrc) : "";
    });
  });
};
displayMates();



// //Add vote to the user's score
addBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    contestants.mates.map((mate, mapIndex, mates) => {
      if (contestants.totalMarks == 0 || mate.votes == 100) return;
      if (index === mate.id) {
        mates[index].votes++;
        contestants.totalMarks--;
        total.textContent = contestants.totalMarks;
        progressBar.style.width = contestants.totalMarks + "%";
      }
      mateVotes.forEach((matevote, voteIndex) => {
        voteIndex == mate.id ? (matevote.textContent = mate.votes) : "";
      });
    });
  });
});

// //Subtract vote to the user's score
subtractBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    contestants.mates.map((mate, mapIndex, mates) => {
      if (contestants.totalMarks == 100 || mate.votes == 0) return;
      if (index === mate.id) {
        contestants.totalMarks++;
        mates[index].votes--;
        total.textContent = contestants.totalMarks;
        progressBar.style.width = contestants.totalMarks + "%";
      }
      mateVotes.forEach((matevote, voteIndex) => {
        voteIndex == mate.id ? (matevote.textContent = mate.votes) : "";
      });
    });
  });
});

counts.forEach((count, index) => {
  count.innerHTML = index + 1;
});

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
let newMates = contestants.mates.map((u) => Object.assign({}, u));
let newMateVotes = [];
newMates.map((mate, index) => {
  //4
  newMateVotes.push(mate.votes);
  newMateVotes.sort((a, b) => b - a);
  newMateVotes.includes(mate.votes) ?
    newMateVotes.splice(newMateVotes.indexOf(mate.votes), 0, mate) :
    "";
  //       console.log(newMateVotes)
});

newMates.map((mate, index, mates) => {
  LeaderboardNames.forEach((name, ElementIndex) => {
    index == ElementIndex ? (name.textContent = mate.name) : "";
  });
  LeaderboardImgs.forEach((userImage, ElementIndex) => {
    index == ElementIndex ? (userImage.src = mate.imageSrc) : "";
  });
  lastMate = mates[mates.length - 1].name;
  eviction.innerHTML = `${lastMate} was evicted`;
});
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