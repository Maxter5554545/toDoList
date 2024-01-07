
const themeToggle = document.getElementById("night_theme");

const store = localStorage.getItem('theme');

const setTheme = (backgroundColor, textColor) => {
    document.documentElement.style.setProperty("--backgroundColor", backgroundColor);
    document.documentElement.style.setProperty("--textColor", textColor);
};

if (store === 'dark') {
    setTheme("#505459", "#F6F6F6");
    themeToggle.checked = true;
} else {
    setTheme("#F6F6F6", "#505459");
}

themeToggle.addEventListener("change", function () {
    if (this.checked) {
        setTheme("#505459", "#F6F6F6");
        localStorage.setItem('theme', 'dark');
    } else {
        setTheme("#F6F6F6", "#505459");
        localStorage.setItem('theme', 'light');
    }
});


