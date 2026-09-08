// 지정해주신 메뉴 정확히 정의
const menuData = {
    recommended: [
        { id: "r1", name: "몬스터 맥시멈 라지세트", price: 18900, icon: "🍔", desc: "몬스터 멕시멈+프렌치프라이(L)+코카콜라(L)" },
        { id: "r2", name: "데리야킹 크리스퍼 세트", price: 9500, icon: "🍔", desc: "데리야킹 크리스퍼+프렌치프라이(R)+코카콜라(R)" },
        { id: "r3", name: "말차 킹퓨전", price: 3800, icon: "🍦", desc: "말차 킹퓨전" },
        { id: "r4", name: "킹프로트(닥터페퍼 제로)", price: 2500, icon: "🥤", desc: "킹프로트(닥터페퍼제로)" }
    ],
    premium: [
        { id: "p1", name: "펜타치즈와퍼 라지세트", price: 12500, icon: "🍔", desc: "펜타피즈와퍼 + 프렌치프라이(L)+코카콜라(L)" },
        { id: "p2", name: "보일링씨푸드버거 버터갈릭 라지세트", price: 13800, icon: "🍔", desc: "보일링 씨푸드 버거 버터갈릭+프렌치프라이(L)+코카콜라(L)" },
        { id: "p3", name: "베이컨 치즈와퍼", price: 9100, icon: "🍔", desc: "베이컨치즈와퍼" },
        { id: "p4", name: "통새우와퍼", price: 8900, icon: "🍔", desc: "통새우와퍼" }
    ],
    whopper: [
        { id: "w1", name: "와퍼 라지 세트", price: 10100, icon: "🍔", desc: "와퍼+프렌치프라이(L)+코카콜라(L)" },
        { id: "w2", name: "치즈와퍼세트", price: 9700, icon: "🍔", desc: "치즈와퍼+프렌치프라이(R)+코카콜라(R)" },
        { id: "w3", name: "불고기와퍼", price: 7700, icon: "🍔", desc: "불고기와퍼" },
        { id: "w4", name: "갈릭불고기와퍼", price: 7900, icon: "🍔", desc: "갈릭불고기와퍼" }
    ],
    side: [
        { id: "s1", name: "비프 킹 랩", price: 4500, icon: "🌯", desc: "비프 킹 랩" },
        { id: "s2", name: "바삭킹 4조각", price: 5800, icon: "🍗", desc: "바삭킹4조각" },
        { id: "s3", name: "리얼어니언링", price: 2600, icon: "🧅", desc: "리얼어니언링" },
        { id: "s4", name: "너겟킹 8조각", price: 3500, icon: "🍟", desc: "너게킹8조각" }
    ]
};

// 선택된 상품을 보관할 객체 Map
let selectedCartMap = new Map(); 
let currentCategory = 'recommended';

// 페이지 로드 시 즉시 실행
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('recommended');
});

// 페이지 전환 시 실행 (페이지2 진입 시 메뉴 강제 로드)
function nextPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageId === 'page2') {
        renderMenu(currentCategory);
    }
}

// 카테고리 탭 클릭 시 변경
function switchCategory(catKey, tabElement) {
    currentCategory = catKey;
    
    const tabs = document.querySelectorAll('.cat-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabElement.classList.add('active');

    renderMenu(catKey);
}

// 화면에 메뉴 카드 동적 생성
function renderMenu(catKey) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';

    const items = menuData[catKey];
    if (items && items.length > 0) {
        items.forEach(item => {
            const isSelected = selectedCartMap.has(item.id);

            const card = document.createElement('div');
            card.className = `burger-item ${isSelected ? 'selected' : ''}`;
            card.onclick = () => toggleMenu(item);

            card.innerHTML = `
                <div class="burger-img">${item.icon}</div>
                <div class="burger-title">${item.name}</div>
                <div class="burger-desc">${item.desc}</div>
                <div class="burger-price">${item.price.toLocaleString()}원</div>
            `;
            menuGrid.appendChild(card);
        });
    }
}

// 메뉴 선택/취소 (1번 클릭 = 선택, 2번 클릭 = 취소)
function toggleMenu(item) {
    if (selectedCartMap.has(item.id)) {
        selectedCartMap.delete(item.id);
    } else {
        selectedCartMap.set(item.id, item);
    }
    
    renderMenu(currentCategory);
    updateCartUI();
}

// 전체 취소
function clearCart() {
    selectedCartMap.clear();
    renderMenu(currentCategory);
    updateCartUI();
}

// 장바구니 갱신
function updateCartUI() {
    const cartList = document.getElementById('cartItemList');
    const countBadge = document.getElementById('cartCountBadge');
    const priceDisplay = document.getElementById('totalPriceDisplay');

    if (!cartList || !countBadge || !priceDisplay) return;

    if (selectedCartMap.size === 0) {
        cartList.innerHTML = '<div class="empty-msg">메뉴를 선택해 주세요!</div>';
        countBadge.innerText = '카트 0';
        priceDisplay.innerText = '0원';
        return;
    }

    cartList.innerHTML = '';
    let total = 0;

    selectedCartMap.forEach((item) => {
        total += item.price;
        const line = document.createElement('div');
        line.className = 'cart-line-item';
        line.innerHTML = `
            <span class="item-name">• ${item.name}</span>
            <span class="item-price">${item.price.toLocaleString()}원</span>
        `;
        cartList.appendChild(line);
    });

    countBadge.innerText = `카트 ${selectedCartMap.size}`;
    priceDisplay.innerText = total.toLocaleString() + '원';
}

// 결제하기 클릭
function processPayment() {
    if (selectedCartMap.size === 0) {
        alert('메뉴를 하나 이상 선택해 주세요!');
        return;
    }
    
    nextPage('page3');
    launchFireworks();
}

// 폭죽 모션
function launchFireworks() {
    const container = document.getElementById('fireworks-container');
    if (!container) return;
    
    container.innerHTML = '';
    const colors = ['#ff4b2b', '#f2a900', '#22c55e', '#2563eb', '#a855f7', '#ffffff'];

    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');

        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 150;
        const dx = Math.cos(angle) * velocity + 'px';
        const dy = Math.sin(angle) * velocity + 'px';

        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);
        
        particle.style.left = '50%';
        particle.style.top = '40%';

        container.appendChild(particle);
    }
}