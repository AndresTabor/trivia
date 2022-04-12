export const data = [
    {
        question: "¿En qué año se desarrolló el lenguaje de programación C?",
        options: ["En 1968", "En 1970", "En 1972", "En 1950"],
        answer: 2,
        category_level: 1
    },
    {
        question: "JavaScript es un lenguaje ___",
        options: ["Compilado", "Interpretado", "Fuertemente tipado", "De bajo nivel"],
        answer: 1,
        category_level: 1
    },
    {
        question: "La primera unidad de disco duro de 1 GB se anunció en 1980, pesaba alrededor de ____",
        options: ["250 kilos", "350 kilos", "50 kilos", "1 kilo"],
        answer: 0,
        category_level: 1
    },
    {
        question: "Un medio de codificación de texto en el que cada símbolo está representado por 16 bits es...",
        options: ["LZW", "ASCII", "Unicode", "16code"],
        answer: 2,
        category_level: 1
    },
    {
        question: "¿Recuerdas cuál fue el primer navegador de la historia?",
        options: ["Netscape Navigator", "Internet Explorer", "Opera", "World Wide Web"],
        answer: 3,
        category_level: 1
    },
    {
        question: "¿Qué significa Wi-Fi?",
        options: ["Wiggly Fibres", "Wireless Fidelity", "Wireless Fings", "Wireless Frime"],
        answer: 1,
        category_level: 2
    },
    {
        question: "¿Qué sustancia se coloca en la parte externa del procesador para evitar que se sobrecaliente durante su funcionamiento?",
        options: ["Pasta térmica", "Soluto de yodo", "Pasta aislante", "Nitrógeno líquido"],
        answer: 0,
        category_level: 2
    },
    {
        question: "¿Y qué significa Mhz?",
        options: ["Millihercios", "Macrohercios", "Microhercios", "Megahercios"],
        answer: 3,
        category_level: 2
    },
    {
        question: "¿A quién le debemos el diseño del primer ratón para ordenador?",
        options: ["Charles Babbage", "Douglas Engelbart", "Konrad Zuse", "Maggie Zuse"],
        answer: 1,
        category_level: 2
    },
    {
        question: "Los puntos que componen la imagen de una fotografía digital se llaman...",
        options: ["Puntos de resolución", "Puntos digitales", "Píxeles", "Image points"],
        answer: 2,
        category_level: 2
    },
    {
        question: "¿Cuál de estos elementos es responsable de la administración y coordinación de actividades y la división de recursos del ordenador?",
        options: ["Placa base", "RAM", "GPU", "Sistema operativo"],
        answer: 3,
        category_level: 3
    },
    {
        question: "¿Desde cuándo podemos copiar y pegar?",
        options: ["Desde 1981", "Desde 1984", "Desde 1986", "Desde 1982"],
        answer: 0,
        category_level: 3
    },
    {
        question: "¿Cuál de los siguientes comandos o atajos de teclado puede utilizarse para cambiar a mayúsculas o minúsculas?",
        options: ["CONTROL+SHIFT+F3", "SHIFT + F3", "ALT + F3", "BLOCMAYUS + ENTER"],
        answer: 1,
        category_level: 3
    },
    {
        question: "¿Cuál de estos sistemas operativos nunca vio la luz?",
        options: ["Peppermint 10", "Q4OS 3", "Linux legacy", "Windows 9"],
        answer: 3,
        category_level: 3
    },
    {
        question: "Son los componentes físicos básicos de una computadora.",
        options: ["Mouse pad, monitor, teclado y CPU", "Bocinas, mouse, audifonos y teclado", "Monitor, Mouse, CPU y teclado", "CPU, monitor, teclado y bocinas"],
        answer: 2,
        category_level: 3
    },
    {
        question: "¿Es obligatorio utilizar la sentencia default en una estructura switch?",
        options: ["Sí, siempre", "Sí si ningún valor cumple la condición", "Sí, pero solo para valores enteros", "No, no es obligatorio"],
        answer: 3,
        category_level: 4
    },
    {
        question: `¿Que resultado da la siguiente operación?
        System.out.println(12&13);`,
        options: ["true", "false", "12", "13"],
        answer: 2,
        category_level: 4
    },
    {
        question: "¿Cómo podemos cambiar el directorio de datos para MongoDB en un OS X?",
        options: ["mongod --dbpath <path>", "mongod --path <path>", "mongod --datapath <path>", "mongod --mongopath <path>"],
        answer: 0,
        category_level: 4
    },
    {
        question: "¿Cual de los siguientes conceptos no existe en MongoDB?",
        options: ["Base de Datos", "Tupla", "Colección", "Documento"],
        answer: 1,
        category_level: 4
    },
    {
        question: `if (contador<34) {
            System.out.println(El contador es menor que 24")";
          }`,
        options: ["Estructura Secuencial", "Estructura Repetitiva", "Estructura Selectiva", " Ninguna de las tres anteriores"],
        answer: 2,
        category_level: 4
    },
    {
        question: ` 
            ¿Qué conseguimos con la línea de código evt.preventDefault?
            function calcular(evt) {
                evt.preventDefault();
            }
                
            document.getElementById('micheckbox').addEventListener(
                'click', calcular, false
            );
        `,
        options: ["Lanza un evento llamado preventDefault", "Ejecutar un método que habrá que definir y se llamará preventDefault", "Desasignar la respuesta por defecto de un evento", "Ninguna de las tres anteriores es correcta"],
        answer: 2,
        category_level: 5
    },
    {
        question: `¿Que devolvería la función si la invoco como calculo (undefined)? <br>
        function calculo(x) { return (!x); }`,
        options: ["undefined", "true", "false", "null"],
        answer: 1,
        category_level: 5
    },
    {
        question: `¿Que obtengo si invoco un document.getElementById("titulo").innerHTML sobre la siguiente página?<br>
        <!DOCTYPE html>
        <html>
        <body>
        <h1 id="titulo">Título</h4>
        <p>Contenido</p>

        <div id="capa"></div>

        </body>
        </html>`,
        options: ["[Object]", "''", '"Título"', "undefined"],
        answer: 2,
        category_level: 5
    },
    {
        question: "¿Para qué sirve la propiedad border-radius?",
        options: ["Para girar un elemento", "Para indicar la distancia entre el texto y los bordes", "Para redondear las esquinas de los bordes", "Para indicar el radio de un círculo"],
        answer: 2,
        category_level: 5
    },
    {
        question: "¿Qué propiedad sirve para dar color a un elemento?",
        options: ["bgcolor", "font-color", "Para redondear las esquinas de los bordes", "color"],
        answer: 3,
        category_level: 5
    },

];
