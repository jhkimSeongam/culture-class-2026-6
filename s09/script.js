// 메뉴 데이터
const burgerMenuData = {
    recommended: [
        { id: "br1", name: "몬스터 맥시멈 세트", price: 18900, icon: "🍔", desc: "패티 4장의 압도적 크기" },
        { id: "br2", name: "데리야킹 크리스퍼 세트", price: 9500, icon: "🍔", desc: "달콤한 데리야끼 소스" },
        { id: "br3", name: "통새우와퍼 세트", price: 10900, icon: "🍔", desc: "탱글한 통새우가 가득" },
        { id: "br4", name: "갈릭불고기와퍼 세트", price: 9900, icon: "🍔", desc: "마늘칩과 불고기 소스" },
        { id: "br5", name: "치즈와퍼 세트", price: 9700, icon: "🍔", desc: "고소한 고다치즈 추가" },
        { id: "br6", name: "말차 킹퓨전", price: 3800, icon: "🍦", desc: "진한 말차 아이스크림" }
    ],
    premium: [
        { id: "bp1", name: "펜타치즈와퍼 세트", price: 12500, icon: "🍔", desc: "5가지 치즈의 풍미" },
        { id: "bp2", name: "보일링씨푸드 세트", price: 13800, icon: "🍔", desc: "매콤한 씨푸드 소스" },
        { id: "bp3", name: "콰트로치즈와퍼 세트", price: 11200, icon: "🍔", desc: "4가지 치즈 조화" },
        { id: "bp4", name: "트러플머쉬룸 세트", price: 12000, icon: "🍔", desc: "트러플 향 버섯" },
        { id: "bp5", name: "X-TRA 크런치 세트", price: 10500, icon: "🍔", desc: "바삭한 크런치 패티" },
        { id: "bp6", name: "블랙바비큐 와퍼 세트", price: 11800, icon: "🍔", desc: "스모키 바비큐 소스" }
    ],
    whopper: [
        { id: "bw1", name: "와퍼 세트", price: 9100, icon: "🍔", desc: "버거킹 대표 메뉴" },
        { id: "bw2", name: "불고기와퍼 세트", price: 9100, icon: "🍔", desc: "한국인 입맛 맞춤" },
        { id: "bw3", name: "와퍼 주니어 세트", price: 7000, icon: "🍔", desc: "부담없는 사이즈" },
        { id: "bw4", name: "치즈와퍼 주니어 세트", price: 7300, icon: "🍔", desc: "고소한 치즈 추가" },
        { id: "bw5", name: "베이컨와퍼 세트", price: 10200, icon: "🍔", desc: "훈제 베이컨 탑재" },
        { id: "bw6", name: "더블와퍼 세트", price: 12100, icon: "🍔", desc: "순쇠고기 패티 2장" }
    ],
    side: [
        { id: "bs1", name: "바삭킹 4조각", price: 5800, icon: "🍗", desc: "매콤 바삭 치킨윙" },
        { id: "bs2", name: "리얼어니언링", price: 2600, icon: "🧅", desc: "통양파 튀김" },
        { id: "bs3", name: "너겟킹 8조각", price: 3500, icon: "🍟", desc: "한입 바삭 너겟" },
        { id: "bs4", name: "쉐이킹프라이", price: 2900, icon: "🍟", desc: "시즈닝 흔들어먹는 튀김" },
        { id: "bs5", name: "치즈스틱", price: 2500, icon: "🧀", desc: "길게 늘어나는 치즈" },
        { id: "bs6", name: "코코넛쉬림프", price: 4200, icon: "🍤", desc: "고소한 코코넛 새우" }
    ]
};

