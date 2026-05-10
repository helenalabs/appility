// ===== i18n — UI strings (EN default, DE available) =====
const STRINGS = {
  en: {
    // Nav
    nav_library:            'Library',
    nav_editor:             'Editor',
    // Stage
    flash_ready:            'Ready?',
    input_placeholder:      'Type the word…',
    timing_label:           'Timing',
    btn_start:              'Start',
    no_list_hint:           'Load a list from the Library or create your own in the Editor.<br/>Adjust the timing.',
    stage_hint_ready:       'Press Enter to start',
    stage_load_hint_l1:     'Adjust the Timing',
    stage_load_hint_l2:     'and press ENTER',
    pause_hint:             'ESC = Pause',
    pause_title:            'Game paused',
    enter_hint:             '↵ Enter = Next',
    retry_label:            'Try again',
    // Pause overlay
    pause_sub:              'Press Enter to continue',
    btn_resume:             'Resume',
    btn_abort:              'Cancel',
    pause_nav:              'Navigation during session.',
    pause_tab:              'Tab switched — session paused.',
    // Finish overlay
    finish_title:           'Well Done!',
    finish_sub:             (n) => `${n} words mastered — all correct!`,
    finish_perfect:         'Perfect round!',
    btn_next_list:          'Next List ›',
    btn_again:              'Again',
    btn_again_faster:       'Again — faster ›',
    finish_hint_next:       'Enter = Next List',
    finish_hint_again:      'Enter = Again',
    finish_hint_faster:     'Enter = Again — faster',
    // Bibliothek
    bib_program:            'Program',
    bib_lists:              'Lists',
    bib_preview:            'Preview',
    bib_pick_program:       '← Select a program',
    bib_pick_list:          '← Select a list',
    bib_selection:          'Selection',
    bib_sel_hint:           'min. 1 · max. 5 lists',
    bib_sel_count:          (n) => `${n} list${n > 1 ? 's' : ''} selected`,
    btn_play:               '▶ Play',
    bib_no_custom:          'No lists saved yet',
    bib_word_count:         (n) => `${n} words`,
    bib_list_label:         (n) => `List ${n}`,
    bib_delete_title:       'Delete',
    // Program labels
    prog_custom:            'My Lists',
    // Editor
    editor_list_name_placeholder: 'List name…',
    editor_default_name:    'My List',
    editor_loaded_name:     'Loaded List',
    editor_unnamed:         'Untitled',
    editor_field_placeholder: 'Term',
    editor_save_browser:    'SAVE IN BROWSER',
    btn_save_app:           'Save to app',
    btn_load_app:           'Load from app',
    editor_save_device:     'SAVE TO DEVICE',
    btn_download:           'Download',
    btn_upload:             'Upload',
    btn_clear:              '↺ Clear',
    // Editor messages
    err_list_name:          'Please enter a list name.',
    err_min_words:          'Please fill in at least one field.',
    err_max_lists:          'Maximum of 10 lists reached. Please delete a list in the Library first.',
    msg_saved:              (name, n) => `✓ Saved: ${name} (${n} words)`,
    err_no_lists:           'No saved lists found. Please save a list first.',
    picker_label:           'Select a list:',
    picker_cancel:          'Cancel',
    msg_loaded:             (name, n) => `✓ Loaded: ${name} (${n} words)`,
    msg_downloaded:         (filename) => `✓ Downloaded: ${filename}`,
    err_invalid_file:       'Invalid file — no "words" array found.',
    msg_file_loaded:        (name, n) => `✓ File loaded: ${name} (${n} words)`,
    err_file_load:          'Error loading file. Please select a valid JSON file.',
  },
  de: {
    // Nav
    nav_library:            'Bibliothek',
    nav_editor:             'Editor',
    // Stage
    flash_ready:            'Bereit?',
    input_placeholder:      'Wort abtippen…',
    timing_label:           'Timing',
    btn_start:              'Start',
    no_list_hint:           'Liste in der Bibliothek laden oder im Editor eigene erstellen.<br/>Das Timing anpassen.',
    stage_hint_ready:       'Drücke Enter, um zu starten',
    stage_load_hint_l1:     'Passe das Timing an',
    stage_load_hint_l2:     'und drücke ENTER',
    pause_hint:             'ESC = Pause',
    pause_title:            'Spiel pausiert',
    enter_hint:             '↵ Enter = Weiter',
    retry_label:            'Versuche es nochmal',
    // Pause overlay
    pause_sub:              'Enter zum Weitermachen',
    btn_resume:             'Weiter',
    btn_abort:              'Abbrechen',
    pause_nav:              'Navigation während des Spiels.',
    pause_tab:              'Tab gewechselt — Spiel pausiert.',
    // Finish overlay
    finish_title:           'Gut gemacht!',
    finish_sub:             (n) => `${n} Wörter gemeistert — alle richtig!`,
    finish_perfect:         'Perfekte Runde!',
    btn_next_list:          'Nächste Liste ›',
    btn_again:              'Nochmal',
    btn_again_faster:       'Nochmal — schneller ›',
    finish_hint_next:       'Enter = Nächste Liste',
    finish_hint_again:      'Enter = Nochmal',
    finish_hint_faster:     'Enter = Nochmal — schneller',
    // Bibliothek
    bib_program:            'Programm',
    bib_lists:              'Listen',
    bib_preview:            'Vorschau',
    bib_pick_program:       '← Programm wählen',
    bib_pick_list:          '← Liste wählen',
    bib_selection:          'Auswahl',
    bib_sel_hint:           'min. 1 · max. 5 Listen',
    bib_sel_count:          (n) => `${n} Liste${n > 1 ? 'n' : ''} gewählt`,
    btn_play:               '▶ Spielen',
    bib_no_custom:          'Noch keine Listen gespeichert',
    bib_word_count:         (n) => `${n} Wörter`,
    bib_list_label:         (n) => `Liste ${n}`,
    bib_delete_title:       'Löschen',
    // Program labels
    prog_custom:            'Eigene Listen',
    // Editor
    editor_list_name_placeholder: 'Listenname…',
    editor_default_name:    'Meine Liste',
    editor_loaded_name:     'Geladene Liste',
    editor_unnamed:         'Unbenannt',
    editor_field_placeholder: 'Begriff',
    editor_save_browser:    'IM BROWSER SPEICHERN',
    btn_save_app:           'In App speichern',
    btn_load_app:           'Aus App laden',
    editor_save_device:     'AUF DEM GERÄT SPEICHERN',
    btn_download:           'Herunterladen',
    btn_upload:             'Hochladen',
    btn_clear:              '↺ Leeren',
    // Editor messages
    err_list_name:          'Bitte Listenname eingeben.',
    err_min_words:          'Bitte fülle mindestens ein Feld aus.',
    err_max_lists:          'Maximale Anzahl von 10 Listen erreicht. Bitte zuerst eine Liste in der Bibliothek löschen.',
    msg_saved:              (name, n) => `✓ Gespeichert: ${name} (${n} Wörter)`,
    err_no_lists:           'Keine gespeicherten Listen gefunden. Bitte zuerst eine Liste speichern.',
    picker_label:           'Liste auswählen:',
    picker_cancel:          'Abbrechen',
    msg_loaded:             (name, n) => `✓ Geladen: ${name} (${n} Wörter)`,
    msg_downloaded:         (filename) => `✓ Heruntergeladen: ${filename}`,
    err_invalid_file:       'Ungültige Datei — kein "words"-Array gefunden.',
    msg_file_loaded:        (name, n) => `✓ Datei geladen: ${name} (${n} Wörter)`,
    err_file_load:          'Fehler beim Laden der Datei. Bitte gültige JSON-Datei wählen.',
  }
};

