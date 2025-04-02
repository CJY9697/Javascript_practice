const form = document.getElementById("form")

form.addEventListener("submit",function(event){
  event.preventDefault() // 새로고침 차단
  
  let userID = event.target.id.value
  let userPw1 = event.target.pw1.value
  let userPw2 = event.target.pw2.value
  let userName = event.target.name.value
  let userPhone = event.target.phone.value
  let userPosition = event.target.position.value
  let userGender = event.target.gender.value
  let userEmail = event.target.email.value
  let userIntro = event.target.intro.value

  // ID 오류
  if(userID.length < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요")
    return
  }
  // Password 오류
  if(userPw1 !== userPw2){
    alert("비밀번호가 일치하지 않습니다.")
    return
  }
  // 회원가입 성공
  alert(`회원가입하셨습니다.\n${userID}님 환영합니다.`);
  location.href = "success.html";
  return true
})