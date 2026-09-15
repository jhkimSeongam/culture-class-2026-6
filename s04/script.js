const reviewInput = document.getElementById("reviewInput");
const saveBtn = document.getElementById("saveBtn");

const reviewSection =
    document.getElementById("reviewSection");

const reviewList =
    document.getElementById("reviewList");

const allBtn =
    document.getElementById("allBtn");

const subjectResult =
    document.getElementById("subjectResult");

const detectedSubject =
    document.getElementById("detectedSubject");

const filterButtons =
    document.querySelectorAll(".filter-btn");


// =========================
// 저장된 복습 불러오기
// =========================

let reviews = JSON.parse(
    localStorage.getItem("reviews") || "[]"
);


// 현재 선택한 과목
let currentSubject = "전체";


// =========================
// 과목 키워드
// =========================

const subjectKeywords = {

    "국어": [
        "국어",
        "문학",
        "비문학",
        "시",
        "소설",
        "수필",
        "문법",
        "화법",
        "작문",
        "독서",
        "현대시",
        "고전시가",
        "고전소설"
    ],

    "수학": [
        "수학",
        "방정식",
        "함수",
        "미분",
        "적분",
        "확률",
        "통계",
        "기하",
        "도형",
        "행렬",
        "수열",
        "이차방정식",
        "미적분"
    ],

    "영어": [
        "영어",
        "영단어",
        "단어",
        "독해",
        "리스닝",
        "듣기",
        "영작",
        "본문",
        "해석",
        "영어문장",
        "동사",
        "명사"
    ],

    "과학": [
        "과학",
        "물리",
        "화학",
        "생명",
        "생명과학",
        "지구과학",
        "원자",
        "분자",
        "세포",
        "유전자",
        "에너지",
        "힘",
        "전기",
        "화학반응"
    ],

    "사회": [
        "사회",
        "경제",
        "정치",
        "법",
        "사회문화",
        "시장",
        "기업",
        "민주주의",
        "헌법",
        "선거",
        "국제사회"
    ],

    "역사": [
        "역사",
        "한국사",
        "세계사",
        "조선",
        "고려",
        "삼국",
        "일제강점기",
        "광복",
        "독립운동",
        "왕",
        "전쟁"
    ],

    "미술": [
        "미술",
        "그림",
        "드로잉",
        "색채",
        "색의 대비",
        "보색",
        "디자인",
        "회화",
        "조형",
        "미술사",
        "작품",
        "화가"
    ],

    "음악": [
        "음악",
        "노래",
        "리듬",
        "멜로디",
        "악보",
        "음표",
        "화음",
        "작곡",
        "가창",
        "악기"
    ],

    "체육": [
        "체육",
        "운동",
        "축구",
        "농구",
        "배구",
        "배드민턴",
        "체력",
        "스트레칭",
        "근력",
        "스포츠"
    ]

};


// =========================
// 과목 자동 분류
// =========================

function detectSubject(content) {

    const scores = {};


    for (const subject in subjectKeywords) {

        scores[subject] = 0;

        subjectKeywords[subject].forEach(keyword => {

            if (content.includes(keyword)) {

                scores[subject]++;

            }

        });

    }


    let bestSubject = "기타";
    let bestScore = 0;


    for (const subject in scores) {

        if (scores[subject] > bestScore) {

            bestScore = scores[subject];

            bestSubject = subject;

        }

    }


    return bestSubject;
}


// =========================
// 입력 중 과목 미리보기
// =========================

reviewInput.addEventListener(
    "input",
    function () {

        const content =
            reviewInput.value.trim();


        if (content === "") {

            subjectResult.classList.add("hidden");

            return;

        }


        const subject =
            detectSubject(content);


        detectedSubject.textContent =
            subject;


        subjectResult.classList.remove(
            "hidden"
        );

    }
);


// =========================
// 복습 저장
// =========================

saveBtn.addEventListener(
    "click",
    function () {

        const content =
            reviewInput.value.trim();


        if (content === "") {

            alert("복습 내용을 입력해주세요.");

            reviewInput.focus();

            return;

        }


        const subject =
            detectSubject(content);


        const newReview = {

            id: Date.now(),

            content: content,

            subject: subject,

            date: new Date()
                .toLocaleDateString("ko-KR")

        };


        // 가장 최근 내용을 위로
        reviews.unshift(newReview);


        // 저장
        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );


        // 입력창 초기화
        reviewInput.value = "";

        subjectResult.classList.add(
            "hidden"
        );


        // 저장한 즉시 같은 페이지에 표시
        currentSubject = "전체";

        setActiveFilter("전체");

        displayReviews();


        // 복습 목록으로 부드럽게 이동
        reviewSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


// =========================
// Enter 키로 저장
// Shift + Enter = 줄바꿈
// =========================

reviewInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            saveBtn.click();

        }

    }
);


// =========================
// 복습 표시
// =========================

function displayReviews() {

    reviewList.innerHTML = "";


    let filteredReviews;


    if (currentSubject === "전체") {

        filteredReviews = reviews;

    } else {

        filteredReviews =
            reviews.filter(
                review =>
                    review.subject ===
                    currentSubject
            );

    }


    // 복습이 없을 때
    if (filteredReviews.length === 0) {

        reviewList.innerHTML = `

            <div class="empty">
                아직 저장된 복습이 없습니다.
            </div>

        `;

        reviewSection.classList.remove(
            "hidden"
        );

        return;
    }


    filteredReviews.forEach(
        review => {

            const card =
                document.createElement("div");


            card.className =
                "review-card";


            card.innerHTML = `

                <div class="review-top">

                    <span class="subject-tag">
                        ${escapeHTML(review.subject)}
                    </span>

                    <span class="review-date">
                        ${escapeHTML(review.date)}
                    </span>

                </div>


                <div class="review-content">
                    ${escapeHTML(review.content)}
                </div>


                <button
                    class="delete-button"
                    onclick="deleteReview(${review.id})"
                >
                    삭제
                </button>

            `;


            reviewList.appendChild(card);

        }
    );


    reviewSection.classList.remove(
        "hidden"
    );

}


// =========================
// 과목 필터
// =========================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                currentSubject =
                    this.dataset.subject;


                setActiveFilter(
                    currentSubject
                );


                displayReviews();

            }
        );

    }
);


// =========================
// 선택된 필터 표시
// =========================

function setActiveFilter(subject) {

    filterButtons.forEach(
        button => {

            if (
                button.dataset.subject ===
                subject
            ) {

                button.classList.add(
                    "active"
                );

            } else {

                button.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =========================
// 전체보기 버튼
// =========================

allBtn.addEventListener(
    "click",
    function () {

        currentSubject = "전체";

        setActiveFilter("전체");

        displayReviews();

    }
);


// =========================
// 복습 삭제
// =========================

function deleteReview(id) {

    const check =
        confirm("이 복습을 삭제할까요?");


    if (!check) {
        return;
    }


    reviews =
        reviews.filter(
            review =>
                review.id !== id
        );


    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );


    displayReviews();

}


// =========================
// HTML 문자 처리
// =========================

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =========================
// 처음 실행
// =========================

if (reviews.length > 0) {

    displayReviews();

}