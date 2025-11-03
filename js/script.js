const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const gamekey = document.querySelector(".game__key");
const userkey = document.querySelector(".user__Key");
const gameScore = document.querySelector(".game__score");
const game = document.querySelector("#game");

let currentKeyIndex = 0;
gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;

window.addEventListener("keydown", (event) => {
  let formatingKey = event.key.toUpperCase();
  userkey.textContent = `Натиснута клавіша - ${formatingKey}`;

  if (keys[currentKeyIndex] == formatingKey) {
    currentKeyIndex++;

    gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;
    gameScore.textContent = `Натиснуто ${currentKeyIndex}/10`;
    PNotify.success({
      title: "Success!",
      delay: 700,
    });

    if (currentKeyIndex > 9) {
      gamekey.textContent = `Гру закінчено ви натиснули 10-10 клавіш`;

      const newGameBtn = document.createElement("button");
      newGameBtn.textContent = `Нова гра`;
      newGameBtn.classList.add('newGameBtn')
      game.appendChild(newGameBtn);

      newGameBtn.addEventListener("click", () => {
        currentKeyIndex = 0;
        newGameBtn.remove();

        gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;
        gameScore.textContent = `Натиснуто ${currentKeyIndex}/10`;
        PNotify.info({
          title: "Start new game!",
          delay: 700,
        });
      });
    }
  } else {
    PNotify.notice({
      title: "Error!",
      delay: 700,
    });
  }
});

window.addEventListener("keypress", (event) => {
  event.preventDefault();
});




const chartData = {
  type: "line",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [
          150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
          600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
          1250, 1300, 1350,
        ],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const ctx = document.getElementById("sales-chart");
const salesChart = new Chart(ctx, chartData);
