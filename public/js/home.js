// Lấy các phần tử
const topMenu = document.getElementById('98-shop-top-menu');
const selectTopMenu = document.getElementById('98-select-top-menu');

// Lắng nghe sự kiện click trên toàn bộ tài liệu
document.addEventListener('click', function (e) {
    handleResize(); // Gọi lại handleResize để đảm bảo trạng thái menu đúng với kích thước màn hình
    if (selectTopMenu.contains(e.target)) {
        // Click vào nút menu
        topMenu.classList.toggle('hidden');  
        topMenu.classList.toggle('bvt-shop-menu-expended');
        console.log('Đã vào menu');
    } else {
        // Click bên ngoài menu
        if (topMenu.classList.contains('bvt-shop-menu-expended')) {
            topMenu.classList.remove('bvt-shop-menu-expended');
            topMenu.classList.add('hidden');
        }
        console.log('Đã thoát khỏi menu');
    }
});

// Lắng nghe sự kiện khi tải trang hoặc thay đổi kích thước cửa sổ
function handleResize() {
    if (window.innerWidth >= 1024) {
        // Nếu kích thước màn hình >= 1024px, ẩn menu và xóa class `bvt-shop-menu-expended`
        topMenu.classList.remove('bvt-shop-menu-expended');
        topMenu.classList.add('hidden');
    }
}

// Gọi hàm ngay khi tải trang
handleResize();

// Gắn sự kiện resize vào cửa sổ
window.addEventListener('resize', handleResize);
