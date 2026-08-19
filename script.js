body { font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f8f6fc; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; color: #333; padding: 10px; box-sizing: border-box; }
.game-container { display: flex; flex-direction: column; align-items: center; background: #fff; padding: 20px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); width: 100%; max-width: 460px; box-sizing: border-box; }
h1 { margin: 0 0 5px 0; color: #4a2e5d; font-size: 26px; }
p { margin: 0 0 15px 0; font-size: 13px; color: #666; text-align: center; }
.stats-bar { display: flex; gap: 20px; background: #fcf8fd; padding: 8px 16px; border-radius: 20px; margin-bottom: 15px; font-weight: bold; font-size: 13px; }
.difficulty-tabs { display: flex; background: #f3ecf5; border-radius: 8px; padding: 3px; margin-bottom: 15px; width: 100%; box-sizing: border-box; }
.tab { flex: 1; border: none; background: transparent; padding: 8px; font-weight: bold; cursor: pointer; border-radius: 6px; color: #666; font-size: 13px; transition: all 0.2s; }
.tab.active { background: #fff; color: #4a2e5d; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.main-layout { display: flex; gap: 15px; margin-bottom: 15px; width: 100%; justify-content: center; align-items: stretch; }
#board { display: grid; grid-template-columns: repeat(9, 36px); grid-template-rows: repeat(9, 36px); background: #4a2e5d; border: 2px solid #4a2e5d; gap: 1px; }
.cell { background: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; color: #333; cursor: pointer; border: none; outline: none; text-align: center; width: 36px; height: 36px; padding: 0; user-select: none; }
.cell:nth-child(3n) { border-right: 2px solid #4a2e5d; }
.cell:nth-child(9n) { border-right: none; }
.cell.preset { background: #fcf8fd; color: #4a2e5d; }
.cell.selected { background: #e8d7ef !important; outline: 2px solid #4a2e5d; z-index: 2; }
.cell.error { color: #d32f2f; background: #ffebee; }
.sidebar { width: 130px; border: 2px dashed #e8d7ef; border-radius: 12px; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; background: #faf4fc; box-sizing: border-box; }
.sidebar-widget { display: flex; flex-direction: column; gap: 6px; width: 100%; }
.tool-btn { background: #f3ecf5; border: none; padding: 6px; border-radius: 6px; font-size: 11px; font-weight: bold; color: #4a2e5d; cursor: pointer; width: 100%; transition: background 0.2s; }
.tool-btn:hover { background: #e8d7ef; }
.ad-tag { font-size: 11px; font-weight: bold; color: #4a2e5d; display: block; margin-bottom: 4px; }
.ad-box { width: 100%; }
.ad-box p { font-size: 10px; color: #888; margin: 0; }
.numpad { display: flex; gap: 5px; margin-bottom: 15px; justify-content: center; width: 100%; flex-wrap: wrap; }
.num-btn { width: 34px; height: 34px; border-radius: 50%; border: none; background: #f3ecf5; color: #4a2e5d; font-weight: bold; cursor: pointer; font-size: 14px; transition: background 0.2s; }
.num-btn:hover { background: #e8d7ef; }
.clr-btn { font-size: 10px; width: 40px; border-radius: 14px; }
.footer-controls { display: flex; justify-content: space-between; width: 100%; align-items: center; box-sizing: border-box; }
#game-status { font-weight: bold; color: #2e7d32; font-size: 13px; }
#new-game { background: #4a2e5d; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 13px; transition: background 0.2s; }
#new-game:hover { background: #382246; }

@media (max-width: 500px) {
    .main-layout { flex-direction: column; align-items: center; }
    .sidebar { width: 100%; max-width: 326px; height: auto; flex-direction: row; justify-content: space-around; padding: 8px; }
    .sidebar-widget { width: 45%; }
    .ad-box { display: none; }
    #board { grid-template-columns: repeat(9, 32px); grid-template-rows: repeat(9, 32px); }
    .cell { width: 32px; height: 32px; font-size: 15px; }
}
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; z-index: 100; }
.modal-content { background: #fff; padding: 20px; border-radius: 12px; width: 90%; max-width: 300px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
.modal-content h3 { margin: 0; color: #4a2e5d; font-size: 18px; }
.modal-content p { margin: 0; font-size: 12px; color: #666; text-align: left; }
#feedback-text { width: 100%; height: 80px; border: 1px solid #e8d7ef; border-radius: 6px; padding: 8px; font-family: "Plus Jakarta Sans", sans-serif; font-size: 12px; box-sizing: border-box; resize: none; outline: none; }
#feedback-text:focus { border-color: #4a2e5d; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; }
.modal-actions .tool-btn { width: auto; padding: 6px 12px; }
.primary-tool { background: #4a2e5d !important; color: #fff !important; }