let currentLang = 'en';
function t(key, ...args) {
  const val = STRINGS[currentLang]?.[key] ?? STRINGS.en[key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}

function setLang(lang) {
  currentLang = lang;
  // Update toggle active state
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-de').classList.toggle('active', lang === 'de');
  // Update all static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'DIV') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Update editor field placeholders (dynamically rendered)
  document.querySelectorAll('.editor-field').forEach(el => {
    el.placeholder = t('editor_field_placeholder');
  });
  // Re-render bib if active (to pick up translated labels)
  if (document.getElementById('page-bibliothek').classList.contains('active')) {
    renderBib();
  }
}


// prettier-ignore
const WORD_DATA = {"DEU-1000-01":{"DEU-1000-01-LIST-1":["sollen","leicht","fremd","brauchen","das Gespräch","das Jahr","Frankreich","die Orange","die Landschaft","voll","vergessen","oben","ich bin ledig","die Blume","wieder","halten","guten Tag","der Stress","die Nase","auf der Suche"],"DEU-1000-01-LIST-2":["sehr gut","der Appetit","noch einmal","kein Stress","frühstücken","der Weg","die Firma","der Herd","nicht wahr","der Druck","wir haben","im","sich treffen","die Katze","der Plan","kein","die Sache","der Fuß","mich","die Seife"],"DEU-1000-01-LIST-3":["der Feiertag","der Saft","ich freue mich","für","sondern","noch","die Woche","letztes Jahr","die Mutter","aufhängen","der März","mitkommen","heute Abend","das Vertrauen","erst","zunehmen","sagen","entscheiden","denn","lange nicht gesehen"],"DEU-1000-01-LIST-4":["obwohl","bekannt","freuen","das System","ich weiß nicht","wie immer","der Dienstag","spazieren gehen","der Schrank","die Suppe","bitte","er","fast","deutlich","der Schnupfen","weiter","dazu","lernen","vorsichtig","reden"],"DEU-1000-01-LIST-5":["jemand","öffnen","werden","die Freundin","es","glauben","die Ansicht","wohnen","die Meinung","alt","der Sommer","die Zahnbürste","das Kleid","aussuchen","gemütlich","bis bald","spielen","die Waschmaschine","probieren","der Großvater"]},"DEU-1000-02":{"DEU-1000-02-LIST-1":["das Fahrrad","die Bank","irgendwo","die Straßenbahn","das Telefon","das Handy","am Ende","interessant","tragen","die Verantwortung","der Schuh","ausgehen","lang","der Mund","durch","der Abend","letzte Woche","der Arzt","essen","heiß"],"DEU-1000-02-LIST-2":["die Straße","sich","die Banane","teuer","der Schmerz","der Reis","gar nicht","vergleichen","von","sich freuen","die Kleidung","die Wurst","nächsten Monat","die Zwiebel","der Nachbar","sieben","ich bin müde","auswählen","wo ist der Ausgang","kommen"],"DEU-1000-02-LIST-3":["aus","beginnen","freut mich","irgendwie","zwei","nächstes Jahr","aussteigen","alle","träumen","der Tisch","der Unterricht","also","der Arm","die Nachbarin","die Anmeldung","bestanden","der Film","der Kuchen","die Natur","bisschen"],"DEU-1000-02-LIST-4":["ganz","sauber","vorbereiten","zuhause","das Salz","die Freiheit","die Farbe","rechts","auf Wiedersehen","der Unterschied","bekommen","ich bin satt","die Möglichkeit","drei","etwas","die Miete","der Zug","wo genau","einschalten","der Apfel"],"DEU-1000-02-LIST-5":["Bescheid geben","der Cousin","die Spülmaschine","jeder","der Juli","der Kollege","doch","wie viel","lieber","elf","der Knoblauch","die Zukunft","klein","machen","einkaufen","zum Wohl","die Situation","sonst","wegen","froh"]},"DEU-1000-03":{"DEU-1000-03-LIST-1":["die Stadt","der Anfang","gib mir","wie geht es","können","wo gibt es","die Erkältung","der Tag","erzählen","die Socke","das Fenster","die Insel","mir ist schlecht","der Käse","die Ampel","schon","das Baby","nächste Woche","grün","das Glück"],"DEU-1000-03-LIST-2":["sich schminken","gewinnen","das Studium","fünfzig","wiederholen","fühlen","müde","dabei","ausruhen","morgen früh","die Brücke","pass auf","der Stuhl","die Tankstelle","billig","der Finger","eklig","der Kopf","der Ort","früh"],"DEU-1000-03-LIST-3":["die Frau","selten","alles klar","nach","parken","ungefähr","das Bad","das Museum","auch","beenden","heute Morgen","wann","dünn","die Einstellung","grüß Gott","der November","durstig","von mir aus","der Brief","ich bin dagegen"],"DEU-1000-03-LIST-4":["abgeben","ohne","der Mittwoch","das Wissen","einverstanden sein","auch wenn","wie lange","die Lehrerin","die Menschen","zum Glück","das Geschäft","uns","es war sehr lecker","wie Sie möchten","die Sahne","verlieren","ich hoffe es","Dänemark","ich verstehe dich","zwischen"],"DEU-1000-03-LIST-5":["fahren","der Bauch","das Gemüse","zum Schluss","nachher","das Beispiel","heißen","gefährlich","der Frühling","der Führerschein","unbedingt","das Treffen","die Grippe","kaufen","der Montag","einschlafen","das Bild","ausschalten","der Quark","denken"]},"DEU-1000-04":{"DEU-1000-04-LIST-1":["leben","zurückgeben","gesund","ausrechnen","zufrieden","was","die Pause","woher","der Charakter","die Lust","der Spinat","die Mütze","trocken","das Problem","die Marmelade","das Essen","aufladen","kaputt","die Chance","der Mann"],"DEU-1000-04-LIST-2":["austauschen","treffen","möchten","das Schlafzimmer","absagen","die Autobahn","bis","bitte nicht","nein","der Spaß","was soll das","weil","der Geldautomat","trotzdem","die Antwort","toll","das Messer","ausschlafen","guten Abend","arm"],"DEU-1000-04-LIST-3":["der Freitag","als","ach so","wie schön","der Joghurt","in Ordnung","der April","es geht","das Bargeld","falls nötig","anhalten","bis dann","das Leben","viel Spaß","gelb","der Dezember","der Schinken","der Kindergarten","die Wohnung","wirklich"],"DEU-1000-04-LIST-4":["genau","das Rindfleisch","der Supermarkt","die Ruhe","mal sehen","das Bein","die Fahrkarte","ehrlich gesagt","das Knie","die Schüssel","wollen","der Keks","abspielen","ich bin krank","das Taxi","der Pfeffer","das T-Shirt","die Butter","versuchen","der Lehrer"],"DEU-1000-04-LIST-5":["schwarz","das Eis","das Abendessen","weit","möchtest du","das Gefühl","Österreich","vorgestern","allein","leider Gottes","dagegen","die Wahrheit","ich bin einverstanden","leider","die Hilfe","der Sohn","zurück","schön","die Bedingung","der Flug"]},"DEU-1000-05":{"DEU-1000-05-LIST-1":["der Zucker","die Tochter","der Fisch","unterwegs","die Tomate","ist mir egal","der Staubsauger","der Samstag","es war schön","wofür","komisch","unter uns","das Shampoo","aber","der Muskel","endlich","übernachten","ganz schön","meistens","lassen"],"DEU-1000-05-LIST-2":["zahlen","sprechen","bereit","achtzehn","fertig","mit Vergnügen","die Allergie","beeilen","wie oft","daher","gegen","fotografieren","geduldig","abwaschen","das Kissen","nichts zu danken","antworten","der Knochen","ich brauche Hilfe","da"],"DEU-1000-05-LIST-3":["suchen","achtung","am","sechs","bewerben","klug","die Kartoffel","das Ei","der Schlüssel","guten Appetit","nicht so schnell","spät","bei","vielleicht","das Hotel","wie du meinst","bewegen","das Buch","krank","ernst"],"DEU-1000-05-LIST-4":["viel","oder","ich habe Schmerzen","die Kirche","hoffentlich","sich duschen","stimmt","der Parkplatz","als ob","bestimmt","das Feuer","an","schließen","alles","ich verstehe nicht","schnell","frei","auf keinen Fall","einmal","der Aufzug"],"DEU-1000-05-LIST-5":["mehr oder weniger","normalerweise","wünschen","frohes neues Jahr","grau","die Schule","hören","der Flughafen","die Schokolade","gute Reise","das reicht","der Schritt","die Tasche","groß","der Bus","dafür","soweit ich weiß","ansehen","der Erfolg","vier"]},"DEU-1000-06":{"DEU-1000-06-LIST-1":["die Ärztin","die Mikrowelle","der Backofen","erklären","neunzig","der Besuch","der Nachmittag","beim","schreib mir","der Rücken","die Erdbeere","kurz","über","die Polizei","darum","niemals","wir","überhaupt nicht","nehmen Sie Platz","das Papier"],"DEU-1000-06-LIST-2":["hallo","dort","nur","die Tür","laut","beschreiben","die Reise","mein","einladen","der Rock","das Zimmer","ich bin gespannt","bauen","die Jacke","die Arbeit","Polen","anprobieren","morgen","das Büro","die Flasche"],"DEU-1000-06-LIST-3":["das Huhn","der Balkon","ausmachen","langweilig","das Hemd","tun","das macht Sinn","am besten","ich habe keine Lust","die Gesundheit","bestellen","staubsaugen","der Briefkasten","der Anruf","wohin","aufnehmen","die Bibliothek","dunkel","super","das Wetter"],"DEU-1000-06-LIST-4":["die Zeit","vierzig","morgen Abend","der Geburtstag","allerdings","trinken","erinnern","das weiß ich nicht","der Ehemann","fünfzehn","ankommen","der Name","der Preis","der Mittag","das Geld","geschlossen","arbeiten","sogar","die Feier","die Straßenbahn"],"DEU-1000-06-LIST-5":["damals","sei vorsichtig","langsam","es gibt","der Föhn","so viel","darf ich mich vorstellen","heute","der Kaffee","alles Gute","ich","auf","der Löffel","der Bahnhof","während","so gesehen","links","das Frühstück","richtig","manchmal"]},"DEU-1000-07":{"DEU-1000-07-LIST-1":["wo ist die Toilette","dein","bevor","der Urlaub","tschüss","ich bin verheiratet","dreizehn","die Tante","das Brot","bleiben","wohl","lesen","das Kind","die Grenze","hungrig","aufmachen","der Rentner","was machen Sie","das Wort","viel Erfolg"],"DEU-1000-07-LIST-2":["das Gerät","nicht","die Zitrone","angenehm","viele","unten","das Cafe","das Auto","danach","breit","vierzehn","sich rasieren","umziehen","das Glas","es macht nichts","neunzehn","Tschechische Republik","außerdem","der Streit","der Fehler"],"DEU-1000-07-LIST-3":["der Erwachsene","nach Hause","die Schwester","da drüben","das Kino","hier","die Energie","aufstehen","die Gurke","das Fieber","der Hals","es geht mir gut","sehen","mehr","der Rucksack","ich bin dabei","vorhin","die Aufgabe","siebzig","lass mich in Ruhe"],"DEU-1000-07-LIST-4":["verspäten","das Gepäck","na klar","die E-Mail","starten","frohe Weihnachten","acht","herzlichen Glückwunsch","der Februar","ein großer Teil","falsch","neu","sechzehn","der Pullover","backen","die Stunde","verstehen","bringen","achtzig","verschieden"],"DEU-1000-07-LIST-5":["die Milch","der Akku","mit","beantworten","das Gesicht","nah","um","haben","jetzt","die Richtung","das Interesse","der Zahn","finden","die Musik","der Fahrstuhl","stehen","der Ausgang","der Spiegel","zumindest","tut mir leid"]},"DEU-1000-08":{"DEU-1000-08-LIST-1":["die Entscheidung","die Adresse","die Karotte","darauf","dann","der Oktober","die Millionen","der Computer","das Gewicht","sein","die Apotheke","bezahlen","das Konto","nehmen","fragen","zu","wissen","du bist dran","der Tee","der Juni"],"DEU-1000-08-LIST-2":["schwer","aufwachen","anfangen","frisch","bedeuten","der Krankenwagen","bis morgen","der Glückwunsch","verlassen","sowieso","weitermachen","helfen","gute Nacht","halb","zu viel","es stimmt","die Nachricht","müssen","der Chef","das Mittagessen"],"DEU-1000-08-LIST-3":["sehr","die Zahnpasta","das Geschenk","ja","viel Glück","dreißig","aber natürlich","das Medikament","ein","sofort","braun","abholen","die Bahn","na ja","neun","traurig","das Wohnzimmer","leihen","die Eltern","keine Zeit"],"DEU-1000-08-LIST-4":["der Bruder","verabschieden","vor","rot","ihr","kann sein","der Januar","umtauschen","der September","immer noch","ablehnen","der Salat","weiß","sich waschen","nochmal","das Krankenhaus","die Hand","los","immer","gut gemacht"],"DEU-1000-08-LIST-5":["gerne","schlecht","solange","der Wein","der Freund","das Fleisch","glatt","ich heiße","stimmt genau","der Geschmack","die Frage","putzen","danke","einerseits","die Rechnung bitte","der Morgen","klar","der Herbst","wenn","ausziehen"]},"DEU-1000-09":{"DEU-1000-09-LIST-1":["der Berg","zum Beispiel","ruf mich an","wie","nett","die Großmutter","telefonieren","zwanzig","der Ausflug","zehn","jedoch","lieb","und","das Sofa","der Mai","seit","kochen","bis später","sechzig","man"],"DEU-1000-09-LIST-2":["ich habe Durst","das Wasser","ich habe Hunger","der Lachs","überall","die Idee","stark","sich verabschieden","man sieht sich","der Topf","anschauen","das Herz","besser","wie bitte","der Teller","sich erinnern","die Ehefrau","deshalb","sicher","sich ausruhen"],"DEU-1000-09-LIST-3":["der Punkt","die Badewanne","der Vater","waschen","der Rabatt","auf jeden Fall","früher","ach was","der Garten","die Treppe","bald","kalt","das ist mir neu","der Stadtplan","wählen","da haben Sie recht","unter","davon","schreiben","die Toilette"],"DEU-1000-09-LIST-4":["ob","der Monat","es tut gut","das Obst","das Blut","die Brille","warten","das Gleichgewicht","der Job","das Bier","da stimme ich zu","besuchen","damit","die Bluse","getrennt","das Datum","was ist los","plötzlich","gehen wir","macht nichts"],"DEU-1000-09-LIST-5":["möglich","darf ich fragen","aufräumen","die Rechnung","lange","der Schutz","daneben","noch nicht","siebzehn","übersetzen","eng","der Beruf","die Hose","das Restaurant","hör auf","aufpassen","ruhig","das Licht","die Begeisterung","du hast recht"]},"DEU-1000-10":{"DEU-1000-10-LIST-1":["das Auge","der Onkel","der Wunsch","abnehmen","gut","der Kühlschrank","das Bett","zwölf","hell","wie geht es Ihnen","bei uns","die Entschuldigung","sich verlieben","zusammen","die Pfanne","das Getränk","alles zusammen","blau","anrufen","das Haar"],"DEU-1000-10-LIST-2":["wo wohnen Sie","die Uhr","das Handtuch","geben","die Hoffnung","schlaf gut","natürlich","das Flugzeug","lustig","zeigen","daran","der Sonntag","aufhören","wichtig","gestern","das Land","warm","draußen","die Mitte","bei mir"],"DEU-1000-10-LIST-3":["einfach","der Stau","das Mehl","die Familie","abschließen","es liegt an mir","der Donnerstag","atmen","die Bedeutung","der Mantel","die Nacht","benutzen","offen","jung","ehrlich","löschen","beide","der Regen","etwas anderes","tief"],"DEU-1000-10-LIST-4":["überhaupt","ich mache das","die Minute","das Dorf","das Rezept","kein Problem","tut mir leid","Deutschland","sie","der Unfall","rund","warum","schlafen","das Schweinefleisch","fünf","gleich","man weiß nie","die Erfahrung","übermorgen","die Sprache"],"DEU-1000-10-LIST-5":["guten Morgen","wo warst du","bereits","eins","laufen","keine Ahnung","eigentlich","der Zahnarzt","mir geht es gut","der Ausweis","beliebt","nie","darf ich reinkommen","der August","das Wochenende","das Haus","gehen","das Lebensmittel","der Winter","die Bedienung"]}};

// ===== DESTENI LISTS — permanent vocabulary =====
const DESTENI_DATA = {
  "self esteem": ["self assured","self confident","open","hopeful","compassionate","generous","spirited","lively","enthusiastic","passionate","committed","loving","giving","gentle","successful","courageous","happy","contented","relaxed","respectful","self respecting","healthy","fit","warm","caring","playful","decisive","positive","self esteem"],
  "motivation": ["passionate","self motivated","self directed","determined","goal directed","successful","focused","connected","clear headed","generating","persevering","confident","abundance","security","fearlessness","relaxed","resilient","goal orientated","warm open","honest","worthiness","faithful","unlimited"]
};


// ===== DEUTSCH MASTER 1000 — permanent vocabulary =====
const MASTER_DATA = {"MAS-1000-01": {"MAS-1000-01-LIST-1": ["Mindset", "Kotrolle", "Resilienz", "psychische", "Widerstandskraft", "Selbstwirksamkeit", "eigene Wirkung", "Entschlossenheit", "fester Wille", "Stringenz", "innere Logik", "Konsequenz", "Disziplin", "Selbstkontrolle", "Souveränität", "Überlegenheit", "Gelassenheit", "Klarheit", "gedankliche", "Präzision"], "MAS-1000-01-LIST-2": ["Zielstrebigkeit", "Fokus auf Ziele", "unterschütterlich", "Selbstbeherrschung", "Kotrolle über", "Emotionen", "prägnant", "auf den Punkt", "vehement", "mit Nachdruck", "dezidiert", "entschieden", "kompromisslos", "ohne Abweichung", "unmissverständlich", "eindeutig", "rigoros", "streng", "konsequent", "folgerichtig"], "MAS-1000-01-LIST-3": ["unnachgiebig", "nicht nachgebend", "standhaft", "stabil bleiben", "dominant", "bestimmend", "differenziert", "fein abgestuft", "analytisch", "logisch", "untersuchend", "reflektiert", "durchdacht", "nuanciert", "mit feinen", "Unterschieden", "kohärent", "zusammenhängend", "präzise", "genau"], "MAS-1000-01-LIST-4": ["stringend", "aufgebaut", "elaboriert", "ausgearbeitet", "subtil", "kaum merklich", "evident", "offensichtlich", "transformativ", "verändernd", "progressiv", "fortschrittlich", "exponentiell", "stark wachsend", "nachhaltig", "langfristig", "wirkend", "adaptiv", "anpassungsfähig", "dynamisch"], "MAS-1000-01-LIST-5": ["beweglich", "aktiv", "skalierbar", "erweiterbar", "visionär", "zukunftsorientiert", "disruptiv", "bestehendes", "brechend", "effizient", "mit wenig", "Aufwand", "viel erreichen", "systematisch", "planvoll", "methodisch", "nach Methode", "organisiert", "klar aufgebaut", "kohäsiv"]}, "MAS-1000-02": {"MAS-1000-02-LIST-1": ["verbindend", "konsistent", "gleichbleibend", "redundant", "überflüssig", "doppelt", "essentiell", "wesentlich", "elementar", "grundlegend", "prioritär", "vorrangig", "leidenschaftlich", "voller Energie", "obsessiv", "stark fixiert", "radikal", "extrem", "kompromittierend", "problematisch"], "MAS-1000-02-LIST-2": ["impulsiv", "spontan", "exzessiv", "übertrieben", "ekstatisch", "Begeisterung", "resolut", "entschlossen", "unerbittlich", "ohne Nachgeben", "heftig", "taktisch", "strategisch", "kalkuliert", "berechnet", "zielgerichtet", "auf ein Ziel", "ausgerichtet", "wenig Aufwand", "effektiv"], "MAS-1000-02-LIST-3": ["tatsächlich", "pragmatisch", "praktisch", "proaktiv", "voraus", "handelnd", "antizipierend", "voraussehend", "optimierend", "verbessernd", "renommiert", "angesehen", "etabliert", "gefestigt", "einflussreich", "Wirkung", "führend", "prävalent", "weit verbreitet", "signifikant"], "MAS-1000-02-LIST-4": ["bedeutsam", "maßgeblich", "entscheidend", "relevant", "wichtig", "prestigeträchtig", "mit Ansehen", "verbunden", "exponiert", "herausgehoben", "eloquent", "sprachgewandt", "charismatisch", "anziehend", "authentisch", "echt", "facettenreich", "vielschichtig", "detailliert", "pointiert"], "MAS-1000-02-LIST-5": ["zugespitzt", "ausdrucksstark", "wirkungsvoll", "stilprägend", "richtungsweisend", "paradigmisch", "beispielhaft", "ein Muster", "kontextuell", "vom Kontext", "abhöngig", "implizit", "indirekt", "explizit", "klar ausgesprochen", "konsolidieren", "festigen", "validieren", "bestätigen", "generieren"]}, "MAS-1000-03": {"MAS-1000-03-LIST-1": ["erzeugen", "implementieren", "umsetzen", "manifestieren", "sichtbar", "transzendieren", "über etwas", "hinausgehen", "mein Standard", "Klar im Kopf", "auf Zielkurs", "Priorität", "Relevanz", "Steuverlust", "Richtung", "kalibrieren", "orchestrieren", "synthetisieren", "zusammenführen", "integrieren"], "MAS-1000-03-LIST-2": ["einbinden", "differenzieren", "fein unterscheiden", "externalisieren", "nach außen", "internalisieren", "verinnerlichen", "determinieren", "festlegen", "komplex", "koordinieren", "antizipieren", "voraussehen", "etablieren", "verankern", "initiieren", "starten", "mobilisieren", "Kräfte bündeln", "aktivieren"], "MAS-1000-03-LIST-3": ["in Gang setzen", "übertragen", "übermitteln", "vermitteln", "weitergeben", "steuern", "kontrollieren", "prägen", "lenken", "beeinflussen", "Wirksamkeit", "expandieren", "ausweiten", "skalieren", "vergrößern", "multiplizieren", "vervielfachen", "erschließen", "zugänglich", "erweitern"], "MAS-1000-03-LIST-4": ["ausdehnen", "transformieren", "entwickeln", "fortführen", "gestalten", "reflektieren", "überdenken", "analysieren", "untersuchen", "hinterfragen", "prüfen", "justieren", "Einstellung", "anpassen", "angleichen", "modifizieren", "überarbeiten", "verifizieren", "überprüfen", "behaupten"], "MAS-1000-03-LIST-5": ["standhalten", "intensivieren", "steigern", "verstärken", "beschleunigen", "Tempo", "vorantreiben", "forcieren", "durchsetzen", "realisieren", "verwirklichen", "ausführen", "durchführen", "positionieren", "gezielt", "platzieren", "einführen", "formen", "konzipieren", "planen"]}, "MAS-1000-04": {"MAS-1000-04-LIST-1": ["vorausdenken", "stabilisieren", "absichern", "bewahren", "erhalten", "aufrechterhalten", "konstant", "beibehalten", "schützenswert", "erhöhen", "entfalten", "Potenzial", "erschaffen", "Finalität", "Konstanz", "Interdependenz", "wechselseitige", "Abhängigkeit", "Divergenzfähigkeit", "Fähigkeit"], "MAS-1000-04-LIST-2": ["zu differieren", "verschiedene", "Perspektiven", "kreativ", "abweichen", "Prävalenz", "Häufigkeit", "Antizipation", "Vorwegnahme", "Adaptivität", "Anpassungsfähigkeit", "Persistenz", "Durchhaltevermögen", "Kohäsion", "Zusammenhalt", "Operationalisierung", "messbar", "Spezifizierung", "Bestimmung", "Generalisierung"], "MAS-1000-04-LIST-3": ["Verallgemeinerung", "Differenzierungstiefe", "Genauigkeit", "Relativierung", "Einordnung", "Konsensbildung", "Einigung", "Validität", "Gültigkeit", "Konklusion", "Schlussfolgerung", "Prämisse", "Ausgangsannahme", "Implikation", "Mitbedeutung", "Explikation", "ausführliche", "Erklärung", "Klarstellung", "Verdeutlichung"], "MAS-1000-04-LIST-4": ["Ausdruckskraft", "Pointierung", "Zuspitzung", "Prägnanz", "kurz und klar", "Nuancierung", "Abstufung", "Differenzierung", "Unterscheidung", "Eloquenz", "Sprachgewandtheit", "Artikulation", "sprachlicher", "Ausdruck", "Kontext", "Tragfähigkeit", "Belastbarkeit", "Substanz", "inhaltliche Tiefe", "Beständigkeit"], "MAS-1000-04-LIST-5": ["dauerhaft", "Verlässligkeit", "Zuverlässigkeit", "Qualitätssicherung", "Sicherung", "des Standards", "Effektivität", "Effizienz", "Nutzen", "im Verhältnis", "Exzellenz", "herausragende", "Qualität", "Abstimmung", "Koordination", "Steuerung", "Kontrolle", "von Abläufen", "Vorgehensweise", "Planungssicherheit"]}, "MAS-1000-05": {"MAS-1000-05-LIST-1": ["Planbarkeit", "Ressourcen", "Verwaltung", "Einsatz", "Kostensenkung", "Willenstärke", "mentale Kraft", "Ausrichtung", "Unbeirrtheit", "unbeeinflussbar", "Standhaftigkeit", "Stabilität", "Haltung", "Härte", "Vehemenz", "Nachdruck", "Handlung", "Festlegung", "Formalisierung", "Gliederung"], "MAS-1000-05-LIST-2": ["Konfiguration", "Anordnung", "Architektur", "Aufbau", "Hierarchie", "Rangordnung", "Aggregation", "Zusammenführung", "Integration", "Einbindung", "Konsolidierung", "Festigung", "Kohärenz", "Zusammenhang", "Systematik", "Struktur", "Rekalibrierung", "Neueinstellung", "Optimierung", "Verbesserung"], "MAS-1000-05-LIST-3": ["Modulation", "Progression", "Evolution", "Entwicklung", "Relevanzsteigerung", "Bedeutungszuwachs", "Überzeugungskraft", "Wirkmacht", "Präsenz", "Ausstrahlung", "Dominanz", "Durchsetzungskraft", "Anerkennung", "Autorität", "Legitimation", "Rechtfertigung", "Einflussnahme", "Argumentation", "Divergenz", "Konvergenz"], "MAS-1000-05-LIST-4": ["Annäherung", "Abstraktion", "Vereinfachung", "Ambiguität", "Mehrdeutigkeit", "Kognition", "Verarbeitung", "Induktion", "vom Besonderen", "aufs Allgemeine", "Deduktion", "Perzeption", "Wahrnehmung", "wirtschaftlichen", "Zwecken dienen", "Konstruktion", "Zurückhaltung", "Wahrheit", "Effekthascherei", "gehobene Sprache"], "MAS-1000-05-LIST-5": ["insofern", "insoweit", "dementsprechend", "nichtsdestotrotz", "gleichwohl", "ferner", "überdies", "zudem", "folglich", "demzufolge", "kritisch", "Ansatz", "interessant", "argumentieren", "konstatieren", "feststellen", "unterscheiden", "präzisieren", "ganauer machen", "resümieren"]}, "MAS-1000-06": {"MAS-1000-06-LIST-1": ["zusammenfassen", "implizieren", "andeuten", "Hinblick auf", "hinsichtlich", "Berücksichtigung", "auf Grundlage", "von Relevanz", "plausibel", "stringent", "ambivalent", "substanziell", "problematisieren", "es obliegt", "evaluieren", "sich positionieren", "entgegnen", "widersprechen", "belegen", "begründen"], "MAS-1000-06-LIST-2": ["herleiten", "schlussfolgern", "einräumen", "relativieren", "pauschal", "nachvollziehbar", "schlüssig", "Darstellung", "in Relation", "in Frage", "zur Disposition", "im Hinblick", "Idee", "funktionieren", "wissenschaftlich", "hypothetisch", "kausal", "empirisch", "reproduzierbar", "valide"], "MAS-1000-06-LIST-3": ["statistisch", "Auswertung", "korrelieren", "Datenlage", "Ursache", "Weltschöpfung", "Skalierbarkeit", "Marktdurchdringung", "Wettbewerbsvorteil", "Rendite", "Liquidität", "Kapitalfluss", "Kostenstruktur", "delegieren", "Umsetzung", "Strategie", "rentabel", "volatil", "resilient", "ineffizient"], "MAS-1000-06-LIST-4": ["kostenintensiv", "wachstumsorientiert", "marktkonform", "risikobehaftet", "zukunftsfähig", "Modell", "kurzfristig", "ökonomisch", "Faktoren", "im Rahmen", "Datenanalyse", "Hintergrund", "strukturell", "Veränderung", "in Bezug", "Dienstleitung", "Marktmechanismus", "Gesichtspunkt", "adoptieren", "finalisieren"], "MAS-1000-06-LIST-5": ["abschließen", "verbindlich", "autorisiert", "dekretieren", "anordnen", "beschließen", "priorisieren", "Geschäftsführung", "monitoren", "überwachen", "regulieren", "auditieren", "benchmarken", "messen", "einstellen", "optimieren", "standardisieren", "kontinuierlich", "organisieren", "dezentralisieren"]}, "MAS-1000-07": {"MAS-1000-07-LIST-1": ["modularisieren", "harmonisieren", "Unternehmen", "erfolgreich", "diversifizieren", "verteilen", "Budget", "Projekt", "Bereich", "Risiko", "Portfolio", "Immobilien", "Anleihen", "Investition", "Gewinn", "Technologie", "Beteiligung", "Vermögenswert", "Gegenteil", "vorhanden"], "MAS-1000-07-LIST-2": ["liquidieren", "auflösen", "monetarisieren", "Plattform", "umwandeln", "Daten", "Nutzerbasis", "Wechselkurs", "Bilanz", "Governance", "Skalierung", "Expansion", "Innovation", "Akquisition", "Wachstum", "Kapitalisierung", "Markterschließung", "Ertragssteigerung", "Liquidation", "Finanzierung"], "MAS-1000-07-LIST-3": ["Abschreibung", "Bewertung", "Rentabilität", "Budgetierung", "Allokation", "Absicherung", "Risikomanagement", "Volatilität", "Unsicherheit", "Korrelation", "Monitoring", "Evaluation", "Validierung", "Compliance", "Mitigation", "Eindämmung", "Risikoreduktion", "Analyse", "Interpretation", "Qualifizierung"], "MAS-1000-07-LIST-4": ["Prognose", "Zentralisierung", "Infrastruktur", "Synchronisation", "Harmonisierung", "Automatisierung", "Digitalisierung", "Prozessoptimierung", "Organisation", "Umsatzprognose", "Klimamodell", "auf Augenhöhe", "Verständnis", "Vertrauensbasis", "Anbindung", "Resonanz", "Verbindung", "empathisch", "Vertrauen", "kommunizieren"], "MAS-1000-07-LIST-5": ["aktiv zuhören", "spiegeln", "konfrontieren", "ansprechen", "formulieren", "ausdrücken", "wahrnehmen", "einfühlen", "verletzlich", "irritiert", "enttäuscht", "betroffen", "emotional", "distanziert", "askalieren", "Spannung", "Konflikt", "Missverständnis", "Grenzen setzen", "kompensieren"]}, "MAS-1000-08": {"MAS-1000-08-LIST-1": ["adressieren", "kooperieren", "interagieren", "sich abgrenzen", "dominieren", "unterordnen", "interpretieren", "Auftreten", "Integrität", "Standpunkt", "vertreten", "zwischenmenschlich", "Verhalten", "Manipulation", "Intelligenz", "Gespräch", "angemessen", "Option", "Details", "Weichen stellen"], "MAS-1000-08-LIST-2": ["Impulse setzen", "unter Abwägung", "Balanceakt", "im Einklang", "Richtlinien", "Ebene", "Partner", "Zuständigkeitbereich", "Vorgaben", "Spannungsfeld", "Rahmenbedingungen", "Führungskompetenz", "Gesprächsbedarf", "respektieren", "reduzieren", "Sichtweise", "Lösung", "Dialog", "beruhigend", "deeskalierend"], "MAS-1000-08-LIST-3": ["Verpflichtung", "Kurzform", "Neutralität", "diplomatisch", "Betrachtung", "Umfeld", "Handlungsbedarf", "Effekt", "abwägen", "Fokus", "Austausch", "Perspektivwechsel", "Strukturreform", "Konsensfähigkeit", "Entwicklungsprozess", "Steuermechanismus", "Aussage", "Unschärfe", "Diskussion", "Offenheit"], "MAS-1000-08-LIST-4": ["Sprachrhythmus", "Satzbau", "Debatte", "Meeting", "anspruchsvoll", "Theorie", "Einstieg", "zentraler Punkt", "Leseart", "Zustimmng", "Ablehnung", "Einschätzung", "konstruktiv", "Ableitung", "Zielsetzung", "logischer Bruch", "ergänzend", "alternativ", "zusätzlich", "erweitert"], "MAS-1000-08-LIST-5": ["vergleichend", "Empfehlung", "nächste Schritte", "final", "konkret", "gemeinsam", "Position", "Meinung", "Einwand", "Kritik", "Widerspruch", "Abweichung", "Rückfrage", "im Begriff", "Verkaufspreis", "Marge", "Gewinnspanne", "Herstellungskosten", "Produkt", "profitabel"]}, "MAS-1000-09": {"MAS-1000-09-LIST-1": ["Kerngeschäft", "Profitabilität", "Fixkosten", "Ertragskraft", "Wachstumstreiber", "Kundenakquise", "Geschäftsmodell", "Roadmap", "Szenarien", "Entscheidungsgrundlage", "Risikoprofil", "Kausalität", "Team", "Stakeholder", "Führungsebene", "Management", "Vorstand", "Eigenkapital", "Vermögen", "Assets"], "MAS-1000-09-LIST-2": ["Exit", "Renditeerwartung", "Krisenfestigkeit", "Disruption", "Cashflow", "Zielbild", "Mission", "Alignment", "Marktanteil", "Marktposition", "Segmentierung", "Internationalisierung", "Globalisierung", "Agilität", "Feedback", "Zyklus", "eigenverantwortlich", "Sprint", "Retrospektive", "iterativ"], "MAS-1000-09-LIST-3": ["flexibel", "kundenorientiert", "Marktveränderung", "Diagnose", "Consulting", "Ausgangslage", "Status quo", "Dynamik", "Verlauf", "Tendenz", "Gesamtsituation", "Herausforderung", "Problematik", "Schwachstelle", "Engpass", "Ineffizienz", "Reibungsverlust", "Dysfunktion", "Inkonsistenz", "Diskrepanz"], "MAS-1000-09-LIST-4": ["Defizit", "Treiber", "Einflussfaktor", "Mechanismus", "Wechselwirkung", "Bedingung", "Trend", "Fortschritt", "Regression", "Auswirkung", "Resultat", "Ergebnis", "Folgewirkung", "Tragweite", "Intervention", "erforderlich", "ursächlich", "nicht linear", "Verschiebung", "Dimension"], "MAS-1000-09-LIST-5": ["identifizieren", "wechselseitig", "kennzeichnen", "heterogen", "Gesamtbild", "interpretierbar", "Wahrnehmng", "Realität", "Schwäche", "Verknüpfung", "zurückführen", "isolierbar", "unterschätzen", "belastbar", "vollständig", "tragfähig", "Kombination", "Bürokratie", "Rechtssicherheit", "Nachvollziehbarkeit"]}, "MAS-1000-10": {"MAS-1000-10-LIST-1": ["Verlässlichkeit", "Überregulierung", "Verzägerung", "Flexibilität", "adminitrativ", "operativ", "Geschwindigkeit", "Konjunktur", "Marktverzerrung", "Inflation", "Preisdynamik", "Anfälligkeit", "Deutung", "Inszinierung", "Dramaturgie", "Metapher", "Subtext", "Narrativ", "Präzenz", "innovativ"], "MAS-1000-10-LIST-2": ["konventionell", "avantgardistisch", "klischeehaft", "minimalistisch", "fragmentiert", "experimentell", "Rezeption", "Publikum", "Massentauglichkeit", "Zeitgeist", "Polarisierung", "Diskurs", "Ästhetik", "charmant", "ironisch", "rhetorisch", "leichtfüßig", "paradox", "metaphorisch", "Akzeptanz"], "MAS-1000-10-LIST-3": ["Selbstachtung", "Selbstwertgefühl", "Kongruenz", "Vereinbarkeit", "nonverbal", "Glaubwürdigkeit", "Stabilitätsfaktor", "Stressregulation", "Denkmuster", "Kumminikationsstil", "Lernprozess", "Interessenzkonflikt", "Entscheidungsfindung", "Rechenschaftspflicht", "Eigenverantwortung", "Handlungsfähigkeit", "Entscheidungsgewalt", "Weitsicht", "Durchsetzungsstärke", "Risikobereitschaft"], "MAS-1000-10-LIST-4": ["Leistungskultur", "Unternehmenskultur", "Verbindlichkeit", "Schlagkraft", "Eigeninitiative", "Wettbewerbsfähigkeit", "Nachhaltigkeit", "Priorisierung", "Ergebnisorientierung", "Transparenz", "Leitbild", "Selbstdisziplin", "strukturieren", "verantworten", "ergebnisorientiert", "vorausschauend", "lösungsorientiert", "unternehmerisch", "Handlungskompetenz", "Entscheidungsfreude"], "MAS-1000-10-LIST-5": ["Führungsstärke", "Pionierarbeit", "Risikoabwägung", "Urteilsfähigkeit", "Durchhaltekraft", "Gestaltungskraft", "Eigenständigkeit", "Beharrlichkeit", "Fokussierung", "Menschenkenntnis", "Konfliktfähigkeit", "überzeugen", "verhandeln", "visualisieren", "inspirieren", "prägend", "souverän", "wegweisend", "fokussiert", "führungsstark"]}};

// ===== CATALOG — top-level groups =====
// Each group has 5 sublists of 20 words
const GROUPS = Object.keys(WORD_DATA); // ['DEU-1000-01'..'DEU-1000-10']

// DEU-2000 — coming soon
const COMING_SOON_GROUPS = ['DEU-2000'];

// ===== LOCAL STORAGE — custom lists from editor =====
const LS_KEY = 'tool_custom_lists';
function getCustomLists() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch { return []; }
}
function saveCustomLists(lists) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(lists)); } catch {}
}

