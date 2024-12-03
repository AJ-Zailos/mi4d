function chatwasan() {
    const phoneNumber = "6287785010412";
    const message = "Selamat Siang Kak! Saya ingin memesan produk Mi4D sebanyak ___ porsi!!";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}

function chatwajus() {
    const phoneNumber = "6281249335856";
    const message = "Selamat Siang Kak! Saya ingin memesan produk Mi4D sebanyak ___ porsi!!";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}

function chatwameg() {
    const phoneNumber = "6281234190577";
    const message = "Selamat Siang Kak! Saya ingin memesan produk Mi4D sebanyak ___ porsi!!";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}

function chatwasmel() {
    const phoneNumber = "6285130361556";
    const message = "Selamat Siang Kak! Saya ingin memesan produk Mi4D sebanyak ___ porsi!!";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}

function instajus() {
    const username = "j.aviel_";

    const instagramURL = `https://www.instagram.com/direct/t/${username}/`;

    window.open(instagramURL, "_blank");
}

function instasan() {
    const username = "shandrraaa_";

    const instagramURL = `https://www.instagram.com/direct/t/${username}/`;

    window.open(instagramURL, "_blank");
}

function instameg() {
    const username = "megmegumi_";

    const instagramURL = `https://www.instagram.com/direct/t/${username}/`;

    window.open(instagramURL, "_blank");
}

function instamel() {
    const username = "vincentius_melvern";

    const instagramURL = `https://www.instagram.com/direct/t/${username}/`;

    window.open(instagramURL, "_blank");
}

function emailjus() {
    const recipient = "justin.wiryosudirjo.0502@student.sdh.sch.id";
    const subject = "Mi 4D Customer";
    const body = "Selamat siang kak,\n\nSaya ingin memesan produk mi 4d sebanyak ___ porsi";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}

function emailmeg() {
    const recipient = "debora.wahyudi.0404@student.sdh.sch.id";
    const subject = "Mi 4D Customer";
    const body = "Selamat siang kak,\n\nSaya ingin memesan produk mi 4d sebanyak ___ porsi";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}

function emailsan() {
    const recipient = "shandra.sihamto.1003@student.sdh.sch.id";
    const subject = "Mi 4D Customer";
    const body = "Selamat siang kak,\n\nSaya ingin memesan produk mi 4d sebanyak ___ porsi";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}

function emailmel() {
    const recipient = "vincentius.tanarto.1101@student.sdh.sch.id";
    const subject = "Mi 4D Customer";
    const body = "Selamat siang kak,\n\nSaya ingin memesan produk mi 4d sebanyak ___ porsi";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}

const upb = document.getElementById('ee')

upb.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});