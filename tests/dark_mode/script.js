function darkmode(){
    const wasDarkMode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkMode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkMode);
}

function onload() {
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode') === 'true');
}