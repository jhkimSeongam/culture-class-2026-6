const contents = [
  { title: "빛과 소리 전시", desc: "미디어아트 전시 추천!" },
  { title: "전통시장 먹거리 축제", desc: "지역 행사 체험하기" },
  { title: "문화유산 산책 코스", desc: "도심 속 문화 코스" }
];

const list = document.getElementById("list");

contents.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h2>${item.title}</h2><p>${item.desc}</p>`;
  list.appendChild(div);
});