// ===== STATE
const TIMINGS       = [1, 0.5, 0.25, 0.125, 0.05];
const TIMING_LABELS = ['1s', '0.5s', '0.25s', '0.125s', '0.05s'];
let timingIdx = 2;
let shuffleMode = false;

function toggleShuffle() {
  shuffleMode = !shuffleMode;
  document.querySelectorAll('.shuffle-toggle').forEach(btn => {
    btn.classList.toggle('shuffle-active', shuffleMode);
    btn.textContent = shuffleMode ? '⇄ Shuffle' : '↓ Order';
  });
}
let sessionActive = false;
let paused = false;
let waitingForNext = false;  // true after answer checked, waiting for Space/Enter
let flashTimeout = null;

// Bibliothek navigation state
// activeSection: 'builtin' | 'custom'
// activeGroup: e.g. 'DEU-1000-03' (or null)
// hoveredSubId / selectedSubIds (up to 5)
let activeSection   = 'builtin';
let activeGroup     = null;
let hoveredSubId    = null;
let bibSelectedIds  = [];  // sublist IDs, max 5

// Session state
let queue = [], retryQueue = [], currentWord = '', totalWords = 0, correctCount = 0, currentTitle = '';
let readyToBegin = false;
let listQueue = [], originalWords = [], savedListQueue = [];
let hadRetry = false;  // true if any word ever went into retryQueue this session

