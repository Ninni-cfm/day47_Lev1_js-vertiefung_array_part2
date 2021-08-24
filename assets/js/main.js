var show = (text = undefined, tag = 'p') => {
    document.write(text != undefined ? `<${tag}>${text}</${tag}>` : '<br>');
    console.log(text != undefined ? text : '');
}
var showArray = (arr) => {
    console.log(arr);
    document.write(`<p>(${arr.length}) [ `);

    if (typeof (elt) == "Number") {
        document.write(arr.join(', '));
    }
    else {
        document.write(`"${arr.join('", "')}"`);
    }
    document.write(' ]</p>');
}


//****************************************************************************
// CodeFlow Übung lev1_1: Array sort()
// In dieser Übung lernen wir, wie man Arrays alphabetisch sortiert.
// Sortiere die Programmiersprachen alphabetisch.
// Der Code für das Array steht im Kommentarbereich.
// Deklariere die Funktion sortierung.
// Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// Ruf die Funktion sortierung auf.
// Überprüfe den Erfolg in der Konsole.
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
show('CodeFlow Übung lev1_1: Array sort()', 'h2');
let sortierung = arr => {
    return arr.sort();
}
show('Array unsortiert:', 'h3');
showArray(languages);
show('Array sortiert:', 'h3');
showArray(sortierung(languages));
show();


//****************************************************************************
// CodeFlow Übung lev1_2: Array reverse()
// In dieser Übung lernen wir, wie man Arrays umgekehrt alphabetisch sortiert.
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// Der Code steht im Kommentar.
// Deklariere Funktion sortierung2.
// Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// Ruf die Funktion sortierung2 auf.
// Überprüfe das Ergebnis in der Konsole.
let sortierung2 = arr => {
    return arr.sort().reverse();
}
show('CodeFlow Übung lev1_2: Array reverse()', 'h2');
show('Array unsortiert:', 'h3');
showArray(languages);
show('Array in umgekehrter Reihenfolge sortiert:', 'h3');
showArray(sortierung2(languages));
show();


//****************************************************************************
// CodeFlow Übung lev1_3: Array join()
// Verwende die Array-Methode join(), um alle Elemente eines Arrays durch ein Trennzeichen getrennt zu einem String zu verketten.
// Deklariere Variablen meinText1, meinText2, meinText3.
// Definiere die Variable meinText1 mit dem Wert: ["Hello", "World"]
// Definiere die Variable meinText2 mit dem Wert: ["Anass", "Elaine", "Eric", "Georg"]
// Definiere die Variable meinText3 mit dem Wert: ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]
// Deklariere Variablen: join1, join2, join3, join4.
// Definiere die Variable join1 mit dem Wert: meinText1.join();
// Definiere die Variable join2 mit dem Wert: meinText1.join("");
// Definiere die Variable join3 mit dem Wert: meinText1.join(" ");
// Definiere die Variable join4 mit dem Wert: meinText1.join("+");
// Teste auch zwei weitere Variablen meinText2 und meinText3.
show('CodeFlow Übung lev1_3: Array join()', 'h2');

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];
let join1 = meinText1.join();
let join2 = meinText1.join("");
let join3 = meinText1.join(" ");
let join4 = meinText1.join("+");
show(join1);
show(join2);
show(join3);
show(join4);
join1 = meinText2.join();
join2 = meinText2.join("");
join3 = meinText2.join(" ");
join4 = meinText2.join("+");
show(join1);
show(join2);
show(join3);
show(join4);
join1 = meinText3.join();
join2 = meinText3.join("");
join3 = meinText3.join(" ");
join4 = meinText3.join("+");
show(join1);
show(join2);
show(join3);
show(join4);
show();


//****************************************************************************
// // CodeFlow Übung lev1_3: Array join()
// In dieser Übung lernen wir, wie man die Nummern 0 - ∞ aufsteigend sortiert.
// Sortiere die Nummern aufsteigend.
// Der Code steht im Kommentarbereich.
// wenn es nicht funktioniert, versuche es zu googeln
// überprüfe dein Ergebnis in der Konsole
show('CodeFlow Übung lev2_2: sort() bigger numbers', 'h2')
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
show('Array unsortiert:', 'h3');
showArray(numArray2);
show('Array sortiert:', 'h3');
showArray(numArray2.sort((a, b) => a - b));
show();


//****************************************************************************
// CodeFlow Übung lev3_1: Reverse Name, Words
// Schreibe ein kleines Programm, das Zeichenketten umzukehrt.
// Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter)
// Du wirst Array-Methoden verwenden müssen um den String umzudrehen
// Bonus:
// Wenn es mehrere Wörter gibt: drehe jedes Wort einzeln um.
// Tipp: Du musst schauen, ob es in der übergebenen Zeichenkette mehrere Wörter gibt!
// Rufe die Funktion mit Deinem Namen als Parameter auf.
// Überprüfe das Ergebnis in der Konsole.
// Versuche diese Begriffe umzukehren.
// * Sergio, Hannah, Regallager, Reliefpfeiler, Rentner<br><br>
// Versuche diese Sätze umzukehren.
// * Ella mag alle Bohnen // han nesaH has ennaH
show('CodeFlow Übung lev3_1: Reverse Name, Words', 'h2');
let reverseString = (param) => {
    return param.split('').reverse().join('');
}
let reverseWords = (param) => {
    return param.split(' ').map(word => reverseString(word)).join(' ');
}
show('Normal:', 'h3');
show('Klaus Nienhaus');
show('Full string reversed:', 'h3');
show(reverseString('Klaus Nienhaus'));
show('Single words reversed:', 'h3');
show(reverseWords('Klaus Nienhaus'));

let test1 = ['Sergio', 'Hannah', 'Regallager', 'Reliefpfeiler', 'Rentner'];
show('Normal:', 'h3');
showArray(test1);
show('Reversed:', 'h3');
showArray(test1.map(elt => reverseString(elt)));

let test2 = ['Ella mag alle Bohnen', 'han nesaH has ennaH'];
show('Normal:', 'h3');
showArray(test2);
show('Full string reversed:', 'h3');
showArray(test2.map(elt => reverseString(elt)));

