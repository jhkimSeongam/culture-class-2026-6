// HTML 요소 가져오기
const reviewInput = document.getElementById("reviewInput");
const saveBtn = document.getElementById("saveBtn");
const allBtn = document.getElementById("allBtn");
const reviewList = document.getElementById("reviewList");


// 저장된 복습 가져오기
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];


// -------------------------
// 복습 저장
// -------------------------

saveBtn.addEventListener("click", function () {

    const content = reviewInput.value.trim();

    // 아무것도 입력하지 않았을 때
    if (content === "") {
        alert("복습 내용을 입력해주세요!");
        return;
    }


    // 새로운 복습 만들기
    const newReview = {
        id: Date.now(),
        content: content,
        date: new Date().toLocaleString("ko-KR")
    };


    // 배열 맨 앞에 추가
    reviews.unshift(newReview);


    // 브라우저에 저장
    localStorage.setItem("reviews", JSON.stringify(reviews));


    // 입력창 비우기
    reviewInput.value = "";


    alert("복습이 저장되었습니다!");


    // 목록 업데이트
    displayReviews();

});


// -------------------------
// 전체보기
// -------------------------

allBtn.addEventListener("click", function () {

    if (reviewList.classList.contains("hidden")) {

        reviewList.classList.remove("hidden");

        displayReviews();

        allBtn.textContent = "닫기";

    } else {

        reviewList.classList.add("hidden");

        allBtn.textContent = "전체보기";

    }

});


// -------------------------
// 복습 목록 보여주기
// -------------------------

function displayReviews() {

    reviewList.innerHTML = "";

    // 복습이 없을 경우
    if (reviews.length === 0) {

        reviewList.innerHTML = `
            <div class="review-item">
                아직 저장된 복습이 없습니다.
            </div>
        `;

        return;
    }


    // 저장된 복습 하나씩 출력
    reviews.forEach(function (review) {

        const item = document.createElement("div");

        item.className = "review-item";


        item.innerHTML = `
            <div class="review-date">
                ${review.date}
            </div>

            <div class="review-content">
                ${escapeHTML(review.content)}
            </div>

            <button class="delete-button"
                    onclick="deleteReview(${review.id})">
                삭제
            </button>
        `;


        reviewList.appendChild(item);

    });

}


// -------------------------
// 복습 삭제
// -------------------------

function deleteReview(id) {

    reviews = reviews.filter(function (review) {
        return review.id !== id;
    });


    // 다시 저장
    localStorage.setItem("reviews", JSON.stringify(reviews));


    // 화면 갱신
    displayReviews();

}


// -------------------------
// HTML 문자 처리
// -------------------------

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}