// ===== NAVIGATION
function guardedNav(name) {
  if (sessionActive) { pauseSession('nav'); return; }
  if (name === 'stage') { goToHomeTool(); return; }
  showPage(name);
}

function goToHomeTool() {
  sessionActive = false; paused = false; waitingForNext = false; readyToBegin = false;
  clearTimeout(flashTimeout);
  queue = []; retryQueue = []; currentWord = ''; totalWords = 0; correctCount = 0;
  currentTitle = ''; listQueue = []; savedListQueue = []; originalWords = [];
  showPage('stage'); hidePause(); hideFinish();
  document.getElementById('tool-list-name').textContent = '—';
  document.getElementById('flash-word').textContent = t('flash_ready');
  document.getElementById('flash-word').style.opacity = '1';
  document.getElementById('word-input').disabled = true;
  document.getElementById('word-input').value = '';
  document.getElementById('start-btn').textContent = t('btn_start');
  document.getElementById('start-btn').style.display = 'block';
  document.getElementById('progress-row').style.display = 'none';
  document.getElementById('no-list-hint').innerHTML = t('no_list_hint');
  document.getElementById('no-list-hint').style.display = 'block';
  document.getElementById('feedback-dot').className = 'feedback-dot';
  document.getElementById('reveal-word').textContent = '';
  document.getElementById('reveal-word').className = 'reveal-word';
  readyToBegin = false;
}

