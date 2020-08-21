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
const lboard = $(".lboard");

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
let newMateVotes = [];
let sorted = [];
let finalContestants = [];
lboard.addEventListener("click", () => {
  let newMates = contestants.mates.map((u) => Object.assign({}, u));
  newMates.map((mate, index) => {
    //4
    newMateVotes.push(mate.votes);

    sorted = newMateVotes.sort((a, b) => b - a);
    if (sorted.includes(mate.votes)) {
      finalContestants.splice(sorted.indexOf(mate.votes), 0, mate)
    }
    newMates.map((mate, index, mates) => {
      LeaderboardNames.forEach((name, ElementIndex) => {
        index == ElementIndex ? (name.textContent = mate.name) : "";
      });
      LeaderboardImgs.forEach((userImage, ElementIndex) => {
        index == ElementIndex ? (userImage.src = mate.imageSrc) : "";
      });
      counts.forEach((votes, ElementIndex) => {
        index == ElementIndex ? (votes.textContent = mate.votes) : "";
      });



    });

  });
  // console.log(newMateVotes)
  finalContestants.map((contestant, index, contestants) => {
    LeaderboardImgs.forEach((userImage, ElementIndex) => {
      index == ElementIndex ? (userImage.src = contestant.imageSrc) : "";
    });
    counts.forEach((votes, ElementIndex) => {
      index == ElementIndex ? (votes.textContent = contestant.votes) : "";
    });
    LeaderboardNames.forEach((name, ElementIndex) => {
      index == ElementIndex ? (name.textContent = contestant.name) : "";
    });
  })
  lastMate = finalContestants[finalContestants.length - 1].name;
  eviction.innerHTML = `${lastMate} was evicted`;

  newMateVotes = [];
  sorted = [];
  finalContestants = [];
});