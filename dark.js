window.addEventListener("load", function () 
{
    setTimeout(() => 
        {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 2000);
});

const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("dark-mode") === "enabled")
    {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️ Light Mode";
}

darkModeToggle.addEventListener("click", function () 
{
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) 
        {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.innerText = "☀️ Light Mode";
        } 
    else 
        {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.innerText = "🌙 Dark Mode";
        }
});

darkModeToggle = document.getElementById("darkModeToggle");
const footer = document.querySelector("footer");


if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("bg-dark", "text-light", "dark-mode");
    footer.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️ Light Mode";
}


darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
    document.body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.innerText = "☀️ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.innerText = "🌙 Dark Mode";
    }
});
