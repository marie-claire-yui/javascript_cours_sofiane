// 1. Écrire une boucle for qui affiche chaque lettre d'une chaîne de caractères.
let nom = "marie-claire";

for (let index = 0; index < nom.length; index++) {
   console.log(nom[index]);   
}

// 2 Écrire une boucle for...of qui calcule la somme des éléments d'un tableau de nombres.

let nombres =[0,3,7,9,4,8,2,1];
addition= 0;
for (let valeur of nombres) {
    addition += valeur;
    console.log(addition);
}

// 3 Écrire une boucle for...in qui affiche chaque propriété d'un objet.

const client = {
    prenom:"Jean",
    nom:"Pierre",
    telephone:"0645124512",
    email:"jeanpierre@gmail.com"
};
//console.log(client);
for (const key in client) {
console.log(key);    
    }

//4 Utiliser la méthode forEach pour ajouter 10 à chaque élément d'un tableau de nombres

let tableauDeNombres = [0,2,4,6,8];
tableauDeNombres.forEach(element => {
    console.log(element+10);
});









 //1. Écrire une fonction qui prend un tableau de nombres en entrée et renvoie un nouveau tableau avec les éléments multipliés par 10.

const arr = [1,2,3];

const newArr = arr.map(function(element){
    return element * 10;
});
console.log(newArr);

// 2. Écrire une fonction qui prend un tableau de chaînes de caractères en entrée et renvoie un nouveau tableau avec les chaînes de caractères en majuscules.

const arr2 = ["ichi","ni","san","shi","go","roku","shichi","hachi","ku","ju"];

const newArr2 = arr2.map(function(element){
    return element.toUpperCase();
})
console.log(newArr2);

// 3. Écrire une fonction qui prend un tableau d'objets en entrée et renvoie un nouveau tableau avec les propriétés "name" de chaque objet.

function Identity(name, firstname, age) {
    this.name = name,
    this.firstname = firstname,
    this.age = age
  };

  let identity1 = new Identity("kasai","marie-claire",25);
  let identity2 = new Identity("jayuma","timotea",70);
  let identity3 = new Identity("kasai","takahiro", 64);

//console.log(identity2.name);

const arr3 = [identity1,identity2,identity3];

const newArr3 = arr3.map(function(element){
    return element.name;
})
console.log(newArr3);

// 4. Écrire une fonction qui prend un tableau d'objets en entrée et renvoie un nouveau tableau avec
// les objets filtrés selon une propriété. Ex: nous filtrons tous les objets
// qui ont une propriété age dont la valeur est supérieure à 30.

const newArr4 = arr3.map(function(element){
    if (element.age >30){
        return element
    }
});
console.log(newArr4);


// BOUCLES 

// Créez un tableau contenant les nombres 1 à 5.
let tableau = [1,2,3,4,5];

// Utilisez une boucle for pour afficher chaque élément du tableau.
for (let i = 0; i < tableau.length; i++){
    console.log(tableau[i]);
}

// Utilisez une boucle for...in pour afficher chaque index du tableau et sa valeur
for (const key in tableau) {
    console.log(key,tableau[key]);     
}

// Utilisez une boucle for...of pour afficher chaque valeur du tableau.
for (const iterator of tableau) {
    console.log(iterator);
}

// Utilisez la méthode forEach() pour afficher chaque valeur du tableau.
tableau.forEach(element => {
    console.log(element);
});


// map

//Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément multiplié par 2.
const newMap = tableau.map(function(element){
    return element * 2;
});
console.log(newMap);

// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément converti en chaîne de caractères. (ex: 5 doit devenir “5”)
const newMap2 = tableau.map(function(element){
    return element.toString();
});
console.log(newMap2);

// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément au carré.
const newMap3 = tableau.map(function(element){
    return element*element;
});
console.log(newMap3);

// Utilisez la méthode map() pour créer un nouveau tableau contenant chaque élément inversé (ex: 1 devient 1/1, 2 devient 1/2, etc.).
const newMap4 = tableau.map(function(element){
    return "1/" + element;
});
console.log(newMap4);
