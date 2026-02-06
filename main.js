const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;

        // Set background color based on number range
        if (number <= 10) {
            numberDiv.style.backgroundColor = '#fbc400'; // Yellow
        } else if (number <= 20) {
            numberDiv.style.backgroundColor = '#69c8f2'; // Blue
        } else if (number <= 30) {
            numberDiv.style.backgroundColor = '#ff7272'; // Red
        } else if (number <= 40) {
            numberDiv.style.backgroundColor = '#aaa'; // Gray
        } else {
            numberDiv.style.backgroundColor = '#b0d840'; // Green
        }

        numbersContainer.appendChild(numberDiv);
    });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});
