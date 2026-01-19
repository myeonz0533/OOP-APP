// Application Logic
let currentSubject = 'oops'; // 'oops' or 'linux'
let currentTopicIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let correctAnswers = 0;
let quizQuestions = [];
let selectedAnswer = null;
let quizStarted = false;
let currentQuizType = 'oops'; // 'oops' or 'linux'

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if data is loaded
    if (typeof appData === 'undefined') {
        console.error('appData is not defined. Make sure data.js is loaded before app.js');
        return;
    }
    
    setupThemeToggle();
    setupSidebarToggle();
    setupTabSwitching();
    setupModeSwitching();
    setupReadingMode();
    setupQuizMode();
    loadTopic(0);
    updateTopicList();
    resetQuizDisplay();
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.textContent = '☀️';
    } else {
        iconElement.textContent = '🌙';
    }
}

// Sidebar Toggle
function setupSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
}

// Tab Switching (OOP vs Linux)
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current subject
            currentSubject = tab;
            currentTopicIndex = 0;
            
            // Reload topics
            loadTopic(0);
            updateTopicList();
        });
    });
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
            modeContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = ''; // Reset display style
            });
            
            const targetMode = document.getElementById(`${mode}-mode`);
            if (targetMode) {
                targetMode.classList.add('active');
                targetMode.style.display = 'block';
            }
            
            // Initialize quiz mode if switching to it
            if (mode === 'quiz' && !quizStarted) {
                resetQuizDisplay();
            }
            
            // Ensure reading mode is properly displayed if switching to it
            if (mode === 'read') {
                ensureReadingModeVisible();
            }
        });
    });
}

function resetQuizDisplay() {
    // Reset quiz display to initial state
    const quizCard = document.getElementById('quiz-card');
    const quizSettings = document.querySelector('.quiz-settings');
    
    if (quizCard) {
        quizCard.style.display = 'none';
    }
    if (quizSettings) {
        quizSettings.style.display = 'block';
    }
    
    // Reset stats display
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('question-number').textContent = '1';
    document.getElementById('total-questions').textContent = '0';
    document.getElementById('correct-count').textContent = '0';
}

// Reading Mode Functions
function setupReadingMode() {
    document.getElementById('prev-topic').addEventListener('click', () => {
        const currentData = appData[currentSubject];
        if (currentTopicIndex > 0) {
            currentTopicIndex--;
            loadTopic(currentTopicIndex);
        }
    });

    document.getElementById('next-topic').addEventListener('click', () => {
        const currentData = appData[currentSubject];
        if (currentData && currentTopicIndex < currentData.topics.length - 1) {
            currentTopicIndex++;
            loadTopic(currentTopicIndex);
        }
    });
}

function loadTopic(index) {
    const currentData = appData[currentSubject];
    if (!currentData || index < 0 || index >= currentData.topics.length) return;
    
    currentTopicIndex = index;
    const topic = currentData.topics[index];
    
    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-content').innerHTML = formatContent(topic.content);
    document.getElementById('current-topic-num').textContent = index + 1;
    document.getElementById('total-topics').textContent = currentData.topics.length;
    
    // Update navigation buttons
    document.getElementById('prev-topic').disabled = index === 0;
    document.getElementById('next-topic').disabled = index === currentData.topics.length - 1;
    
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
    
    const currentData = appData[currentSubject];
    if (!currentData) return;
    
    currentData.topics.forEach((topic, index) => {
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
    // Quiz type selector
    const quizTypeButtons = document.querySelectorAll('.quiz-type-btn');
    quizTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quizType = this.getAttribute('data-quiz-type');
            quizTypeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentQuizType = quizType;
        });
    });
    
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);
    
    // Stop quiz button - will be created dynamically
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'stop-quiz-btn') {
            stopQuiz();
        }
    });
}

function startQuiz() {
    // Get questions based on selected quiz type
    const quizData = appData[currentQuizType];
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
        alert('No questions available. Please check the data file.');
        return;
    }
    
    quizStarted = true;
    quizScore = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    
    // Get all questions - ensure no duplicates by using Set
    const uniqueQuestions = [];
    const seenQuestions = new Set();
    
    for (const question of quizData.questions) {
        const questionKey = question.question.toLowerCase().trim();
        if (!seenQuestions.has(questionKey)) {
            seenQuestions.add(questionKey);
            uniqueQuestions.push(question);
        }
    }
    
    quizQuestions = [...uniqueQuestions];
    
    // Randomize if option is checked
    if (document.getElementById('randomize-questions').checked) {
        quizQuestions = shuffleArray(quizQuestions);
    }
    
    // Hide settings, show quiz
    document.querySelector('.quiz-settings').style.display = 'none';
    const quizCard = document.getElementById('quiz-card');
    quizCard.style.display = 'block';
    
    // Show stop quiz button
    const stopQuizBtn = document.getElementById('stop-quiz-btn');
    if (stopQuizBtn) {
        stopQuizBtn.style.display = 'block';
    }
    
    // Make sure quiz card has the right structure
    if (!document.getElementById('quiz-question')) {
        quizCard.innerHTML = `
            <div class="quiz-top-controls">
                <button id="stop-quiz-btn" class="quiz-btn stop-btn">⏹️ Stop Quiz</button>
            </div>
            <div id="quiz-question" class="quiz-question"></div>
            <div id="quiz-options" class="quiz-options"></div>
            <div id="quiz-feedback" class="quiz-feedback"></div>
            <div class="quiz-controls">
                <button id="next-question-btn" class="quiz-btn" style="display: none;">Next Question →</button>
                <button id="restart-quiz-btn" class="quiz-btn" style="display: none;">🔄 Restart Quiz</button>
            </div>
        `;
        // Re-attach event listeners
        document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
        document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);
        document.getElementById('stop-quiz-btn').addEventListener('click', stopQuiz);
    }
    
    loadQuestion();
}

