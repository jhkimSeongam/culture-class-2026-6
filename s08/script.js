const storyData = [
  {
    id: 1,
    speaker: "나",
    text: "(스승님의 심부름으로 밤늦게 궁궐 한옥을 지나던 길이었다!...)",
    info: "💡 **궁궐의 야간 통행**: 조선시대 궁궐은 밤이 되면 '파루(罷漏)' 종이 친 후 통행이 엄격히 금지되었습니다.",
    image: "hero.png", // 폴더 안의 이미지 파일명
    nextId: 2
  },
  {
    id: 2,
    speaker: "이선 (별운검)",
    text: "...아, 너였구나. 달빛이 밝아 적인 줄 알고 칼을 뽑을 뻔했다.",
    info: "💡 **별운검(別雲劍)**: 조선 시대 왕을 가장 가까이서 호위하던 최정예 운검 무사입니다.",
    image: "npc.png", // 폴더 안의 이미지 파일명
    choices: [
      { text: "1. 이선 나리! 놀랐잖아요!", nextId: 3 },
      { text: "2. 밤길이 위험하니 어서 함께 가요.", nextId: 4 }
    ]
  },
  {
    id: 3,
    speaker: "이선 (별운검)",
    text: "미안하구나. 요새 조정이 어수선하여 나도 모르게 경계했구나.",
    info: "",
    image: "npc.png",
    nextId: 5
  },
  {
    id: 4,
    speaker: "이선 (별운검)",
    text: "...그래. 밤 기운이 차가우니 어서 너를 바래다주마.",
    info: "",
    image: "npc.png",
    nextId: 5
  },
  {
    id: 5,
    speaker: "나",
    text: "덕분에 안전하게 도착했어요. 감사합니다, 나리.",
    info: "",
    image: "hero.png",
    nextId: null
  }
];

let currentStory = storyData[0];
let isChoiceActive = false;

const mainMenu = document.getElementById('main-menu');
const endingMenu = document.getElementById('ending-menu');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const speakerName = document.getElementById('speaker-name');
const dialogText = document.getElementById('dialog-text');
const historyInfo = document.getElementById('history-info');
const characterImg = document.getElementById('character');
const dialogBox = document.getElementById('dialog-box');
const choicesBox = document.getElementById('choices-box');

startBtn.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  endingMenu.style.display = 'none';
  currentStory = storyData[0];
  updateDialog();
});

restartBtn.addEventListener('click', () => {
  endingMenu.style.display = 'none';
  mainMenu.style.display = 'flex';
});

function parseMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

function updateDialog() {
  if (!currentStory) {
    historyInfo.style.display = 'none';
    choicesBox.innerHTML = '';
    endingMenu.style.display = 'flex';
    return;
  }

  speakerName.innerText = currentStory.speaker;
  dialogText.innerText = currentStory.text;

  if (currentStory.info) {
    historyInfo.style.display = 'block';
    historyInfo.innerHTML = parseMarkdown(currentStory.info);
  } else {
    historyInfo.style.display = 'none';
  }

  // 이미지 안전 로딩 처리
  if (currentStory.image) {
    characterImg.style.display = 'block';
    characterImg.src = currentStory.image;
  } else {
    characterImg.style.display = 'none';
  }

  choicesBox.innerHTML = '';
  if (currentStory.choices && currentStory.choices.length > 0) {
    isChoiceActive = true;
    currentStory.choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.innerText = choice.text;
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        selectChoice(choice.nextId);
      });
      choicesBox.appendChild(button);
    });
  } else {
    isChoiceActive = false;
  }
}

function selectChoice(nextId) {
  currentStory = storyData.find(item => item.id === nextId);
  choicesBox.innerHTML = '';
  isChoiceActive = false;
  updateDialog();
}

dialogBox.addEventListener('click', () => {
  if (mainMenu.style.display === 'none' && endingMenu.style.display === 'none' && !isChoiceActive) {
    if (currentStory && currentStory.nextId) {
      currentStory = storyData.find(item => item.id === currentStory.nextId);
    } else {
      currentStory = null;
    }
    updateDialog();
  }
});