function handleStartBtn() {
  if (!queue.length && !retryQueue.length) {
    goToBibliothek();
  } else {
    startSession();
  }
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const map = { stage: 'nav-stage', bibliothek: 'nav-bib', editor: 'nav-editor' };
  document.getElementById(map[name]).classList.add('active');
  if (name === 'bibliothek') renderBib();
}

// ===== TIMING
function renderTimingDots() {
  const c = document.getElementById('timing-dots');
  c.innerHTML = '';
  TIMINGS.forEach((t, i) => {
    if (i > 0) { const l = document.createElement('div'); l.className = 'timing-line'; c.appendChild(l); }
    const d = document.createElement('div');
    d.className = 'timing-dot' + (i === timingIdx ? ' active' : '');
    d.onclick = () => { timingIdx = i; renderTimingDots(); };
    c.appendChild(d);
  });
  document.getElementById('timing-val').textContent = TIMING_LABELS[timingIdx];
}

// ===== EDITOR
function renderEditor() {
  const grid = document.getElementById('editor-grid');
  grid.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const item = document.createElement('div');
    item.className = 'editor-item';
    item.innerHTML = `<span class="editor-num">${i+1}.</span><input class="editor-field" id="ef-${i}" placeholder="${t('editor_field_placeholder')}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onblur="compactEditor()" />`;
    grid.appendChild(item);
  }
  // Track manual edits on the list name so auto-name does not override user choices
  const nameEl = document.getElementById('list-name');
  if (!nameEl._autoNameListenerAdded) {
    nameEl._autoNameListenerAdded = true;
    nameEl.addEventListener('input', () => {
      const defaultNames = [STRINGS.en.editor_default_name, STRINGS.de.editor_default_name];
      if (defaultNames.includes(nameEl.value.trim()) || nameEl.value.trim() === '') {
        delete nameEl.dataset.userEdited;
      } else if (nameEl.dataset.autoNamed !== '1') {
        nameEl.dataset.userEdited = '1';
      }
    });
  }
}
function compactEditor() {
  const vals = [];
  for (let i = 0; i < 20; i++) { const v = document.getElementById('ef-'+i).value.trim(); if(v) vals.push(v); }
  for (let i = 0; i < 20; i++) { document.getElementById('ef-'+i).value = vals[i] || ''; }
  // Auto-name: field 1 is always the list name, unless the user has manually changed it
  const nameEl = document.getElementById('list-name');
  if (!nameEl.dataset.userEdited) {
    nameEl.value = vals[0] || t('editor_default_name');
    nameEl.dataset.autoNamed = '1';
  }
}
function setFieldError(i) { document.getElementById('ef-'+i).parentElement.classList.add('editor-item-error'); }
function clearFieldError(i) { document.getElementById('ef-'+i)?.parentElement.classList.remove('editor-item-error'); }
function clearAllErrors() {
  for (let i=0;i<20;i++) clearFieldError(i);
  const m = document.getElementById('editor-error'); if(m) { m.style.display='none'; }
}
function showEditorMsg(txt, ok) {
  let m = document.getElementById('editor-error');
  if(!m){ m=document.createElement('div'); m.id='editor-error'; document.getElementById('editor-grid').after(m); }
  m.className = ok ? 'editor-error-msg editor-success-msg' : 'editor-error-msg';
  m.textContent = txt; m.style.display = 'block';
}
function getValidatedWords() {
  compactEditor(); clearAllErrors();
  const name = document.getElementById('list-name').value.trim();
  if (!name) { document.getElementById('list-name').classList.add('input-error'); showEditorMsg(t('err_list_name')); return null; }
  document.getElementById('list-name').classList.remove('input-error');
  const words = [];
  for (let i=0;i<20;i++) { const v=document.getElementById('ef-'+i).value.trim(); if(v) words.push(v); }
  if (words.length < 1) { showEditorMsg(t('err_min_words')); return null; }
  return words;
}
function deleteCustomList(id) {
  let customs = getCustomLists();
  customs = customs.filter(l => l.id !== id);
  saveCustomLists(customs);
  // Remove from selection if it was selected
  bibSelectedIds = bibSelectedIds.filter(sid => sid !== id);
  renderBib();
}

