window.Telegram.WebApp.ready();

document.getElementById('sendMessage').addEventListener('click', () => {
    Telegram.WebApp.sendData("Hello from WebApp!");  // Send data to the bot
});
