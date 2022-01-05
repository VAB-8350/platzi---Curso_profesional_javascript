import Singleton from './Singleton'

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('a es igual a b??', a === b);