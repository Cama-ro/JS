// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek

////////////////// 1 step //////////////////

class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  }
  opiszKsiazke() {
    if (this.przeczytana === true) {
      return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`;
    } else if (this.przeczytana === false) {
      return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor}.`;
    }
  }
}

////////////////// 2 step //////////////////

let ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);

let ksiazka2 = new Ksiazka(
  "Jak przestać się martwić i zacząć żyć",
  "Dale Carnegie",
  false
);

let ksiazka3 = new Ksiazka("Niemożliwe", "Dawid Piątkowski", false);

// tablica z ww 3 książkami
let biblioteczka = [ksiazka1, ksiazka2, ksiazka3];
// console.log(biblioteczka);

////////////////// 3 step //////////////////

const iloscPrzeczytanych = (arrBooks) => {
  let readBooks = 0;

  for (let i = 0; i < biblioteczka.length; i++) {
    console.log(biblioteczka[i].opiszKsiazke());

    if (biblioteczka[i].przeczytana) {
      readBooks += 1;
    }
  }

  return readBooks;
};

console.log(iloscPrzeczytanych(biblioteczka));
