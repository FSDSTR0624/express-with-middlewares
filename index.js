// Importamos o requerimos Express
const express = require("express");

const userRouter = require("./routes/userRouter");
const {
  commonMiddleware: { logger },
} = require("./middlewares/commonMiddelware.js");

// Instanciamos Express
const app = express();

// Para que el servidor interprete los JSON
app.use(express.json());

// Las peticiones que se hagan a /user sean gestionadas por el userRouter
app.use("/user", userRouter);

app.get(
  "/pruebas",
  logger,
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    throw new Error("Metodo no permitido");
  }
);

app.post("/pruebas", (req, res) => {
  console.log("Estamos llamando a un POST en /pruebas");
  res.status(201).send("Prueba creada");
});

// ESTRUCTURA INICIAL SIN RUTAS NI CONTROLADORES
// // Definimos Endpoints
// app.get("/", (req, res) => {
//   console.log("El usuario ha hecho una petición a /");
//   console.log("Este es mi nuevo console.log");
//   res.send("Petición correcta: Has llamado a /");
// });

// app.get("/blog", (req, res) => {
//   console.log("El usuario ha hecho una petición a /blog");
//   res.status(200).json({
//     success: true,
//     content: [
//       {
//         title: "Título 1",
//         content: "kdcniunfisnficksnkfsnk",
//       },
//       {
//         title: "Título 2",
//         content: "kdcniunfisnficksnkfsnk 2",
//       },
//     ],
//   });
// });

// app.get("/no-existe", (req, res) => {
//   console.log("El usuario ha hecho una petición a /no-existe");
//   res.status(404).send("");
// });

//If the route is not existing then we will send a 404 status code
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ type: "error", message: err.message });
});

// Arranco el servidor
app.listen(3000, () => {
  console.log("Servidor rulando!");
});

// Arquitectura MVC - Modelo, Vista, Controlador
