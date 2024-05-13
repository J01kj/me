// Function to create a countdown
{
	const countdownMessage = `Countdown for ${eventName}:`;
	message.channel.send(countdownMessage);

	const countdownInterval = setInterval(() => {
		timeInSeconds--;

		if (timeInSeconds <= 0) {
			clearInterval(countdownInterval);
			message.channel.send(`${eventName} has started!`);
		} else {
			const hours = Math.floor(timeInSeconds / 3600);
			const minutes = Math.floor((timeInSeconds % 3600) / 60);
			const seconds = timeInSeconds % 60;
			const countdownString = `${hours}h ${minutes}m ${seconds}s`;
			message.channel.send(countdownString);
		}
	}, 1000);
}
