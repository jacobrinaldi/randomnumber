function logRanNum (max) {
    const randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber);
    document.getElementById("randomNum").textContent = randomNumber;
}

