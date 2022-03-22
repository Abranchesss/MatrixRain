const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '[]()%$#@⅋&';
const latin = 'QWERTYUIOPASDFGHJKLÇZXCVBNM';
const latin2 = '⥀MEᖉꓕ⅄ꓵIObⱯƧDᖶHᒉKΓCZXCΛBИW';
const nums = '0123456789';
const nums2 = '0Ɩᘕ3ત૨୧⌋8მ';

const alphabet = katakana + latin + latin2 + nums + nums2;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    context.scale(1,1);

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
setInterval(draw, 60);