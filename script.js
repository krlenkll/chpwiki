// Chuyển Sub-Tab
function openSubTab(evt, tabId) {
    document.querySelectorAll('.sub-tab-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    if (evt) evt.currentTarget.classList.add('active');
}

// Bật/Tắt chế độ chỉnh sửa trực tiếp trên Web
let isEditMode = false;

function toggleEditMode() {
    isEditMode = !isEditMode;
    const editables = document.querySelectorAll('.editable, h1, h2, h3, p, li, span.hero-tag');
    
    editables.forEach(el => {
        el.contentEditable = isEditMode ? "true" : "false";
    });

    const status = document.getElementById('edit-status');
    status.innerText = isEditMode ? "Chế độ: CHỈNH SỬA (Click vào chữ để sửa)" : "Chế độ: Đọc";
    status.style.color = isEditMode ? "#10b981" : "white";
}

// Lưu tạm vào trình duyệt (LocalStorage)
function saveToLocal() {
    const content = document.body.innerHTML;
    localStorage.setItem('chp_wiki_content', content);
    alert('✅ Đã lưu tạm vào trình duyệt! (Nhớ nhấn "Xuất File HTML" và up lên GitHub để mọi người cùng thấy).');
}

// Khôi phục mặc định
function resetDefault() {
    if (confirm('Bạn có chắc muốn xóa bản sửa tạm và khôi phục về mặc định?')) {
        localStorage.removeItem('chp_wiki_content');
        location.reload();
    }
}

// Xuất file HTML sạch để cập nhật lên GitHub
function exportHTML() {
    if (isEditMode) toggleEditMode();

    const cloneDoc = document.documentElement.cloneNode(true);
    
    // Làm sạch thuộc tính contenteditable trước khi lưu
    cloneDoc.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'));

    const htmlContent = "<!DOCTYPE html>\n" + cloneDoc.outerHTML;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    a.click();
}