document.getElementById('wishButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        alert('Please enter your name!');
        return;
    }

    const wishes = [
        `May your day be filled with joy and laughter,!`,
        `Wishing you a year filled with happiness and success,!`,
        `May all your dreams come true on your special day,!`,
        `Sending you warm wishes and a day as bright as your smile,!`,
        `Happy birthday, ${name}! May this year bring you endless blessings.`
    ];

    document.getElementById('birthday-title').textContent = `Happy Birthday, ${name}!`;
    document.getElementById('birthday-message').innerHTML = wishes.join('<br><br>');

    document.getElementById('name-input-section').style.display = 'none';
    document.getElementById('wish-section').style.display = 'block';

    // Change background to moon night
    document.body.style.backgroundImage = "url('Happy-Birthday-Best-Image.jpg')";
});