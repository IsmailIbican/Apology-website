document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const transitionScreen = document.getElementById('transition-screen');
    const letterContent = document.getElementById('letter-content');
    const typewriterText = document.getElementById('typewriter-text');
    const forgiveSection = document.getElementById('forgive-section');
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const finalScreen = document.getElementById('final-screen');

    // BURAYA KENDİ MEKTUBUNU YAZIYORSUN
    const myLetter = "Sevgilim...<br><br>Evet Aşkım farkındayım, Bugün(Aslında dün gece ama sen bunu bu sabah okuyacaksın) çok gereksiz yere tartıştık. Durduk yere hem de hiç bir sebebi olmadan... Biliyorum gereksiz yere çok fazla tartışma çıkarıyorum seni boğuyorum, arayarak seni rahatsız ediyorum farkındayım. Sen bana tripli ya da kızgınken aşkım gözüme gram uyku girmiyor gerçekten. Ben de bunun için sana böyle bir süpriz yapmaya karar verdim. Seni aşkım gecenin köründe gereksiz yere çok kere arayıp rahatsız edip dipboğaz ettiğim için özür dilerim hayatım. Umarım bu ufak tatlı özürü kabul edersin aşkım. Biraz fazla zamanımı aldı yapmak. Şu an saat 4.12 aşkım. <br>Seni kızdırdığım için durduk yere çok özür dilerim... Beni affeder misin dünyalara güzeli karım...<br><br>Seni çok seviyorum.";

    // Sayfa açıldıktan 3.5 saniye sonra geçişi başlat
    setTimeout(() => {
        transitionScreen.classList.add('hidden'); 
        body.classList.add('romantic-bg'); 
        letterContent.classList.remove('hidden'); 
        
        startTypewriter(); 
    }, 3500);

    // Daktilo Efekti
    let i = 0;
    let tempHTML = ""; 
    let isTag = false;

    function startTypewriter() {
        if (i < myLetter.length) {
            let char = myLetter.charAt(i);
            
            if (char === '<') isTag = true;
            tempHTML += char;
            if (char === '>') isTag = false;

            i++; 

            if (!isTag) {
                typewriterText.innerHTML = tempHTML;
                setTimeout(startTypewriter, 50); 
            } else {
                startTypewriter(); 
            }
        } else {
            setTimeout(() => {
                forgiveSection.classList.remove('hidden');
            }, 1000); 
        }
    }

    // Kaçan Hayır Butonu (PC ve Mobil Uyumu)
    function runAway(e) {
        if (e && e.type === 'touchstart') {
            e.preventDefault();
        }

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const randomX = Math.random() * (windowWidth - 150); 
        const randomY = Math.random() * (windowHeight - 80);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }

    noBtn.addEventListener('mouseover', runAway);
    noBtn.addEventListener('touchstart', runAway, { passive: false });

    // "Evet" Butonuna Tıklanınca (FİNAL EKRANINA GEÇİŞ)
    yesBtn.addEventListener('click', () => {
        // 1. Mektup ve butonları yavaşça sil (fade-out animasyonunu tetikle)
        letterContent.classList.add('fade-out');

        // 2. 2 saniye bekle (silinme animasyonu bitsin)
        setTimeout(() => {
            letterContent.classList.add('hidden'); // Mektubu tamamen kaldır
            
            // 3. Final ekranını göster
            finalScreen.classList.remove('hidden');
            
            // İsteğe bağlı: Final ekranında konfeti veya ekstra efektler buraya eklenebilir
        }, 2000);
    });
});