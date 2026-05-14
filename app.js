function changeBG() {
    const mainImg = document.getElementById('bg-img');
    const btn = document.querySelector('.btn');

    btn.disabled = true;

    const tempImg = new Image();
    
    const newSrc = "https://picsum.photos/1920/1080?random=" + Math.random();
    tempImg.src = newSrc;

    tempImg.onload = function() {
        mainImg.style.opacity = "0.7";
        
    
        mainImg.src = newSrc;
        
        mainImg.style.opacity = "1";
        btn.disabled = false;
    };
}