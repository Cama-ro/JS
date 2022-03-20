let jsonPracownicy = {
  pracownicy: [
    { firstName: "Krystian", lastName: "Dziopa" },
    { firstName: "Anna", lastName: "Szapiel" },
    { firstName: "Piotr", lastName: "Żmuda" },
  ],
};

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach((pracownik, index) => {
  console.log(
    "Index: " + index + " Imię i nazwisko: " + pracownik.firstName,
    pracownik.lastName
  );
});
