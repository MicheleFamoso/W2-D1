/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//STRINGA= Valori di testo, va inserito in apici singoli o apici doppi. I numeri scritti in stringa vengono interpretati come caratteri.
//NUMERI= Valori numerici , vanno scritti senza apici
//BOOLEANI= Esprimono valori come vero o falso ( true) (False).
//UNDEFINED= Il valore di una variabile a cui non e stato assegnato un valore, non si usa intenzionalmente ed è consigliato evitarlo perchè un valore senza valore non ha senso di esistere.
//NULL= Assenza di valore, volutamente vuota ed esplicitamente nullo. Si puo usare per azzerare un valore che gia esiste.
//Questi elencati sono chiamati datatype primitivi, perchè sono la base dei datatype

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const myName = "Michele"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const res = 12 + 20

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//myName = "Famoso"
//consol.log(myName) Se si controlla in console da errore, bisogna usare let al posto di const

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const sub = 4 - x

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const name1 = "john"
//const name2 = "John"
//const verifica = name1 === name2
//console.log(verifica)
//const verifica2 = name1.toLowerCase === name2.toLowerCase
//console.log(verifica2)
