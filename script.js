// 1. Teilnehmer und Ausschlussregeln (werden nur zur Definition der Paare benötigt)
const participants = [
    "Felix", "Leonie", "Fabian", "Deliah", 
    "Maxi", "Klara", "Sebastian", "Anke", "Thilo"
];


// 2. Zugriffs- und Passwort-Logik
const passwords = {
    "XMAS2025": "Felix",
    "Wintergrün": "Leonie",
    "Geschenk47": "Fabian",
    "WichtelFee": "Deliah",
    "Renti3r": "Maxi",
    "Glühwein24": "Klara",
    "SchneeEule": "Sebastian",
    "Zimtschnecke": "Anke",
    "JingleBells": "Thilo"
};


// =========================================================================
// !!! WICHTIG: DIESER BLOCK MUSS ERSETZT WERDEN !!!
// Fügen Sie hier Ihre einmalig gezogene, gültige Zuordnung ein,
// um die Ergebnisse zu fixieren.
// Beispiel: "Felix": "Maxi", "Lilly": "Klara", usw.
// =========================================================================
let assignments = {
    "Felix": "MAXI", 
    "Leonie": "KLARA",
    "Fabian": "FELIX",
    "Deliah": "FABIAN",
    "Maxi": "SEBASTIAN",
    "Klara": "ANKE",
    "Sebastian": "THILO",
    "Anke": "LEONIE",
    "Thilo": "DELIAH"
};
// =========================================================================


// Event-Listener für den Button (bleibt unverändert)
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
