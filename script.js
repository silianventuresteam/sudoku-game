document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const timerDisplay = document.getElementById("timer");
    const streakDisplay = document.getElementById("streak");
    const statusDisplay = document.getElementById("game-status");
    const newGameBtn = document.getElementById("new-game");
    const hintBtn = document.getElementById("hint-btn");
    const undoBtn = document.getElementById("undo-btn");
    const tabs = document.querySelectorAll(".tab");
    const numBtns = document.querySelectorAll(".num-btn");

    let timer = 0;
    let timerInterval = null;
    let streak = 0;
    let selectedCell = null;
    let currentDifficulty = "easy";
    let moveHistory = [];

    // Valid puzzles with solution mapping
    const gameData = {
        easy: {
            puzzle: "530070000600195000098000060800060003400803001700020006060002800004190050000080079",
            solution: "534678912672195348198342567859761423426853791713924856961537284287419635345286179"
        },
        medium: {
            puzzle: "000700000100000000000430200000000000000000000000000000000000000000000000000000000",
            solution: "236794185154826973978435216397651842512348769846279351783162495625983571461527938"
        },
        hard: {
            puzzle: "000000000000003085001020000000507000004000100090000000500000073002010000000040009",
            solution: "987654321246193785351827469618537942724968153293415678569271834432716599157349269"
        }
    };

    function startTimer() {
        clearInterval(timerInterval);
        timer = 0;
        timerInterval = setInterval(() => {
            timer++;
            let mins = Math.floor(timer / 60).toString().padStart(2, '0');
            let secs = (timer % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `⏱️ ${mins}:${secs}`;
        }, 1000);
    }

    function loadBoard(diff) {
        board.innerHTML = "";
        selectedCell = null;
        moveHistory = [];
        statusDisplay.textContent = "Game On!";
        statusDisplay.style.color = "#2e7d32";
        startTimer();

        const data = gameData[diff] || gameData.easy;
        const puzzleStr = data.puzzle;

        for (let i = 0; i < 81; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            const val = puzzleStr[i];
            cell.dataset.index = i;
            cell.dataset.solution = data.solution[i];

            if (val !== "0") {
                cell.textContent = val;
                cell.classList.add("preset");
            } else {
                cell.addEventListener("click", () => {
                    document.querySelectorAll(".cell").forEach(c => c.classList.remove("selected"));
                    selectedCell = cell;
                    cell.classList.add("selected");
                });
            }
            board.appendChild(cell);
        }
    }

    function checkWinCondition() {
        const cells = document.querySelectorAll(".cell");
        let complete = true;
        let correct = true;

        cells.forEach(cell => {
            if (!cell.textContent) {
                complete = false;
            } else if (cell.textContent !== cell.dataset.solution) {
                correct = false;
            }
        });

        if (complete) {
            clearInterval(timerInterval);
            if (correct) {
                statusDisplay.textContent = "Solved Successfully! 🎉";
                statusDisplay.style.color = "#2e7d32";
                streak++;
                streakDisplay.textContent = `🔥 Streak: ${streak}`;
            } else {
                statusDisplay.textContent = "Contains errors. Check highlighted cells.";
                statusDisplay.style.color = "#d32f2f";
            }
        }
    }

    numBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (!selectedCell || selectedCell.classList.contains("preset")) return;
            const oldValue = selectedCell.textContent;
            
            if (btn.classList.contains("clr-btn")) {
                selectedCell.textContent = "";
                selectedCell.classList.remove("error");
                moveHistory.push({ cell: selectedCell, val: oldValue });
            } else {
                const num = btn.textContent;
                selectedCell.textContent = num;
                moveHistory.push({ cell: selectedCell, val: oldValue });

                if (num !== selectedCell.dataset.solution) {
                    selectedCell.classList.add("error");
                } else {
                    selectedCell.classList.remove("error");
                }
            }
            checkWinCondition();
        });
    });

    undoBtn.addEventListener("click", () => {
        if (moveHistory.length === 0) return;
        const lastMove = moveHistory.pop();
        lastMove.cell.textContent = lastMove.val;
        lastMove.cell.classList.remove("error");
        document.querySelectorAll(".cell").forEach(c => c.classList.remove("selected"));
        selectedCell = lastMove.cell;
        selectedCell.classList.add("selected");
    });

    hintBtn.addEventListener("click", () => {
        if (!selectedCell || selectedCell.classList.contains("preset")) {
            statusDisplay.textContent = "Select an empty cell first!";
            statusDisplay.style.color = "#d32f2f";
            return;
        }
        const correctVal = selectedCell.dataset.solution;
        const oldValue = selectedCell.textContent;
        selectedCell.textContent = correctVal;
        selectedCell.classList.remove("error");
        moveHistory.push({ cell: selectedCell, val: oldValue });
        statusDisplay.textContent = "Hint applied!";
        statusDisplay.style.color = "#4a2e5d";
        checkWinCondition();
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentDifficulty = tab.getAttribute("data-diff");
            loadBoard(currentDifficulty);
        });
    });

    newGameBtn.addEventListener("click", () => {
        loadBoard(currentDifficulty);
    });

    loadBoard(currentDifficulty);

    // Feedback feature logic
    const feedbackBtn = document.getElementById("feedback-btn");
    const feedbackModal = document.getElementById("feedback-modal");
    const feedbackCancel = document.getElementById("feedback-cancel");
    const feedbackSubmit = document.getElementById("feedback-submit");
    const feedbackText = document.getElementById("feedback-text");

    if (feedbackBtn) {
        feedbackBtn.addEventListener("click", () => {
            feedbackModal.style.display = "flex";
            feedbackText.value = "";
        });
    }

    if (feedbackCancel) {
        feedbackCancel.addEventListener("click", () => {
            feedbackModal.style.display = "none";
        });
    }

    if (feedbackSubmit) {
        feedbackSubmit.addEventListener("click", () => {
            const val = feedbackText.value.trim();
            if (val) {
                statusDisplay.textContent = "Thank you for your feedback! 🙏";
                statusDisplay.style.color = "#4a2e5d";
            }
            feedbackModal.style.display = "none";
        });
    }
});
