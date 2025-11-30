const participants = [
    "Felix", "Lilly", "Leonie", "Fabian", "Deliah", 
    "Maxi", "Klara", "Sebastian", "Anke", "Thilo"
];

const partners = {
    "Felix": "Lilly", "Lilly": "Felix",
    "Leonie": "Fabian", "Fabian": "Leonie",
    "Deliah": "Maxi", "Maxi": "Deliah",
    "Klara": "Sebastian", "Sebastian": "Klara",
    "Anke": "Thilo", "Thilo": "Anke"
};

// 2. Zugriffs- und Passwort-Logik
const passwords = {
    "XMAS2025": "Felix",
    "Stern123": "Lilly",
    "Wintergrün": "Leonie",
    "Geschenk47": "Fabian",
    "WichtelFee": "Deliah",
    "Renti3r": "Maxi",
    "Glühwein24": "Klara",
    "SchneeEule": "Sebastian",
    "Zimtschnecke": "Anke",
    "JingleBells": "Thilo"
};

let assignments = {}; // Speichert die gültige Zuordnung

// Logik zur Überprüfung der Ausschlussregel
function isAssignmentValid(giver, receiver) {
    if (giver === receiver) {
        return false;
    }
    if (partners[giver] === receiver) {
        return false;
    }
    return true;
}

// Logik zur Generierung der Wichtel-Zuordnung
function generateSecretAssignments() {
    let givers = [...participants];
    let currentAssignments = {};
    let maxTries = 1000;
    let tries = 0;

    while (tries < maxTries) {
        currentAssignments = {};
        let success = true;

        // Mische die Empfänger zufällig
        let shuffledReceivers = [...participants].sort(() => Math.random() - 0.5);

        for (let i = 0; i < givers.length; i++) {
            const giver = givers[i];
            let assigned = false;

            for (let j = 0; j < shuffledReceivers.length; j++) {
                const receiver = shuffledReceivers[j];

                // Prüfe, ob der Empfänger noch verfügbar und die Regel gültig ist
                if (
                    !Object.values(currentAssignments).includes(receiver) && 
                    isAssignmentValid(giver, receiver)
                ) {
                    currentAssignments[giver] = receiver;
                    assigned = true;
                    break; 
                }
            }

            if (!assigned) {
                success = false;
                break;
            }
        }

        if (success && Object.keys(currentAssignments).length === givers.length) {
            assignments = currentAssignments;
            return;
        }

        tries++;
    }

    console.error("Konnte keine gültige Wichtel-Zuordnung generieren. Bitte neu versuchen.");
}

// Initialisiere die Zuordnungen beim Laden des Skripts
generateSecretAssignments();

// Event-Listener für den Button (Ursache für den Fehler "Button funktioniert nicht" oft hier zu finden)
document.getElementById('submitButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultContainer = document.getElementById('resultContainer');
    const drawnNameElement = document.getElementById('drawnName');

    const giverName = passwords[passwordInput];

    if (giverName) {
        // Korrektes Passwort
        errorMessage.textContent = '';
        const receiverName = assignments[giverName];
        
        // Ergebnis anzeigen und Animation starten
        drawnNameElement.textContent = receiverName;
        resultContainer.classList.remove('hidden');
        document.querySelector('.login-box').classList.add('hidden');

        // Animation neu starten
        drawnNameElement.classList.remove('drawn-name');
        setTimeout(() => {
            drawnNameElement.classList.add('drawn-name');
        }, 10);

    } else {
        // Falsches Passwort
        errorMessage.textContent = 'Ungültiges Passwort. Bitte versuche es erneut.';
        resultContainer.classList.add('hidden');
        document.querySelector('.login-box').classList.remove('hidden');
        drawnNameElement.textContent = '';
    }
});
