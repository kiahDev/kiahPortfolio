const talkBtn = document.getElementById('talk-btn');

talkBtn.addEventListener('click', function() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        window.location.href = "mailto:hezekiahbrndn@gmail.com?subject=Let's Talk&body=Hi Hezekiah,";
    } else {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hezekiahbrndn@gmail.com&su=Let's%20Talk&body=Hi%20Hezekiah,", "_blank");
    }
});
