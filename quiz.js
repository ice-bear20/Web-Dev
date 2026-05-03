// Wait until the page is fully loaded before running the quiz code
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const quizResults = document.getElementById("quizResults");
    const resetBtn = document.getElementById("resetBtn");

    // Correct answers for the quiz
    const correctAnswers = {
        q1: "hypertext",
        q2: "Tim Berners-Lee",
        q3: "HTML5",
        q4: "To describe the meaning and structure of content",
        q5: ["<p>", "<a>", "<h1>", "<!DOCTYPE html>"]
    };

    // Runs when the quiz is submitted
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let score = 0;
        const totalQuestions = 5;
        let output = "<h2>Quiz Results</h2>";

        // Question 1: Fill in the blank
        const q1 = document.getElementById("q1").value.trim().toLowerCase();
        const q1Correct = q1 === correctAnswers.q1;
        if (q1Correct) score++;
        output += `
            <p class="${q1Correct ? "correct" : "incorrect"}">
                <strong>Question 1:</strong> ${q1Correct ? "Correct" : "Incorrect"}<br>
                Your answer: ${q1 || "No answer"}<br>
                Correct answer: HyperText
            </p>
        `;

        // Question 2: Multiple choice
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q2Value = q2 ? q2.value : "No answer";
        const q2Correct = q2Value === correctAnswers.q2;
        if (q2Correct) score++;
        output += `
            <p class="${q2Correct ? "correct" : "incorrect"}">
                <strong>Question 2:</strong> ${q2Correct ? "Correct" : "Incorrect"}<br>
                Your answer: ${q2Value}<br>
                Correct answer: Tim Berners-Lee
            </p>
        `;

        // Question 3: Multiple choice
        const q3 = document.querySelector('input[name="q3"]:checked');
        const q3Value = q3 ? q3.value : "No answer";
        const q3Correct = q3Value === correctAnswers.q3;
        if (q3Correct) score++;
        output += `
            <p class="${q3Correct ? "correct" : "incorrect"}">
                <strong>Question 3:</strong> ${q3Correct ? "Correct" : "Incorrect"}<br>
                Your answer: ${q3Value}<br>
                Correct answer: HTML5
            </p>
        `;

        // Question 4: Multiple choice
        const q4 = document.querySelector('input[name="q4"]:checked');
        const q4Value = q4 ? q4.value : "No answer";
        const q4Correct = q4Value === correctAnswers.q4;
        if (q4Correct) score++;
        output += `
            <p class="${q4Correct ? "correct" : "incorrect"}">
                <strong>Question 4:</strong> ${q4Correct ? "Correct" : "Incorrect"}<br>
                Your answer: ${q4Value}<br>
                Correct answer: To describe the meaning and structure of content
            </p>
        `;

        // Question 5: Multi-selection
        const q5Selected = Array.from(document.querySelectorAll('input[name="q5"]:checked'))
            .map(item => item.value);

        const q5Normalized = q5Selected.slice().sort();
        const q5CorrectArray = correctAnswers.q5.slice().sort();

        const q5Correct = JSON.stringify(q5Normalized) === JSON.stringify(q5CorrectArray);
        if (q5Correct) score++;
        output += `
            <p class="${q5Correct ? "correct" : "incorrect"}">
                <strong>Question 5:</strong> ${q5Correct ? "Correct" : "Incorrect"}<br>
                Your answer: ${q5Selected.length ? q5Selected.join(", ") : "No answer"}<br>
                Correct answer: &lt;p&gt;, &lt;a&gt;, &lt;h1&gt;, &lt;!DOCTYPE html&gt;
            </p>
        `;

        // Overall score and pass/fail
        const percentage = (score / totalQuestions) * 100;
        const passed = percentage >= 70;

        output = `
            <p class="${passed ? "correct" : "incorrect"}">
                <strong>${passed ? "Pass" : "Fail"}</strong>
            </p>
            <p><strong>Total Score:</strong> ${score}/${totalQuestions} (${percentage.toFixed(0)}%)</p>
        ` + output;

        quizResults.innerHTML = output;
        quizResults.style.display = "block";
    });

    // Reset button clears the form and hides the results
    resetBtn.addEventListener("click", function () {
        quizResults.innerHTML = "";
        quizResults.style.display = "none";
    });
});