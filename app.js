function changeBG() {
    const img = document.getElementById('bg-img');
    const btn = document.getElementById('bg-btn');

    btn.disabled = true;
    btn.innerText = "Yüklənir...";
    
    img.style.opacity = "0.4";

    const newSrc = "https://picsum.photos/1920/1080?random=" + Math.random();
    const tempImg = new Image();
    tempImg.src = newSrc;

    tempImg.onload = function() {
        img.src = newSrc;
        
        img.onload = () => {
            img.style.opacity = "1";
            btn.disabled = false;
            btn.innerText = "Şəkli Dəyiş";
        };
    };
}