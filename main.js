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
