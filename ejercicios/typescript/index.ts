// bolean
let muted: boolean = true;
muted = false;

// number
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;
console.log(resultado);


// string
let nombre: string = 'richard';
let saludo = 'Hola, me llamo '+ nombre;
console.log(saludo);


// array
let people: string[] = [];
people = ['isabel', 'juan', 'maria', 'fred'];
people.push('albert');

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('juan');
peopleAndNumbers.push('maria');
peopleAndNumbers.push('fred');
peopleAndNumbers.push(345)
console.log(peopleAndNumbers);

//Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;
console.log('mi color favorito es ' + colorFavorito);

let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// object

let someObject: object = { type: 'Wildcard' };

// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4,7);
console.log(sum);

function createAdder (a: number): (number) => number {
  return function(b:number){
    return b + a;
  }
}

const addFour = createAdder(4);
const foruPlus = addFour(6);

console.log(foruPlus);

function fullName (firstName: string, lastName: string = ''): string {
  return firstName + ' ' + lastName;
}
const richard = fullName('richard', 'maria');
console.log(richard);

// interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color
}

enum Color {
  rojo = 'Rojo',
  verde = 'Verde',
  azul = 'Azul',
}

let rect: Rectangulo = {
  ancho: 4,
  alto:2,
  color: Color.verde,
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRectangulo = area(rect);
console.log(areaRectangulo);

rect.toString = function(){
  return this.color ? ' un rectangulo ' + this.color : ' un rectangulo';
}

console.log(rect.toString());