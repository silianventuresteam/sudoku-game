document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const preset = [
        "030078910", "670053000", "098302007",
        "850610000", "426850001", "713904806",
        "060372000", "280410035", "30080179"
    ];
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.className = "cell";
            const rowStr = preset[r] || "";
            const val = rowStr[c] || "0";
            if (val !== "0") {
                input.value = val;
                input.readOnly = true;
                input.style.background = "#fcf8fd";
            }
            board.appendChild(input);
        }
    }
});