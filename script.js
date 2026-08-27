// Chuyển đổi giữa 10 Chương lớn ở Sidebar
function switchMainChapter(chapterId) {
    // Ẩn tất cả các Chương lớn
    document.querySelectorAll('.main-chapter-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Bỏ active tất cả các menu Sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Active Chương được chọn
    const activePanel = document.getElementById(chapterId);
    if (activePanel) {
        activePanel.classList.add('active');
    }

    // Active button ở sidebar
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Cập nhật Breadcrumb & Hero Header tương ứng
    const chapterNum = chapterId.replace('ch', '');
    document.getElementById('bc-title').innerText = `Chương ${chapterNum}`;
    document.getElementById('hero-tag').innerText = `CHƯƠNG ${chapterNum.padStart(2, '0')}`;
    document.getElementById('hero-title').innerText = `Chương ${chapterNum}: Nội Dung Vận Hành`;
    document.getElementById('hero-desc').innerText = `Tài liệu hướng dẫn chuẩn hóa cho Chương ${chapterNum} thuộc Sổ tay Sĩ quan CHP.`;
}

// Chuyển đổi giữa các Sub-Tabs bên trong từng Chương
function openSubTab(evt, tabId) {
    // Lấy container của chương hiện tại
    const currentChapter = evt.currentTarget.closest('.main-chapter-panel');

    // Ẩn tất cả các tab nhỏ trong Chương này
    currentChapter.querySelectorAll('.sub-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Bỏ active tất cả nút tab nhỏ trong Chương này
    currentChapter.querySelectorAll('.sub-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Hiển thị tab được chọn
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}