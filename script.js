// Hàm xử lý chuyển đổi các Sub-Tab
function openSubTab(evt, tabId) {
    // Ẩn toàn bộ các panel nội dung
    document.querySelectorAll('.sub-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Bỏ trạng thái active của toàn bộ các nút tab
    document.querySelectorAll('.sub-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Hiển thị panel và active nút tương ứng được bấm
    document.getElementById(tabId).classList.add('active');
    if (evt) {
        evt.currentTarget.classList.add('active');
    }
}