function stopQuiz() {
    if (confirm('Are you sure you want to stop the quiz? Your progress will be lost.')) {
        restartQuiz();
    }
}

function loadQuestion() {
    if (!quizQuestions || quizQuestions.length === 0) {
        console.error('No questions available');
        return;
    }
    
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    if (!question || !question.options) {
        console.error('Invalid question data:', question);
        return;
    }
    
    selectedAnswer = null;
    
    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    
    if (!questionElement || !optionsContainer) {
        console.error('Quiz elements not found');
        return;
    }
    
    questionElement.innerHTML = `<p>${question.question}</p>`;
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizQuestions.length;
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('correct-count').textContent = correctAnswers;
    
    // Clear previous options
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
    const feedbackElement = document.getElementById('quiz-feedback');
    if (feedbackElement) {
        feedbackElement.classList.remove('show');
    }
    const nextBtn = document.getElementById('next-question-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');
    if (nextBtn) nextBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'none';
    
    // Ensure stop quiz button is visible
    const stopQuizBtn = document.getElementById('stop-quiz-btn');
    if (stopQuizBtn && quizStarted) {
        stopQuizBtn.style.display = 'block';
    }
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
    
    // Check if correct (2 points per item)
    if (index === question.correctAnswer) {
        options[index].classList.add('correct');
        quizScore += 2;
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
    const totalPossibleScore = quizQuestions.length * 2; // 2 points per question
    const percentage = Math.round((quizScore / totalPossibleScore) * 100);
    const quizCard = document.querySelector('.quiz-card');
    
    // Hide stop quiz button when quiz is complete
    const stopQuizBtn = document.getElementById('stop-quiz-btn');
    if (stopQuizBtn) {
        stopQuizBtn.style.display = 'none';
    }
    
    quizCard.innerHTML = `
        <div class="quiz-top-controls">
            <button id="stop-quiz-btn" class="quiz-btn stop-btn" style="display: none;">⏹️ Stop Quiz</button>
        </div>
        <div style="text-align: center; padding: 40px;">
            <h2 style="color: var(--primary-purple); margin-bottom: 20px; font-size: 2.5em;">Quiz Complete! 🎉</h2>
            <div style="font-size: 1.5em; margin-bottom: 30px;">
                <p style="margin-bottom: 15px;"><strong>Score:</strong> <span style="color: var(--primary-purple);">${quizScore}</span> / ${totalPossibleScore}</p>
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
    quizScore = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    quizQuestions = [];
    
    // Show settings, hide quiz card
    const quizSettings = document.querySelector('.quiz-settings');
    const quizCard = document.getElementById('quiz-card');
    
    if (quizSettings) {
        quizSettings.style.display = 'block';
    }
    if (quizCard) {
        quizCard.style.display = 'none';
        // Reset quiz card content to initial state
        quizCard.innerHTML = `
            <div class="quiz-top-controls">
                <button id="stop-quiz-btn" class="quiz-btn stop-btn" style="display: none;">⏹️ Stop Quiz</button>
            </div>
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
        // Re-attach event listeners
        document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
        document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);
        const stopBtn = document.getElementById('stop-quiz-btn');
        if (stopBtn) {
            stopBtn.addEventListener('click', stopQuiz);
        }
    }
    
    // Hide stop quiz button
    const stopQuizBtn = document.getElementById('stop-quiz-btn');
    if (stopQuizBtn) {
        stopQuizBtn.style.display = 'none';
    }
    
    // Reset stats
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('question-number').textContent = '1';
    document.getElementById('total-questions').textContent = '0';
    document.getElementById('correct-count').textContent = '0';
    
    // Ensure reading mode is visible if user switches to it
    ensureReadingModeVisible();
}

function ensureReadingModeVisible() {
    // Make sure reading mode content is visible
    const readingMode = document.getElementById('reading-mode');
    const sidebar = document.querySelector('.sidebar');
    
    if (readingMode) {
        // Ensure reading mode has active class and is visible
        readingMode.classList.add('active');
        readingMode.style.display = 'block';
    }
    
    if (sidebar) {
        // Ensure sidebar is visible (not collapsed)
        sidebar.classList.remove('collapsed');
        sidebar.style.display = '';
    }
    
    // Reload current topic to ensure content is displayed
    const currentData = appData[currentSubject];
    if (currentData && currentData.topics.length > 0) {
        // Make sure we have a valid topic index
        if (currentTopicIndex >= currentData.topics.length) {
            currentTopicIndex = 0;
        }
        loadTopic(currentTopicIndex);
        updateTopicList();
    }
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