const cafeMenuData = {
    recommended: [
        { id: "cr1", name: "아이스 아메리카노", price: 2000, icon: "☕", desc: "시원하고 진한 원두" },
        { id: "cr2", name: "메가초코", price: 3800, icon: "🍫", desc: "달콤 진한 초코 음료" },
        { id: "cr3", name: "큐브라떼", price: 4200, icon: "🧋", desc: "에스프레소 큐브 탑재" },
        { id: "cr4", name: "딸기라떼", price: 3700, icon: "🍓", desc: "상큼한 딸기 과육" },
        { id: "cr5", name: "청포도에이드", price: 3500, icon: "🍹", desc: "톡 쏘는 청량감" },
        { id: "cr6", name: "플레인퐁크러쉬", price: 3900, icon: "🥤", desc: "죠리퐁이 듬뿍" }
    ],
    coffee: [
        { id: "cc1", name: "따뜻한 아메리카노", price: 1500, icon: "☕", desc: "깊고 풍부한 향" },
        { id: "cc2", name: "카페라떼", price: 2900, icon: "☕", desc: "부드러운 우유 조합" },
        { id: "cc3", name: "바닐라라떼", price: 3400, icon: "☕", desc: "달콤한 바닐라 향" },
        { id: "cc4", name: "카푸치노", price: 2900, icon: "☕", desc: "풍성한 시나몬 거품" },
        { id: "cc5", name: "카라멜마끼아또", price: 3700, icon: "☕", desc: "카라멜 드리즐 탑재" },
        { id: "cc6", name: "콜드브루", price: 3300, icon: "☕", desc: "깔끔한 깔끔한 맛" }
    ],
    beverage: [
        { id: "cb1", name: "고구마라떼", price: 3500, icon: "🍠", desc: "부드럽고 구수한 맛" },
        { id: "cb2", name: "녹차라떼", price: 3200, icon: "🍵", desc: "쌉싸름한 녹차 풍미" },
        { id: "cb3", name: "자몽에이드", price: 3500, icon: "🍹", desc: "씁쓸 달콤 자몽" },
        { id: "cb4", name: "복숭아아이스티", price: 3000, icon: "🍑", desc: "시원달콤 클래식" },
        { id: "cb5", name: "레몬에이드", price: 3500, icon: "🍋", desc: "비타민 상큼 폭발" },
        { id: "cb6", name: "쿠키프라페", price: 3900, icon: "🍪", desc: "바삭한 쿠키 분태" }
    ],
    dessert: [
        { id: "cd1", name: "플레인 크로플", price: 2500, icon: "🥐", desc: "겉바속촉 크로플" },
        { id: "cd2", name: "초코 감자빵", price: 3500, icon: "🥔", desc: "쫄깃한 쫀득 감자" },
        { id: "cd3", name: "치즈케이크", price: 4000, icon: "🍰", desc: "진한 진한 치즈" },
        { id: "cd4", name: "초코쿠키", price: 1200, icon: "🍪", desc: "수제 초코칩 쿠키" },
        { id: "cd5", name: "마카롱(딸기)", price: 2100, icon: "🧁", desc: "쫀득한 꼬끄" },
        { id: "cd6", name: "허니버터브레드", price: 4500, icon: "🍞", desc: "달콤한 휘핑크림" }
    ]
};

let burgerCartMap = new Map();
let cafeCartMap = new Map();

let currentBurgerCat = 'recommended';
let currentCafeCat = 'recommended';

let atmSelectedBank = '';
let atmAccountNumber = '';
let atmAmount = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderMenu('burger', 'recommended');
    renderMenu('cafe', 'recommended');
});

function nextPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    if (pageId === 'page-burger') renderMenu('burger', currentBurgerCat);
    if (pageId === 'page-cafe') renderMenu('cafe', currentCafeCat);
    if (pageId === 'page-atm') goAtmStep(1);
}

function switchCategory(type, catKey, tabElement) {
    if (type === 'burger') currentBurgerCat = catKey;
    if (type === 'cafe') currentCafeCat = catKey;

    const parent = tabElement.parentElement;
    parent.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');

    renderMenu(type, catKey);
}

function renderMenu(type, catKey) {
    const grid = document.getElementById(`${type}MenuGrid`);
    if (!grid) return;
    grid.innerHTML = '';

    const data = (type === 'burger') ? burgerMenuData[catKey] : cafeMenuData[catKey];
    const cartMap = (type === 'burger') ? burgerCartMap : cafeCartMap;

    data.forEach(item => {
        const isSelected = cartMap.has(item.id);
        const card = document.createElement('div');
        card.className = `burger-item ${isSelected ? 'selected' : ''}`;
        card.onclick = () => toggleMenu(type, item);

        card.innerHTML = `
            <div class="burger-img">${item.icon}</div>
            <div class="burger-title">${item.name}</div>
            <div class="burger-desc">${item.desc}</div>
            <div class="burger-price">${item.price.toLocaleString()}원</div>
        `;
        grid.appendChild(card);
    });
}

