// ===== STATE MANAGEMENT =====
const STORAGE_KEY = 'marketcode_progress';

function loadProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) return JSON.parse(data);
    } catch (e) {
        console.error('Failed to load progress:', e);
    }
    return { solved: {}, activity: [], streak: 0, lastActiveDate: null, totalPoints: 0 };
}

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        saveProgressToFile();
    } catch (e) {
        console.error('Failed to save progress:', e);
    }
}

function saveProgressToFile() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.getElementById('download-link');
    if (link) {
        link.href = url;
    }
}

let state = loadProgress();
let currentProblem = null;

// ===== STREAK MANAGEMENT =====
function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastActiveDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (state.lastActiveDate === yesterday) {
        state.streak += 1;
    } else if (state.lastActiveDate !== today) {
        state.streak = 1;
    }
    state.lastActiveDate = today;
    saveProgress();
}

// ===== NAVIGATION =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        switchView(view);
    });
});

function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    document.getElementById(`view-${viewName}`).classList.add('active');
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

    if (viewName === 'dashboard') renderDashboard();
    if (viewName === 'problems') renderProblems();
    if (viewName === 'progress') renderProgress();
}

// ===== DASHBOARD =====
function renderDashboard() {
    const solvedCount = Object.keys(state.solved).length;
    const totalPoints = state.totalPoints || 0;

    document.getElementById('stat-solved').textContent = solvedCount;
    document.getElementById('stat-points').textContent = totalPoints;
    document.getElementById('stat-streak').textContent = state.streak;
    document.getElementById('total-points').textContent = totalPoints;
    document.getElementById('streak-count').textContent = state.streak;

    renderCategories();
    renderRecentActivity();
}

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const exercises = EXERCISES.filter(e => e.category === cat.id);
        const solved = exercises.filter(e => state.solved[e.id]).length;
        const total = exercises.length;
        const percent = total > 0 ? Math.round((solved / total) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.setProperty('--card-accent', cat.color);
        card.onclick = () => {
            switchView('problems');
            setFilter(cat.id);
        };

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon" style="background: ${cat.color}20">${cat.icon}</div>
                <span class="card-count">${solved}/${total} solved</span>
            </div>
            <div class="card-title">${cat.name}</div>
            <div class="card-description">${cat.description}</div>
            <div class="card-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%; background: ${cat.color}"></div>
                </div>
                <span class="progress-text">${percent}%</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderRecentActivity() {
    const container = document.getElementById('recent-activity');
    if (!state.activity || state.activity.length === 0) {
        container.innerHTML = '<p class="empty-state">No activity yet. Start solving problems!</p>';
        return;
    }

    const recent = state.activity.slice(-10).reverse();
    container.innerHTML = recent.map(a => {
        const exercise = EXERCISES.find(e => e.id === a.exerciseId);
        const timeAgo = getTimeAgo(a.timestamp);
        return `
            <div class="activity-item">
                <div class="activity-icon">&#10003;</div>
                <div class="activity-text">
                    Solved <strong>${exercise ? exercise.title : 'Unknown'}</strong> — earned ${a.points} pts
                </div>
                <div class="activity-time">${timeAgo}</div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(timestamp) {
    const diff = Date.now() - new Date(timestamp).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
}

// ===== PROBLEMS LIST =====
let activeFilter = 'all';

function setFilter(filterId) {
    activeFilter = filterId;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filterId);
    });
    renderProblems();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

function renderProblems() {
    const list = document.getElementById('problems-list');
    const filtered = activeFilter === 'all'
        ? EXERCISES
        : EXERCISES.filter(e => e.category === activeFilter);

    list.innerHTML = filtered.map(ex => {
        const isSolved = !!state.solved[ex.id];
        const cat = CATEGORIES.find(c => c.id === ex.category);
        const diffClass = `difficulty-${ex.difficulty}`;

        return `
            <div class="table-row" onclick="openProblem(${ex.id})">
                <span class="col-status">
                    <span class="status-icon ${isSolved ? 'solved' : 'unsolved'}">
                        ${isSolved ? '&#10003;' : ''}
                    </span>
                </span>
                <span class="col-title">${ex.id}. ${ex.title}</span>
                <span class="col-category">${cat ? cat.name : ''}</span>
                <span class="col-difficulty ${diffClass}">${capitalize(ex.difficulty)}</span>
                <span class="col-points">${ex.points} pts</span>
            </div>
        `;
    }).join('');

    // Update nav stats
    document.getElementById('total-points').textContent = state.totalPoints || 0;
    document.getElementById('streak-count').textContent = state.streak;
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===== PROBLEM MODAL =====
function openProblem(id) {
    const ex = EXERCISES.find(e => e.id === id);
    if (!ex) return;
    currentProblem = ex;

    const cat = CATEGORIES.find(c => c.id === ex.category);
    const diffClass = ex.difficulty;

    document.getElementById('modal-problem-number').textContent = `Problem #${ex.id}`;
    document.getElementById('modal-title').textContent = ex.title;
    document.getElementById('modal-category').textContent = cat ? cat.name : '';
    document.getElementById('modal-difficulty').textContent = capitalize(ex.difficulty);
    document.getElementById('modal-difficulty').className = `modal-difficulty ${diffClass}`;
    document.getElementById('modal-points').textContent = `${ex.points} pts`;
    document.getElementById('modal-description').textContent = ex.description;
    document.getElementById('modal-prompt').textContent = ex.prompt;

    // Hints
    const hintsSection = document.getElementById('modal-hints-section');
    const hintsList = document.getElementById('modal-hints');
    hintsSection.style.display = 'none';
    hintsList.innerHTML = ex.hints.map(h => `<li>${h}</li>`).join('');

    // Reset state
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('already-solved').style.display = 'none';
    document.getElementById('answer-input').disabled = false;
    document.getElementById('btn-submit').disabled = false;
    document.getElementById('btn-hint').style.display = '';

    // Check if already solved
    if (state.solved[ex.id]) {
        document.getElementById('already-solved').style.display = 'block';
        document.getElementById('saved-answer').textContent = state.solved[ex.id].answer;
        document.getElementById('answer-input').value = state.solved[ex.id].answer;
        document.getElementById('answer-input').disabled = true;
        document.getElementById('btn-submit').disabled = true;
    }

    document.getElementById('problem-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('problem-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('problem-modal')) closeModal();
});

function closeModal() {
    document.getElementById('problem-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentProblem = null;
}

// ===== HINTS =====
document.getElementById('btn-hint').addEventListener('click', () => {
    const hintsSection = document.getElementById('modal-hints-section');
    hintsSection.style.display = hintsSection.style.display === 'none' ? 'block' : 'none';
});

// ===== ANSWER CHECKING =====
document.getElementById('btn-submit').addEventListener('click', submitAnswer);

function submitAnswer() {
    if (!currentProblem) return;

    const answer = document.getElementById('answer-input').value.trim();
    if (answer.length < 30) {
        showFeedback('fail', 'Answer Too Short', 'Please provide a more detailed answer (at least 30 characters).', [], 0);
        return;
    }

    const result = evaluateAnswer(answer, currentProblem);
    const totalCriteria = currentProblem.criteria.length;
    const metCriteria = result.met.length;
    const ratio = metCriteria / totalCriteria;

    let status, title, message;
    let earnedPoints = 0;

    if (ratio >= 0.7) {
        status = 'pass';
        title = 'Accepted!';
        message = 'Great job! Your answer covers the key aspects of this exercise.';
        earnedPoints = currentProblem.points;
    } else if (ratio >= 0.4) {
        status = 'partial';
        title = 'Partial Credit';
        message = 'Good attempt, but your answer is missing some important elements. Review the criteria below and try again.';
        earnedPoints = Math.round(currentProblem.points * 0.4);
    } else {
        status = 'fail';
        title = 'Needs Improvement';
        message = 'Your answer does not cover enough key criteria. Review the hints and sample answer structure, then try again.';
        earnedPoints = 0;
    }

    const criteriaHTML = currentProblem.criteria.map(c => {
        const isMet = result.met.includes(c.label);
        return `<div class="criteria-item ${isMet ? 'met' : 'unmet'}">
            ${isMet ? '&#10003;' : '&#10007;'} ${c.label}
        </div>`;
    }).join('');

    showFeedback(status, title, message, criteriaHTML, earnedPoints);

    // Save if passed or partial (only save the best score)
    if (ratio >= 0.4) {
        const previousPoints = state.solved[currentProblem.id]?.points || 0;
        if (earnedPoints > previousPoints) {
            state.totalPoints = (state.totalPoints || 0) - previousPoints + earnedPoints;
            state.solved[currentProblem.id] = {
                answer: answer,
                points: earnedPoints,
                solvedAt: new Date().toISOString(),
                ratio: ratio
            };
            state.activity = state.activity || [];
            state.activity.push({
                exerciseId: currentProblem.id,
                points: earnedPoints,
                timestamp: new Date().toISOString()
            });
            updateStreak();
            saveProgress();

            // Disable re-submission on full pass
            if (ratio >= 0.7) {
                document.getElementById('answer-input').disabled = true;
                document.getElementById('btn-submit').disabled = true;
            }
        }
    }
}

function evaluateAnswer(answer, problem) {
    const lowerAnswer = answer.toLowerCase();
    const met = [];
    const unmet = [];

    problem.criteria.forEach(c => {
        const keywords = c.keyword.split('|');
        const found = keywords.some(kw => {
            const regex = new RegExp(kw.replace(/\./g, '[\\s\\-_.]?'), 'i');
            return regex.test(lowerAnswer);
        });
        if (found) {
            met.push(c.label);
        } else {
            unmet.push(c.label);
        }
    });

    return { met, unmet };
}

function showFeedback(status, title, message, criteriaHTML, points) {
    const section = document.getElementById('feedback-section');
    const header = document.getElementById('feedback-header');
    const body = document.getElementById('feedback-body');
    const criteria = document.getElementById('feedback-criteria');
    const pts = document.getElementById('feedback-points');

    header.className = `feedback-header ${status}`;
    header.textContent = title;
    body.textContent = message;
    criteria.innerHTML = typeof criteriaHTML === 'string' ? criteriaHTML : '';
    pts.textContent = `+${points}`;

    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== PROGRESS VIEW =====
function renderProgress() {
    const solvedCount = Object.keys(state.solved).length;
    const totalCount = EXERCISES.length;
    const percent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

    // Ring
    document.getElementById('progress-percent').textContent = `${percent}%`;
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percent / 100) * circumference;
    document.getElementById('progress-ring-fill').style.strokeDashoffset = offset;

    // Category progress
    const catContainer = document.getElementById('progress-categories');
    catContainer.innerHTML = CATEGORIES.map(cat => {
        const exercises = EXERCISES.filter(e => e.category === cat.id);
        const solved = exercises.filter(e => state.solved[e.id]).length;
        const total = exercises.length;
        const catPercent = total > 0 ? Math.round((solved / total) * 100) : 0;
        const catPoints = exercises.reduce((sum, e) => sum + (state.solved[e.id]?.points || 0), 0);
        const maxPoints = exercises.reduce((sum, e) => sum + e.points, 0);

        return `
            <div class="progress-cat-card">
                <div class="progress-cat-header">
                    <span class="progress-cat-name">${cat.icon} ${cat.name}</span>
                    <span class="progress-cat-score">${catPoints}/${maxPoints} pts</span>
                </div>
                <div class="progress-cat-bar">
                    <div class="progress-cat-fill" style="width: ${catPercent}%; background: ${cat.color}"></div>
                </div>
                <div class="progress-cat-detail">${solved}/${total} problems solved</div>
            </div>
        `;
    }).join('');

    // Points history
    const historyContainer = document.getElementById('points-history');
    if (!state.activity || state.activity.length === 0) {
        historyContainer.innerHTML = '<p class="empty-state">No points earned yet. Start solving!</p>';
    } else {
        const sortedActivity = [...state.activity].reverse();
        historyContainer.innerHTML = sortedActivity.map(a => {
            const ex = EXERCISES.find(e => e.id === a.exerciseId);
            const date = new Date(a.timestamp).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            });
            return `
                <div class="history-item">
                    <span class="history-problem">${ex ? ex.title : 'Unknown'}</span>
                    <div class="history-meta">
                        <span class="history-points">+${a.points} pts</span>
                        <span class="history-date">${date}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update nav stats
    document.getElementById('total-points').textContent = state.totalPoints || 0;
    document.getElementById('streak-count').textContent = state.streak;
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== EXPORT / IMPORT PROGRESS =====
function exportProgress() {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'marketcode_progress.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.solved && typeof data.solved === 'object') {
                state = data;
                saveProgress();
                renderDashboard();
                alert('Progress imported successfully!');
            } else {
                alert('Invalid progress file format.');
            }
        } catch (err) {
            alert('Failed to parse progress file.');
        }
    };
    reader.readAsText(file);
}

// ===== INITIALIZE =====
function init() {
    // Check streak on load
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (state.lastActiveDate && state.lastActiveDate !== today && state.lastActiveDate !== yesterday) {
        state.streak = 0;
        saveProgress();
    }

    renderDashboard();
}

init();
