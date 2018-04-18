const url = window.location.href;
const num = (Number(url[url.indexOf(".") - 1]) % 5) + 1;

setTimeout(()=> {
    window.location.assign(`./chart${num}.html`);
}, 5500);