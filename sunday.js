function checkGrade() {
    let numberObtain = document.getElementById("showGrade").value;
    let  grade;
     if (numberObtain >= 91) {
    grade = "A+";
  } else if (numberObtain >= 81) {
    grade = "A";
  } else if (numberObtain >= 71) {
    grade = "B+";
  } else if (numberObtain >= 61) {
    grade = "B" ;
  } else if (numberObtain >= 51) {
    grade = "C+";
  } else if (numberObtain >= 41) {
    grade = "C";
  } else {
    grade = "D";
  }
  document.getElementById("yourGrade").innerText =  grade;
}
