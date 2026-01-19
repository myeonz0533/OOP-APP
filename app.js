// Application Logic
let currentTopicIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let correctAnswers = 0;
let quizQuestions = [];
let selectedAnswer = null;
let quizStarted = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupModeSwitching();
    setupReadingMode();
    setupQuizMode();
    loadTopic(0);
    updateTopicList();
}

// Mode Switching
function setupModeSwitching() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    const modeContents = document.querySelectorAll('.mode-content');

    modeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            
            // Update buttons
            modeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update content
            modeContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${mode}-mode`).classList.add('active');
        });
    });
}

// Reading Mode Functions
function setupReadingMode() {
    document.getElementById('prev-topic').addEventListener('click', () => {
        if (currentTopicIndex > 0) {
            currentTopicIndex--;
            loadTopic(currentTopicIndex);
        }
    });

    document.getElementById('next-topic').addEventListener('click', () => {
        if (currentTopicIndex < oopsData.topics.length - 1) {
            currentTopicIndex++;
            loadTopic(currentTopicIndex);
        }
    });
}

function loadTopic(index) {
    if (index < 0 || index >= oopsData.topics.length) return;
    
    currentTopicIndex = index;
    const topic = oopsData.topics[index];
    
    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-content').innerHTML = formatContent(topic.content);
    document.getElementById('current-topic-num').textContent = index + 1;
    document.getElementById('total-topics').textContent = oopsData.topics.length;
    
    // Update navigation buttons
    document.getElementById('prev-topic').disabled = index === 0;
    document.getElementById('next-topic').disabled = index === oopsData.topics.length - 1;
    
    // Update topic list
    updateTopicList();
}

function formatContent(content) {
    if (typeof content === 'string') {
        // Convert line breaks to paragraphs
        return content.split('\n').filter(line => line.trim()).map(line => 
            `<p>${line.trim()}</p>`
        ).join('');
    } else if (Array.isArray(content)) {
        return content.map(item => {
            if (typeof item === 'string') {
                return `<p>${item}</p>`;
            } else if (item.type === 'list') {
                const listTag = item.ordered ? 'ol' : 'ul';
                const items = item.items.map(li => `<li>${li}</li>`).join('');
                return `<${listTag}>${items}</${listTag}>`;
            } else if (item.type === 'code') {
                return `<pre><code>${item.code}</code></pre>`;
            }
            return '';
        }).join('');
    }
    return '<p>No content available.</p>';
}

function updateTopicList() {
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = '';
    
    oopsData.topics.forEach((topic, index) => {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        if (index === currentTopicIndex) {
            topicItem.classList.add('active');
        }
        topicItem.textContent = topic.title;
        topicItem.addEventListener('click', () => {
            loadTopic(index);
        });
        topicList.appendChild(topicItem);
    });
}

// Quiz Mode Functions
function setupQuizMode() {
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);
}

function startQuiz() {
    quizStarted = true;
    quizScore = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    
    // Get all questions
    quizQuestions = [...oopsData.questions];
    
    // Randomize if option is checked
    if (document.getElementById('randomize-questions').checked) {
        quizQuestions = shuffleArray(quizQuestions);
    }
    
    // Hide settings, show quiz
    document.querySelector('.quiz-settings').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    document.getElementById('quiz-question').innerHTML = `<p>${question.question}</p>`;
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizQuestions.length;
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('correct-count').textContent = correctAnswers;
    
    // Clear previous options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionBtn);
    });
    
    // Hide feedback and next button
    document.getElementById('quiz-feedback').classList.remove('show');
    document.getElementById('next-question-btn').style.display = 'none';
    document.getElementById('restart-quiz-btn').style.display = 'none';
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = index;
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    const showExplanations = document.getElementById('show-explanations').checked;
    
    // Disable all options
    options.forEach(opt => opt.classList.add('disabled'));
    
    // Mark selected answer
    options[index].classList.add('selected');
    
    // Check if correct
    if (index === question.correctAnswer) {
        options[index].classList.add('correct');
        quizScore += 10;
        correctAnswers++;
        feedback.className = 'quiz-feedback correct show';
        feedback.innerHTML = `<strong>✓ Correct!</strong>${showExplanations && question.explanation ? '<br>' + question.explanation : ''}`;
    } else {
        options[index].classList.add('incorrect');
        options[question.correctAnswer].classList.add('correct');
        feedback.className = 'quiz-feedback incorrect show';
        feedback.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is: ${question.options[question.correctAnswer]}${showExplanations && question.explanation ? '<br>' + question.explanation : ''}`;
    }
    
    // Update stats
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('correct-count').textContent = correctAnswers;
    
    // Show next button or finish button
    if (currentQuestionIndex < quizQuestions.length - 1) {
        document.getElementById('next-question-btn').style.display = 'block';
    } else {
        document.getElementById('restart-quiz-btn').style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showQuizResults() {
    const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    const quizCard = document.querySelector('.quiz-card');
    
    quizCard.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <h2 style="color: var(--primary-purple); margin-bottom: 20px; font-size: 2.5em;">Quiz Complete! 🎉</h2>
            <div style="font-size: 1.5em; margin-bottom: 30px;">
                <p style="margin-bottom: 15px;"><strong>Score:</strong> <span style="color: var(--primary-purple);">${quizScore}</span></p>
                <p style="margin-bottom: 15px;"><strong>Correct Answers:</strong> <span style="color: var(--complementary-teal);">${correctAnswers}</span> / ${quizQuestions.length}</p>
                <p style="margin-bottom: 15px;"><strong>Percentage:</strong> <span style="color: var(--complementary-gold);">${percentage}%</span></p>
            </div>
            <button id="restart-quiz-btn" class="quiz-btn primary" style="margin-top: 20px;">🔄 Restart Quiz</button>
        </div>
    `;
    
    document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    quizStarted = false;
    document.querySelector('.quiz-settings').style.display = 'block';
    document.getElementById('quiz-card').innerHTML = `
        <div id="quiz-question" class="quiz-question">
            <p>Click "Start Quiz" to begin!</p>
        </div>
        <div id="quiz-options" class="quiz-options"></div>
        <div id="quiz-feedback" class="quiz-feedback"></div>
        <div class="quiz-controls">
            <button id="next-question-btn" class="quiz-btn" style="display: none;">Next Question →</button>
            <button id="restart-quiz-btn" class="quiz-btn" style="display: none;">🔄 Restart Quiz</button>
        </div>
    `;
    setupQuizMode();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
