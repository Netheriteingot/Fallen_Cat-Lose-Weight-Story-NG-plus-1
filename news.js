const textBank = [
    "A new software has been published to help Senegal people locate anything in their capital. Its name is called DakarLocate.",
    "This is a Mews Nessage!",
    "Advertisement slots available, please DM l319836 if you wish to publish your ad here.",
    "Hey, False | Deity | Destroyer. I, as the Eternal | Deity | Monarch, gives you one chance to overthrow me. If you succeed, you will become the next Eternal | Deity | Monarch. But if you don't, you will falter to me. You will take the chance, won't you... (Confusing | Amusing | Laughter).",
    "Breaking news: Mob loot mysteriously disappears in many parts of Vitatia. Also, the rift named Vacuum | Hollow | Void has been witnessed to appear several times. We are still not sure whether there are certain connections between these two incidents.",
    "This news message is built in memory of the October 1 update.",
    "Several interactions with the Infinite | Forever | Eternal has been detected in our enemies. Stay aware of any anomalies involving spacetime.",
    "It is said that when you reach a certain difficulty and gain enough of some resource, an Eternal mob will appear in front you.",
    "Kether is a great thing. Really. It can help you with resurrections and stuff... But nothing is perfect, and the honorable Kether has its own flaw. Sometimes it contains powers too large for the Vitation reality to hold and leaks into your own reality... But don't worry as that only has a 0.01% chance to happen, so you can still use it without any worries.",
    "Why is Kether dropped by cats? Scientists may have an answer.",
    "A newfound ancient Kether-stone carving shows the numbers 173 and 46.5 on it. Scientists are not quite sure what that means, and they are amazed that those who left them actually knows the concept of \"a half\". ",
    "CCR WHERE DA HELL DID YOU PUT THAT PLAYER LEVEL FETCHING THINGY",
    "You all know that milestones are great buffs, right? But what if... The milestones are actually nerfs to early game?",
    "ZhehanZ, please help me write the frontend stuff about milestones. I did the backends. Really. ... So what are the backend docs? -a confused l319836"
];

const tickerTextElement = document.getElementById('ticker-text');

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textBank.length);
    return textBank[randomIndex];
}

function startTicker() {
    console.log("Ticker started!")
    const randomText = getRandomText();
    document.getElementById("ticker-text").textContent = randomText;

    // Reset animation
    tickerTextElement.style.transform = 'translateX(100%)'; // Start off-screen
    const textWidth = tickerTextElement.offsetWidth;

    // Animate the text
    tickerTextElement.style.transition = `transform ${textWidth / 50}s linear`; // Adjust speed based on text width
    requestAnimationFrame(() => {
        tickerTextElement.style.transform = `translateX(-${textWidth}px)`; // Move to the left
    });

    // Change text when animation ends
    tickerTextElement.addEventListener('transitionend', () => {
        startTicker(); // Start the ticker again with new text
    }, { once: true }); // Ensure the event listener is removed after it triggers
}