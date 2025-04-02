// 카테고리 드롭다운 동작 추가
document.getElementById("inlineFormSelectPref").addEventListener("change", function () {
  const selectedCategory = this.value;
  console.log("선택한 카테고리:", selectedCategory);
});

// 현재 날짜와 시간을 업데이트하는 함수
function updateDateTime() {
  const now = new Date(); // 현재 시간 가져오기
  const formattedDateTime = now.toLocaleString('ko-KR', { hour12: false });
  document.getElementById('currentDateTime').innerText = formattedDateTime;
}

// 페이지 로드 시 실행 및 매초 업데이트
updateDateTime();
setInterval(updateDateTime, 1000);

// 다크모드 토글 기능 구현
const toggleButton = document.getElementById('darkModeToggle');

// 테마 설정 함수
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  // 버튼 아이콘 변경
  toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  // 현재 테마를 localStorage에 저장
  localStorage.setItem('theme', theme);
}

// 초기 설정
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

toggleButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  setTheme(currentTheme === "light" ? "dark" : "light");
});

// 제품 데이터
const product_data = [
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
];

// 제품 테이블에 데이터 추가
const product_data_Table = document.getElementById('product_data_Table');

// 초기 데이터 로딩
product_data.forEach((item) => {
  const row = product_data_Table.insertRow();
  row.insertCell(0).innerHTML = item.category;
  row.insertCell(1).innerHTML = item.brand;
  row.insertCell(2).innerHTML = item.product;
  row.insertCell(3).innerHTML = item.price;
});