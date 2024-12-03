const upb = document.getElementById('ee')

upb.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function chatwa() {
    const phoneNumber = "6287785010412";
    const message = "Selamat Siang Kak! Saya ingin memesan produk Mi4D sebanyak ___ porsi!!";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}