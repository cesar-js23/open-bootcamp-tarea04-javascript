let nombre = "Cesar Augusto";
let apellido = "Julian Salazar";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let contar = estudiante.length;

let primeraLetra = nombre[0];
let ultimaLetra = apellido[apellido.length - 1];

let eliminarSpacios = estudiante.replace(/ /g,"");

let nombreContenido = estudiante.includes(nombre);


