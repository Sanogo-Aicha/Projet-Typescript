var voitures = {
    make: "TOYOTA",
    modèle: "RAV4",
    year: 2024,
    start: function () {
        console.log("enregistrement");
    }
};
// Implémentation de l'interface dans une classe
var voiture = /** @class */ (function () {
    function voiture(make, modèle, year) {
        this.make = make;
        this.modèle = modèle;
        this.year = year;
    }
    ;
    voiture.prototype.start = function () {
        console.log("car engine wanted"); // Affiche "Enginestart" dans la console
    };
    return voiture;
}());
var car = new voiture("TOYOTA", "RAV4", 2024); // Création d'une instance de la classe Voiture
// Appel de la méthode start
car.start(); // Vérifiez la console pour voir "Enginestart"
