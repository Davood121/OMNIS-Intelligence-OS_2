// Clock functionality
function updateClock() {
    const now = new Date();
    const timeHtml = now.toLocaleTimeString('en-US', { hour12: false });
    document.getElementById('clock').innerText = timeHtml;
}
setInterval(updateClock, 1000);
updateClock();

// Fake CPU Load variation
setInterval(() => {
    const load = Math.floor(Math.random() * 30) + 20; // 20 - 50%
    document.getElementById('cpu-load').style.width = load + '%';
    document.getElementById('cpu-text').innerText = load + '%';
}, 2500);

// Terminal Input Logic
const input = document.getElementById('command-input');
const output = document.getElementById('chat-output');

const aiResponses = [
    "Processing request through neural pathways...",
    "Accessing Davood's central repository...",
    "Command acknowledged. Running background diagnostics.",
    "System integrity stable. OMNIS OS operational.",
    "Executing quantum sort algorithms... done.",
    "Bypassing mainframe... Just kidding. I'm just a frontend."
];

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const val = input.value.trim();
        if (val) {
            // Append User msg
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.innerText = "root@omnis:~# " + val;
            output.appendChild(userMsg);
            
            input.value = '';
            output.scrollTop = output.scrollHeight;

            // Delayed AI response
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai';
                if(val.toLowerCase() === 'help') {
                    aiMsg.innerText = "Available commands: help, status, connect, shutdown";
                } else if (val.toLowerCase() === 'status') {
                    aiMsg.innerText = "All systems green. CPU optimal. Matrix stable.";
                } else {
                    aiMsg.innerText = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                }
                output.appendChild(aiMsg);
                output.scrollTop = output.scrollHeight;
            }, 600);
        }
    }
});
