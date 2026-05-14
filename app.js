function changeBG() {
    const image = document.getElementById('bg-img');
    image.src = "https://picsum.photos/1920/1080?random=" + Math.random();
}

function changeBG() {
    const img = document.getElementById('bg-img');
    const btn = document.querySelector('.btn'); 

    btn.disabled = true;
    btn.innerText = "Yüklənir...";
    

    img.style.opacity = "0";
    
    img.src = "https://picsum.photos/1920/1080?random=" + Math.random();
    

    img.onload = function() {
        img.style.opacity = "1";     
        btn.disabled = false;        
        btn.innerText = "Şəkli Dəyiş"; 
    };
}