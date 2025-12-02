// 1. Teilnehmer und Ausschlussregeln (Lilly entfernt)
const participants = [
    "Felix", "Leonie", "Fabian", "Deliah", 
    "Maxi", "Klara", "Sebastian", "Anke", "Thilo"
];

const partners = {
    // Felix hat nun keinen Partner mehr in der Wichtelrunde
    "Leonie": "Fabian", "Fabian": "Leonie",
    "Deliah": "Maxi", "Maxi": "Deliah",
    "Klara": "Sebastian", "Sebastian": "Klara",
    "Anke": "Thilo", "Thilo": "Anke"
};

// 2. Zugriffs- und Passwort-Logik (Lilly entfernt)
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
// !!! WICHTIG: DIESER BLOCK MUSS MIT IHRER FIXEN ZUORDNUNG ERSETZT WERDEN !!!
// Nun nur noch 9 Teilnehmer (Lilly ist raus).
// =========================================================================
let assignments = {
     "Felix": "DELIAH", 
    // "Lilly": "BITTE ERSETZEN", <--- ENTFERNT
    "Leonie": "ANKE",
    "Fabian": "MAXI",
    "Deliah": "SEBASTIAN",
    "Maxi": "KLARA",
    "Klara": "THILO",
    "Sebastian": "FELIX",
    "Anke": "FABIAN",
    "Thilo": "LEONIE"
    
};
// =========================================================================


// Event-Listener für den Button (mit korrigierter Bild-Logik)
document.getElementById('submitButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultContainer = document.getElementById('resultContainer');
    const drawnNameElement = document.getElementById('drawnName');
    const drawnImageElement = document.getElementById('drawnImage'); 

    const giverName = passwords[passwordInput];

    // Zuerst alle vorherigen Ergebnisse und Bilder verstecken/leeren
    drawnNameElement.textContent = '';
    drawnImageElement.src = '';
    drawnImageElement.classList.add('hidden'); 

    if (giverName) {
        // Korrektes Passwort
        errorMessage.textContent = '';
        const receiverName = assignments[giverName];
        
        // Ergebnis anzeigen und Animationen starten
        drawnNameElement.textContent = receiverName;
        resultContainer.classList.remove('hidden');
        document.querySelector('.login-box').classList.add('hidden');

        // Animation für den Namen neu starten
        drawnNameElement.classList.remove('drawn-name');
        setTimeout(() => {
            drawnNameElement.classList.add('drawn-name');
        }, 10);

        // HIER IST DIE KORREKTUR: Erzeugt VORNAME.jpeg (z.B. FELIX.jpeg)
        const imagePath = `${receiverName.toUpperCase()}.jpeg`; 
        
        drawnImageElement.src = imagePath;
        drawnImageElement.alt = `Bild von ${receiverName}`;
        drawnImageElement.classList.remove('hidden'); 

        // Animation für das Bild neu starten
        drawnImageElement.classList.remove('drawn-image');
        setTimeout(() => {
            drawnImageElement.classList.add('drawn-image');
        }, 50); 
        

    } else {
        // Falsches Passwort
        errorMessage.textContent = 'Ungültiges Passwort. Bitte versuche es erneut.';
        resultContainer.classList.add('hidden');
        document.querySelector('.login-box').classList.remove('hidden');
    }
});
