let showCorrectAnswer = document.getElementById('showCorrectAnswer');
let contentQuestions = document.getElementById('contentQuestions');
let buttonsAnswerHide  = document.getElementById('buttonsAnswerHide');
let hidden  = document.getElementById('hidden');

if (showCorrectAnswer) {
    showCorrectAnswer.addEventListener('click', function (e) {
        e.preventDefault();

        contentQuestions.parentNode.classList.toggle('content-questions__heading--active')
    });
}

if (buttonsAnswerHide) {
    buttonsAnswerHide.addEventListener('click', function (e) {
        e.preventDefault();

        hidden.classList.toggle('visually-hidden');
    });
}