function saveList() {
  const words = getValidatedWords(); if(!words) return;
  const name = document.getElementById('list-name').value.trim();
  const customs = getCustomLists();
  if (customs.length >= 10) {
    showEditorMsg(t('err_max_lists'));
    return;
  }
  customs.push({ id: 'custom_'+Date.now(), name, words });
  saveCustomLists(customs);
  showEditorMsg(t('msg_saved', name, words.length), true);
}
function loadList() {
  // Load from localStorage: show a picker if multiple lists exist
  const customs = getCustomLists();
  if (!customs.length) { showEditorMsg(t('err_no_lists')); return; }
  if (customs.length === 1) { fillEditorFromList(customs[0]); return; }
  // Multiple: show inline picker
  showListPicker(customs);
}

function showListPicker(customs) {
  let existing = document.getElementById('editor-list-picker');
  if (existing) existing.remove();
  const picker = document.createElement('div');
  picker.id = 'editor-list-picker';
  picker.className = 'editor-list-picker';
  picker.innerHTML = '<div class="picker-label">' + t('picker_label') + '</div>' +
    customs.map((l, i) =>
      `<div class="picker-item" onclick="pickList(${i})">${l.name} <span class="picker-count">${t('bib_word_count', l.words.length)}</span></div>`
    ).join('') +
    '<div class="picker-cancel" onclick="document.getElementById(\'editor-list-picker\').remove()">' + t('picker_cancel') + '</div>';
  const grid = document.getElementById('editor-grid');
  grid.parentElement.insertBefore(picker, grid);
}

function pickList(i) {
  const customs = getCustomLists();
  if (customs[i]) fillEditorFromList(customs[i]);
  const picker = document.getElementById('editor-list-picker');
  if (picker) picker.remove();
}

function fillEditorFromList(list) {
  document.getElementById('list-name').value = list.name || t('editor_loaded_name');
  for (let i = 0; i < 20; i++) {
    const f = document.getElementById('ef-' + i);
    if (f) f.value = list.words[i] || '';
  }
  compactEditor(); clearAllErrors();
  showEditorMsg(t('msg_loaded', list.name, list.words.length), true);
}

function resetEditor() {
  const nameEl = document.getElementById('list-name');
  nameEl.value = t('editor_default_name');
  delete nameEl.dataset.userEdited;
  delete nameEl.dataset.autoNamed;
  for (let i = 0; i < 20; i++) { const f = document.getElementById('ef-' + i); if (f) f.value = ''; }
  clearAllErrors();
  const m = document.getElementById('editor-error'); if (m) m.style.display = 'none';
}

function exportListToFile() {
  const name = document.getElementById('list-name').value.trim();
  if (!name) { showEditorMsg(t('err_list_name')); return; }
  const words = [];
  for (let i = 0; i < 20; i++) { const v = document.getElementById('ef-'+i)?.value.trim(); if (v) words.push(v); }
  if (words.length < 1) { showEditorMsg(t('err_min_words')); return; }
  const data = { name, words };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name.replace(/[^a-zA-Z0-9äöüÄÖÜß\-_ ]/g, '_') + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showEditorMsg(t('msg_downloaded', a.download), true);
}

function importFromFile() { document.getElementById('file-input-import').click(); }

function onFileImport(e) {
  const file = e.target.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = (ev) => {
    try {
      const d = JSON.parse(ev.target.result);
      if (!d.words?.length) { showEditorMsg(t('err_invalid_file')); return; }
      document.getElementById('list-name').value = d.name || t('editor_loaded_name');
      for (let i = 0; i < 20; i++) { const f = document.getElementById('ef-' + i); if (f) f.value = d.words[i] || ''; }
      compactEditor(); clearAllErrors();
      showEditorMsg(t('msg_file_loaded', d.name || t('editor_unnamed'), d.words.length), true);
    } catch { showEditorMsg(t('err_file_load')); }
  };
  r.readAsText(file); e.target.value = '';
}
function playEditor() {
  const words = getValidatedWords(); if(!words) return;
  const name = document.getElementById('list-name').value.trim();
  listQueue=[]; startStage(shuffleMode ? shuffle([...words]) : [...words], name);
}

// ===== BIBLIOTHEK
function renderBib() {
  renderBibLeft();
  renderBibMid();
  renderBibSlots();
  updateBibPlayBtn();
}

// ===== BIBLIOTHEK — accordion state
let openProgram = null;

function renderBibLeft() {
  const col = document.getElementById('bib-col-groups');
  col.innerHTML = '';

  // Helper: build one accordion entry
  function makeAccordion({ id, label, badge, coming, children }) {
    const isOpen = openProgram === id;

    const header = document.createElement('div');
    header.className = 'bib-accordion-header'
      + (coming ? ' bib-accordion-coming' : '')
      + (isOpen  ? ' open' : '');
    header.innerHTML = `
      <span class="bib-accordion-label">${label}</span>
      ${badge ? `<span class="bib-group-badge">${badge}</span>` : ''}
      <span class="bib-accordion-arrow">${isOpen ? '▾' : '▸'}</span>
    `;

    if (!coming) {
      header.onclick = () => {
        openProgram = isOpen ? null : id;
        if (!openProgram) { activeGroup = null; activeSection = null; }
        renderBibLeft();
        renderBibMid();
      };
    }

    col.appendChild(header);

    if (isOpen && children) {
      const body = document.createElement('div');
      body.className = 'bib-accordion-body';
      children(body);
      col.appendChild(body);
    }
  }

  // Deutsch 1000
  const deu1000Selected = bibSelectedIds.filter(id => GROUPS.some(g => id.startsWith(g + '-LIST-')));
  makeAccordion({
    id: 'deu1000',
    label: 'Deutsch 1000',
    badge: deu1000Selected.length || null,
    children: (body) => {
      GROUPS.forEach((gid, idx) => {
        const isActive     = activeGroup === gid && activeSection === 'builtin';
        const subsSelected = bibSelectedIds.filter(id => id.startsWith(gid + '-LIST-'));
        const row          = document.createElement('div');
        row.className = 'bib-group-row' + (isActive ? ' active' : '') + (subsSelected.length ? ' has-selection' : '');
        row.innerHTML = `<span class="bib-group-name">${idx + 1}</span>${subsSelected.length ? `<span class="bib-group-badge">${subsSelected.length}</span>` : ''}`;
        row.onclick = () => { activeGroup = gid; activeSection = 'builtin'; renderBibLeft(); renderBibMid(); };
        body.appendChild(row);
      });
    }
  });

  // Deutsch Master 1000
  const masterGroups = Object.keys(MASTER_DATA);
  const masterSelected = bibSelectedIds.filter(id => masterGroups.some(g => id.startsWith(g + '-LIST-')));
  makeAccordion({
    id: 'master1000',
    label: 'Deutsch Master 1000',
    badge: masterSelected.length || null,
    children: (body) => {
      masterGroups.forEach((gid, idx) => {
        const isActive     = activeGroup === gid && activeSection === 'master';
        const subsSelected = bibSelectedIds.filter(id => id.startsWith(gid + '-LIST-'));
        const row          = document.createElement('div');
        row.className = 'bib-group-row' + (isActive ? ' active' : '') + (subsSelected.length ? ' has-selection' : '');
        row.innerHTML = `<span class="bib-group-name">${idx + 1}</span>${subsSelected.length ? `<span class="bib-group-badge">${subsSelected.length}</span>` : ''}`;
        row.onclick = () => { activeGroup = gid; activeSection = 'master'; renderBibLeft(); renderBibMid(); };
        body.appendChild(row);
      });
    }
  });

  // Desteni — direct: click shows lists straight in col 2, no accordion body
  const desteniSelected = bibSelectedIds.filter(id => id.startsWith('desteni__'));
  const desteniActive = activeSection === 'desteni';
  {
    const header = document.createElement('div');
    header.className = 'bib-accordion-header' + (desteniActive ? ' open' : '');
    header.innerHTML = `
      <span class="bib-accordion-label">Desteni</span>
      ${desteniSelected.length ? `<span class="bib-group-badge">${desteniSelected.length}</span>` : ''}
    `;
    header.onclick = () => {
      if (desteniActive) {
        activeSection = null; activeGroup = null;
      } else {
        activeSection = 'desteni'; activeGroup = '__desteni__';
        openProgram = 'desteni';
      }
      renderBibLeft(); renderBibMid();
    };
    col.appendChild(header);
  }

  // Eigene Listen — direct: click shows lists straight in col 2, no accordion body
  const customs        = getCustomLists();
  const customSelected = bibSelectedIds.filter(id => customs.some(l => l.id === id));
  const customActive   = activeSection === 'custom';
  {
    const header = document.createElement('div');
    header.className = 'bib-accordion-header' + (customActive ? ' open' : '');
    header.innerHTML = `
      <span class="bib-accordion-label">${t('prog_custom')}</span>
      ${customSelected.length ? `<span class="bib-group-badge">${customSelected.length}</span>` : ''}
    `;
    header.onclick = () => {
      if (customActive) {
        activeSection = null; activeGroup = null;
      } else {
        activeSection = 'custom'; activeGroup = '__custom__';
        openProgram = 'custom';
      }
      renderBibLeft(); renderBibMid();
    };
    col.appendChild(header);
  }
}

