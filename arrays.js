const array1 = [
  { nombre: "jose", profesion: "FullStack developer" },
  { nombre: "paola", profesion: "Backend developer" },
  { nombre: "mauricio", profesion: "Frontend developer" },
  { nombre: "milan", profesion: "developer" },
]

const array2 = [
  { puesto: "full time", direccion: "cumana"},
  { puesto: "part time", direccion: "carupano"},
  { puesto: "midle time", direccion: "puerto la cruz"},
]

let array = []


array = [ ...array, ...array2 ]

console.log(array)