function toggleMenu(type, item) {
    const cartMap = (type === 'burger') ? burgerCartMap : cafeCartMap;
    if (cartMap.has(item.id)) {
        cartMap.delete(item.id);
    } else {
        cartMap.set(item.id, item);
    }

    const currentCat = (type === 'burger') ? currentBurgerCat : currentCafeCat;
    renderMenu(type, currentCat);
    updateCartUI(type);
}

function clearCart(type) {
    if (type === 'burger') burgerCartMap.clear();
    if (type === 'cafe') cafeCartMap.clear();

    const currentCat = (type === 'burger') ? currentBurgerCat : currentCafeCat;
    renderMenu(type, currentCat);
    updateCartUI(type);
}

function updateCartUI(type) {
    const cartMap = (type === 'burger') ? burgerCartMap : cafeCartMap;
    const cartList = document.getElementById(`${type}CartList`);
    const badge = document.getElementById(`${type}CartBadge`);
    const totalDisplay = document.getElementById(`${type}TotalDisplay`);

    if (cartMap.size === 0) {
        cartList.innerHTML = `<div class="empty-msg">${type === 'burger' ? '메뉴' : '음료'}를 선택해 주세요!</div>`;
        badge.innerText = '카트 0';
        totalDisplay.innerText = '0원';
        return;
    }

    cartList.innerHTML = '';
    let total = 0;

    cartMap.forEach(item => {
        total += item.price;
        const line = document.createElement('div');
        line.className = 'cart-line-item';
        line.innerHTML = `<span>• ${item.name}</span><span style="font-weight:bold">${item.price.toLocaleString()}원</span>`;
        cartList.appendChild(line);
    });

    badge.innerText = `카트 ${cartMap.size}`;
    totalDisplay.innerText = total.toLocaleString() + '원';
}

function processPayment(type) {
    const cartMap = (type === 'burger') ? burgerCartMap : cafeCartMap;
    if (cartMap.size === 0) {
        alert('메뉴를 하나 이상 선택해 주세요!');
        return;
    }

    const title = type === 'burger' ? '버거킹 주문 성공!' : '메가카페 주문 성공!';
    completeMission(type, title);
    clearCart(type);
}

/* ATM 로직 */
function goAtmStep(stepNum) {
    document.querySelectorAll('.atm-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`atm-step-${stepNum}`).classList.add('active');
}

function selectBank(bankName) {
    atmSelectedBank = bankName;
    atmAccountNumber = '';
    document.getElementById('atmAccountInput').innerText = '------------------';
    goAtmStep(3);
}

function pressKey(key) {
    if (key === 'clear') {
        atmAccountNumber = atmAccountNumber.slice(0, -1);
    } else {
        if (atmAccountNumber.length < 12) atmAccountNumber += key;
    }
    document.getElementById('atmAccountInput').innerText = atmAccountNumber || '------------------';
}

function confirmAccount() {
    if (atmAccountNumber.length < 6) {
        alert('계좌번호를 6자리 이상 입력해주세요.');
        return;
    }
    atmAmount = 0;
    document.getElementById('atmAmountInput').innerText = '0 원';
    goAtmStep(4);
}

function addAmount(val) {
    atmAmount += val;
    document.getElementById('atmAmountInput').innerText = atmAmount.toLocaleString() + ' 원';
}

function resetAmount() {
    atmAmount = 0;
    document.getElementById('atmAmountInput').innerText = '0 원';
}

function confirmAmount() {
    if (atmAmount <= 0) {
        alert('금액을 입력해주세요.');
        return;
    }
    document.getElementById('summaryBank').innerText = atmSelectedBank;
    document.getElementById('summaryAccount').innerText = atmAccountNumber;
    document.getElementById('summaryAmount').innerText = atmAmount.toLocaleString() + '원';
    goAtmStep(5);
}

function finishAtm() {
    completeMission('atm', `${atmSelectedBank}으로 ${atmAmount.toLocaleString()}원 송금 완료!`);
}

/* 업적 등록 로직 */
function completeMission(type, msg) {
    document.getElementById('successMsg').innerText = msg;

    const card = document.getElementById(`ach-${type}`);
    const badge = document.getElementById(`badge-${type}`);
    const dateBox = document.getElementById(`date-${type}`);

    if (card && badge && dateBox) {
        card.classList.add('done');
        badge.innerText = '완료 🎉';

        const now = new Date();
        dateBox.innerText = `달성: ${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    }

    nextPage('page-success');
}