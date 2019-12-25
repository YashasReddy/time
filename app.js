const clock = document.querySelector('.clock');

const timeFn = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const HTML = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;
    clock.innerHTML = HTML;
};

setInterval(timeFn, 1000);