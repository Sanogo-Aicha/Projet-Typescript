// Définition de l'interface Véhicule
interface vehicule {
    make:string, // Propriété de type chaîne pour la marque
    modèle:string,  // Propriété de type chaîne pour le modèle       
    year:number,  // Propriété de type numéro pour l'année
    start():void; //Méthode start qui renvoie void
}

// Implémentation de l'interface dans une classe
class voiture implements vehicule {
    make: string;
    modèle: string;
    year: number;
    constructor(make:string,modèle:string,year:number) {
       this.make=make;
       this.modèle=modèle;
       this.year=year ;
    };
    start():void{ // Implémentation de la méthode start
      console.log("car engine wanted");// Affiche "Enginestart" dans la console
      
    }
    
}

const car = new voiture("TOYOTA","RAV4",2024);// Création d'une instance de la classe Voiture
// Appel de la méthode start
car.start(); // Vérifiez la console pour voir "Enginestart"