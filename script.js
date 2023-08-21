document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");
  
    faqButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
    });
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
      question.addEventListener('click', function () {
        this.classList.toggle('open');
      });
    });
  });