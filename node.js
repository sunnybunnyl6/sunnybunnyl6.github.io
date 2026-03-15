function addSettingsTile() {
    grid.addWidget({ w: 3, h: 2, content: `
        <div class="grid-stack-item-content settings-tile">
            <h3>🎨 Personalize</h3>
            <label>Tile Color:</label>
            <input type="color" id="global-tile-color" oninput="updateTileColors(this.value)">
            
            <label style="margin-top:10px; display:block;">Page Background:</label>
            <input type="color" id="bg-color" oninput="updatePageBg(this.value)">
        </div>` 
    });
}

function updateTileColors(color) {
    // Updates all existing tiles at once
    const tiles = document.querySelectorAll('.grid-stack-item-content');
    tiles.forEach(tile => tile.style.backgroundColor = color);
    localStorage.setItem('user-tile-color', color);
}

function updatePageBg(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('user-bg-color', color);
}

// On page load, retrieve and apply these saved colors
window.addEventListener('load', () => {
    const savedTileColor = localStorage.getItem('user-tile-color');
    const savedBgColor = localStorage.getItem('user-bg-color');
    if (savedTileColor) updateTileColors(savedTileColor);
    if (savedBgColor) updatePageBg(savedBgColor);
});