function renderBibMid() {
  const col = document.getElementById('bib-col-sublists');
  const preview = document.getElementById('bib-col-preview');
  col.innerHTML = '';

  if (!activeGroup) {
    col.innerHTML = `<div class="bib-placeholder">${t('bib_pick_program')}</div>`;
    preview.innerHTML = `<div class="bib-placeholder">${t('bib_pick_list')}</div>`;
    return;
  }

  if (activeSection === 'desteni') {
    Object.entries(DESTENI_DATA).forEach(([listName, words]) => {
      const id = 'desteni__' + listName;
      const isSel = bibSelectedIds.includes(id);
      const row = document.createElement('div');
      row.className = 'bib-sub-row' + (isSel ? ' selected' : '');
      row.innerHTML = `<span class="bib-sub-name">${listName}</span><span class="bib-sub-count">${t('bib_word_count', words.length)}</span>`;
      row.onclick = () => toggleSub(id, listName, words);
      row.onmouseenter = () => { hoveredSubId = id; renderPreview(words, listName); };
      row.onmouseleave = () => { hoveredSubId = null; renderPreviewFromSelected(); };
      col.appendChild(row);
    });
    renderPreviewFromSelected();
    return;
  }

  if (activeSection === 'custom') {
    // Show all custom lists as sub-rows, each with a delete button
    const customs = getCustomLists();
    if (!customs.length) {
      col.innerHTML = `<div class="bib-placeholder">${t('bib_no_custom')}</div>`;
      preview.innerHTML = '<div class="bib-placeholder">—</div>';
      return;
    }
    customs.forEach(list => {
      const isSel = bibSelectedIds.includes(list.id);
      const row = document.createElement('div');
      row.className = 'bib-sub-row' + (isSel ? ' selected' : '');
      row.innerHTML = `<span class="bib-sub-name">${list.name}</span><span class="bib-sub-count">${t('bib_word_count', list.words.length)}</span><span class="bib-sub-delete" title="${t('bib_delete_title')}">✕</span>`;
      row.querySelector('.bib-sub-name').onclick = (e) => { e.stopPropagation(); toggleSub(list.id, list.name, list.words); };
      row.querySelector('.bib-sub-count').onclick = (e) => { e.stopPropagation(); toggleSub(list.id, list.name, list.words); };
      row.querySelector('.bib-sub-delete').onclick = (e) => { e.stopPropagation(); deleteCustomList(list.id); };
      row.onmouseenter = () => { hoveredSubId = list.id; renderPreview(list.words, list.name); };
      row.onmouseleave = () => { hoveredSubId = null; renderPreviewFromSelected(); };
      col.appendChild(row);
    });
    renderPreviewFromSelected();
    return;
  }

  // Master sublists
  if (activeSection === 'master') {
    const subs = MASTER_DATA[activeGroup];
    if (!subs) return;
    Object.entries(subs).forEach(([subId, words], idx) => {
      const isSel  = bibSelectedIds.includes(subId);
      const label  = t('bib_list_label', idx + 1);
      const row    = document.createElement('div');
      row.className = 'bib-sub-row' + (isSel ? ' selected' : '');
      row.innerHTML = `<span class="bib-sub-name">${label}</span><span class="bib-sub-count">${t('bib_word_count', words.length)}</span>`;
      row.onclick      = () => toggleSub(subId, label, words);
      row.onmouseenter = () => { hoveredSubId = subId; renderPreview(words, label); };
      row.onmouseleave = () => { hoveredSubId = null;  renderPreviewFromSelected(); };
      col.appendChild(row);
    });
    renderPreviewFromSelected();
    return;
  }

  // Built-in sublists
  const subs = WORD_DATA[activeGroup];
  if (!subs) return;

  Object.entries(subs).forEach(([subId, words], idx) => {
    const isSel  = bibSelectedIds.includes(subId);
    const label  = t('bib_list_label', idx + 1);
    const row    = document.createElement('div');
    row.className = 'bib-sub-row' + (isSel ? ' selected' : '');
    row.innerHTML = `<span class="bib-sub-name">${label}</span><span class="bib-sub-count">${t('bib_word_count', words.length)}</span>`;
    row.onclick      = () => toggleSub(subId, label, words);
    row.onmouseenter = () => { hoveredSubId = subId; renderPreview(words, label); };
    row.onmouseleave = () => { hoveredSubId = null;  renderPreviewFromSelected(); };
    col.appendChild(row);
  });

  renderPreviewFromSelected();
}

function renderPreviewFromSelected() {
  if (activeSection === 'master') {
    const masterGroups = Object.keys(MASTER_DATA);
    const lastSel = bibSelectedIds.filter(id => masterGroups.some(g => id.startsWith(g + '-LIST-'))).slice(-1)[0];
    if (lastSel) {
      for (const gid of masterGroups) {
        if (MASTER_DATA[gid]?.[lastSel]) { renderPreview(MASTER_DATA[gid][lastSel], lastSel); return; }
      }
    }
    if (activeGroup && MASTER_DATA[activeGroup]) {
      const firstSub = Object.keys(MASTER_DATA[activeGroup])[0];
      renderPreview(MASTER_DATA[activeGroup][firstSub], firstSub);
    } else {
      document.getElementById('bib-col-preview').innerHTML = '<div class="bib-placeholder">—</div>';
    }
    return;
  }
  if (activeSection === 'desteni') {
    const lastSel = bibSelectedIds.filter(id => id.startsWith('desteni__')).slice(-1)[0];
    if (lastSel) {
      const listName = lastSel.replace('desteni__', '');
      if (DESTENI_DATA[listName]) { renderPreview(DESTENI_DATA[listName], listName); return; }
    }
    const first = Object.keys(DESTENI_DATA)[0];
    if (first) { renderPreview(DESTENI_DATA[first], first); return; }
    document.getElementById('bib-col-preview').innerHTML = '<div class="bib-placeholder">—</div>';
    return;
  }
  if (activeSection === 'custom') {
    const customs = getCustomLists();
    const lastSel = bibSelectedIds.filter(id => customs.some(l => l.id === id)).slice(-1)[0];
    if (lastSel) {
      const list = customs.find(l => l.id === lastSel);
      if (list) { renderPreview(list.words, list.name); return; }
    }
    if (customs.length) { renderPreview(customs[0].words, customs[0].name); return; }
    document.getElementById('bib-col-preview').innerHTML = '<div class="bib-placeholder">—</div>';
    return;
  }
  const lastSel = bibSelectedIds[bibSelectedIds.length - 1];
  if (lastSel && WORD_DATA[activeGroup]?.[lastSel]) {
    renderPreview(WORD_DATA[activeGroup][lastSel], lastSel);
  } else if (activeGroup && WORD_DATA[activeGroup]) {
    const firstSub = Object.keys(WORD_DATA[activeGroup])[0];
    renderPreview(WORD_DATA[activeGroup][firstSub], firstSub);
  } else {
    document.getElementById('bib-col-preview').innerHTML = '<div class="bib-placeholder">—</div>';
  }
}

function renderPreview(words, title) {
  const el = document.getElementById('bib-col-preview');
  el.innerHTML = `<div class="bib-preview-header">${title}</div>` +
    words.map(w => `<span class="bib-preview-word">${w}</span>`).join('');
}

function toggleSub(id, name, words) {
  const idx = bibSelectedIds.indexOf(id);
  if (idx >= 0) bibSelectedIds.splice(idx, 1);
  else if (bibSelectedIds.length < 5) bibSelectedIds.push(id);
  renderBibLeft();
  renderBibMid();
  renderBibSlots();
  updateBibPlayBtn();
}

function renderBibSlots() {
  for (let i = 0; i < 5; i++) {
    const slot = document.getElementById('bib-slot-' + i);
    const id   = bibSelectedIds[i];
    if (id) {
      // Build a readable label: "3 · Liste 2" from e.g. DEU-1000-03-LIST-2
      let label = id;
      const builtinMatch = id.match(/DEU-\d{4}-(\d{2})-LIST-(\d)/);
      const masterMatch  = id.match(/MAS-\d{4}-(\d{2})-LIST-(\d)/);
      if (builtinMatch) {
        label = `${parseInt(builtinMatch[1])} · Liste ${builtinMatch[2]}`;
      } else if (masterMatch) {
        label = `M${parseInt(masterMatch[1])} · Liste ${masterMatch[2]}`;
      } else if (id.startsWith('desteni__')) {
        label = id.replace('desteni__', '');
      } else if (id.startsWith('custom_')) {
        const c = getCustomLists().find(l => l.id === id);
        label = c ? c.name : 'Eigene';
      }
      slot.className = 'bib-slot filled';
      slot.innerHTML = `<span class="bib-slot-name">${label}</span><span class="bib-slot-remove" onclick="removeSlot(${i})">✕</span>`;
    } else {
      slot.className = 'bib-slot empty';
      slot.innerHTML = `<span class="bib-slot-num">${i + 1}</span>`;
    }
  }
}

function removeSlot(i) {
  bibSelectedIds.splice(i, 1);
  renderBibLeft(); renderBibMid(); renderBibSlots(); updateBibPlayBtn();
}

function updateBibPlayBtn() {
  const btn = document.getElementById('bib-play-btn');
  btn.disabled = bibSelectedIds.length === 0;
  const n = bibSelectedIds.length;
  document.getElementById('bib-sel-hint').textContent = n === 0 ? t('bib_sel_hint') : t('bib_sel_count', n);
}

function getWordsForId(id) {
  // Check master
  for (const gid of Object.keys(MASTER_DATA)) {
    if (MASTER_DATA[gid]?.[id]) return [...MASTER_DATA[gid][id]];
  }
  // Check desteni
  if (id.startsWith('desteni__')) {
    const listName = id.replace('desteni__', '');
    return DESTENI_DATA[listName] ? [...DESTENI_DATA[listName]] : [];
  }
  // Check built-in sublists
  for (const gid of GROUPS) {
    if (WORD_DATA[gid]?.[id]) return [...WORD_DATA[gid][id]];
  }
  // Check custom
  const c = getCustomLists().find(l => l.id === id);
  return c ? [...c.words] : [];
}

function playSelected() {
  const lists = bibSelectedIds.map(id => {
    const w = getWordsForId(id);
    return w.length ? { words: w, name: id } : null;
  }).filter(Boolean);
  if (!lists.length) return;
  savedListQueue = lists.map(l => ({ words: [...l.words], name: l.name }));
  listQueue = lists.slice(1).map(l => ({ words: shuffleMode ? shuffle([...l.words]) : [...l.words], name: l.name }));
  startStage(shuffleMode ? shuffle([...lists[0].words]) : [...lists[0].words], lists[0].name);
}

