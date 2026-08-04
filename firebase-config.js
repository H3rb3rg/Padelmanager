// ── Firebase-Konfiguration für den Padel Turnier Manager ──────────────────
//
// Ohne diese Datei (bzw. solange apiKey "REPLACE_ME" ist) läuft die App im
// Offline-Modus: Turniere werden nur auf diesem einen Gerät gespeichert.
// Einladungen per Code/QR funktionieren dann NICHT geräteübergreifend.
//
// So aktivierst du geräteübergreifende Turniere (kostenlos, ca. 5 Minuten):
//
// 1. https://console.firebase.google.com/ öffnen → "Projekt hinzufügen"
//    → Namen vergeben (z. B. "padel-turnier-manager") → Google Analytics
//    kannst du deaktivieren → Projekt erstellen.
//
// 2. Im Projekt links im Menü: "Build" → "Firestore Database"
//    → "Datenbank erstellen" → "Im Testmodus starten" → Region wählen
//    (z. B. eur3 / europe-west) → Aktivieren.
//
// 3. Zahnrad-Symbol oben links → "Projekteinstellungen" → runterscrollen
//    zu "Meine Apps" → das Web-Symbol "</>" anklicken → App registrieren
//    (Spitzname z. B. "padel-web", Firebase Hosting NICHT einrichten).
//    Firebase zeigt dir danach ein Code-Snippet mit einem Objekt namens
//    "firebaseConfig" — genau diese Werte unten eintragen.
//
// 4. Diese Datei speichern, ins Repo committen, fertig. Die App erkennt die
//    echten Werte automatisch und schaltet auf Cloud-Sync um.
//
// Sicherheitshinweis: Der Testmodus von Firestore ist standardmäßig 30 Tage
// lang offen lesbar/schreibbar für jeden, der die Config kennt (technisch
// bedingt, da diese Werte sowieso im öffentlichen Quellcode stehen). Für ein
// privates Freundes-Turnier ist das unkritisch. Falls dir das nicht reicht,
// kannst du die Firestore-Regeln später in der Firebase Console verschärfen
// (z. B. auf anonyme Anmeldung + Regeln pro Dokument).

window.__FIREBASE_CONFIG__ = {
  apiKey: "AIzaSyDHcYqZ9uiPLdN64IDYHrlXwkuXJokryKs",
  authDomain: "padelmanager-d6a03.firebaseapp.com",
  projectId: "padelmanager-d6a03",
  storageBucket: "padelmanager-d6a03.firebasestorage.app",
  messagingSenderId: "843052709234",
  appId: "1:843052709234:web:3de64b5f3d71afa7de19eb"
};