// ===== TOOL — STAGE
function startStage(words, title) {
  originalWords = [...words]; currentTitle = title;
  if (!savedListQueue.length) savedListQueue = [{ words: [...words], name: title }];
  queue = shuffleMode ? shuffle([...words]) : [...words]; retryQueue = []; totalWords = words.length; correctCount = 0;
  hadRetry = false;
  sessionActive = false; paused = false;
  showPage('stage'); hidePause(); hideFinish();
  document.getElementById('tool-list-name').textContent = title;
  document.getElementById('flash-word').style.opacity = '1';
  document.getElementById('word-input').disabled = true;
  document.getElementById('word-input').value = '';
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('progress-row').style.display = 'none';
  document.getElementById('no-list-hint').style.display = 'none';
  document.getElementById('feedback-dot').className = 'feedback-dot';
  document.getElementById('reveal-word').textContent = '';
  document.getElementById('reveal-word').className = 'reveal-word';
  waitingForNext = false; readyToBegin = false;
  startSession();
}

function startSession() {
  sessionActive=true; paused=false; waitingForNext=false;
  document.getElementById('start-btn').style.display='none';
  document.getElementById('progress-row').style.display='flex';
  document.getElementById('word-input').disabled=true;
  const fw=document.getElementById('flash-word');
  fw.style.fontSize='22px';
  fw.style.color='var(--color-ink-ghost)';
  fw.style.letterSpacing='0.16em';
  fw.style.textTransform='uppercase';
  fw.style.fontWeight='700';
  fw.textContent=t('stage_hint_ready');
  fw.style.opacity='1';
  const rw=document.getElementById('reveal-word');
  rw.textContent=''; rw.className='reveal-word'; rw.style.color=''; rw.style.fontSize='';
  document.getElementById('no-list-hint').style.display='none';
  updateProgress();
  readyToBegin=true;
}

function flashNext() {
  if (!queue.length && !retryQueue.length) { endSession(); return; }
  if (!queue.length) { queue = shuffleMode ? shuffle([...retryQueue]) : [...retryQueue]; retryQueue=[]; }
  currentWord = queue.shift();
  const fw = document.getElementById('flash-word');
  const inp = document.getElementById('word-input');
  inp.value = '';
  inp.focus();
  fw.style.fontSize='';
  fw.style.color='';
  fw.style.letterSpacing='';
  fw.style.textTransform='';
  fw.style.fontWeight='';
  fw.textContent = currentWord; fw.style.opacity = '1';
  flashTimeout = setTimeout(() => { fw.style.opacity='0'; }, TIMINGS[timingIdx]*1000);
}

function updateProgress() {
  const done = totalWords - queue.length - retryQueue.length;
  document.getElementById('progress-text').textContent = done + ' / ' + totalWords;
}

function handleKey(e) { /* handled by global keydown listener */ }

function checkAnswer() {
  const typed = document.getElementById('word-input').value.trim().toLowerCase();
  const correct = currentWord.toLowerCase();
  const dot = document.getElementById('feedback-dot');
  const reveal = document.getElementById('reveal-word');
  clearTimeout(flashTimeout);

  const isCorrect = typed === correct;
  if (isCorrect) { correctCount++; dot.className='feedback-dot green show'; }
  else { retryQueue.push(currentWord); hadRetry = true; dot.className='feedback-dot red show'; }

  // Show feedback above the stage: [Versuche es nochmal] • [correct word]
  const revealLeft = document.getElementById('reveal-left');
  reveal.textContent = currentWord;
  reveal.className = 'reveal-word show';
  if (!isCorrect) {
    revealLeft.textContent = t('retry_label');
    revealLeft.className = 'reveal-left show';
  } else {
    revealLeft.textContent = '';
    revealLeft.className = 'reveal-left';
  }

  // Disable input while waiting, keep flash card blank
  document.getElementById('flash-word').style.opacity = '0';
  document.getElementById('word-input').disabled = true;

  updateProgress();
  waitingForNext = true;
  document.getElementById('pause-hint').textContent = t('enter_hint');
}

function proceedToNext() {
  // Clear feedback
  document.getElementById('feedback-dot').className = 'feedback-dot';
  const _rw = document.getElementById('reveal-word');
  _rw.textContent = ''; _rw.className = 'reveal-word'; _rw.style.color=''; _rw.style.fontSize='';
  document.getElementById('reveal-left').textContent = '';
  document.getElementById('reveal-left').className = 'reveal-left';
  document.getElementById('word-input').disabled = false;
  document.getElementById('word-input').value = '';
  document.getElementById('word-input').focus();
  document.getElementById('pause-hint').textContent = t('pause_hint');
  waitingForNext = false;
  flashNext();
}

function endSession() {
  sessionActive=false; clearTimeout(flashTimeout);
  document.getElementById('word-input').disabled=true;
  document.getElementById('progress-row').style.display='none';
  document.getElementById('flash-word').style.opacity='0';
  document.getElementById('finish-sub').textContent=t('finish_sub', totalWords);

  const isPerfect = !hadRetry;
  const canGoFaster = isPerfect && timingIdx < TIMINGS.length - 1;

  // Show or hide perfect round label
  const perfectEl = document.getElementById('finish-perfect');
  if (perfectEl) perfectEl.style.display = isPerfect ? 'block' : 'none';

  // Again button text
  const againBtn = document.getElementById('finish-again-btn');
  if (againBtn) {
    againBtn.textContent = canGoFaster ? t('btn_again_faster') : t('btn_again');
  }

  const nb=document.getElementById('finish-next-btn');
  if(listQueue.length>0){
    nb.style.display='inline-block';
    document.getElementById('finish-hint').textContent=t('finish_hint_next');
  } else {
    nb.style.display='none';
    document.getElementById('finish-hint').textContent = canGoFaster ? t('finish_hint_faster') : t('finish_hint_again');
  }
  const fo = document.getElementById('finish-overlay');
  if (fo.parentElement !== document.body) document.body.appendChild(fo);
  fo.style.display='flex';
}

function replayList() {
  const canGoFaster = !hadRetry && timingIdx < TIMINGS.length - 1;
  if (canGoFaster) {
    timingIdx++;
    renderTimingDots();
  }
  hideFinish();
  startStage(originalWords, currentTitle);
}
function nextList() {
  hideFinish();
  if(listQueue.length>0){const n=listQueue.shift();startStage(n.words,n.name);startSession();}
}
function goToBibliothek() {
  hideFinish();
  sessionActive=false; paused=false; waitingForNext=false; readyToBegin=false;
  clearTimeout(flashTimeout);
  savedListQueue=[]; listQueue=[];
  showPage('bibliothek');
}

// ===== PAUSE OVERLAY
let wasReadyToBegin = false;
function togglePause() { if(paused) resumeSession(); else pauseSession(); }
function pauseSession(reason) {
  wasReadyToBegin = readyToBegin;
  paused=true; clearTimeout(flashTimeout);
  waitingForNext = false; readyToBegin = false;
  document.getElementById('flash-word').style.opacity='0';
  document.getElementById('word-input').disabled=true;
  document.getElementById('reveal-word').textContent='';
  document.getElementById('reveal-word').className='reveal-word';
  document.getElementById('reveal-left').textContent='';
  document.getElementById('reveal-left').className='reveal-left';
  document.getElementById('feedback-dot').className='feedback-dot';
  const sub=document.getElementById('pause-sub');
  if(reason==='nav') sub.textContent=t('pause_nav');
  else if(reason==='hidden') sub.textContent=t('pause_tab');
  else sub.textContent=t('pause_sub');
  const po = document.getElementById('pause-overlay');
  if (po.parentElement !== document.body) document.body.appendChild(po);
  po.style.display='flex';
}
function resumeSession() {
  paused=false; hidePause();
  if (wasReadyToBegin) {
    readyToBegin = true;
    const fw = document.getElementById('flash-word');
    fw.style.fontSize='22px';
    fw.style.color='var(--color-ink-ghost)';
    fw.style.letterSpacing='0.16em';
    fw.style.textTransform='uppercase';
    fw.style.fontWeight='700';
    fw.textContent=t('stage_hint_ready');
    fw.style.opacity='1';
    document.getElementById('reveal-word').textContent='';
    document.getElementById('reveal-word').className='reveal-word';
    document.getElementById('no-list-hint').style.display='none';
    return;
  }
  document.getElementById('word-input').disabled=false;
  document.getElementById('word-input').focus();
  const fw=document.getElementById('flash-word'); fw.style.opacity='1';
  flashTimeout=setTimeout(()=>{fw.style.opacity='0';}, TIMINGS[timingIdx]*1000);
}
function abortSession(){
  sessionActive=false;paused=false;waitingForNext=false;readyToBegin=false;clearTimeout(flashTimeout);hidePause();
  showPage('bibliothek');
}
function hidePause(){document.getElementById('pause-overlay').style.display='none';}
function hideFinish(){document.getElementById('finish-overlay').style.display='none';}

document.addEventListener('visibilitychange',()=>{
  if(document.hidden&&sessionActive&&!paused) pauseSession('hidden');
});

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

document.addEventListener('keydown',(e)=>{
  // Pause overlay open
  const po=document.getElementById('pause-overlay');
  if(po.style.display!=='none'){
    if(e.key==='Enter'){e.preventDefault();resumeSession();}
    return;
  }
  // Finish overlay open
  const fo=document.getElementById('finish-overlay');
  if(fo.style.display!=='none'){
    if(e.key==='Enter'){e.preventDefault();const nb=document.getElementById('finish-next-btn');if(nb.style.display!=='none')nextList();else replayList();}
    return;
  }
  // In session
  if(!sessionActive||paused) return;
  if(e.key==='Escape'){togglePause();return;}
  if(e.key==='Enter'){
    e.preventDefault();
    if(readyToBegin){
      readyToBegin=false;
      document.getElementById('no-list-hint').style.display='none';
      const fw=document.getElementById('flash-word');
      fw.style.fontSize='';fw.style.color='';
      document.getElementById('word-input').disabled=false;
      document.getElementById('word-input').focus();
      flashNext();
      return;
    }
    if(waitingForNext){proceedToNext();}
    else{checkAnswer();}
  }
});

// ===== INIT
renderTimingDots();
renderEditor();
goToHomeTool();
setLang('en');
