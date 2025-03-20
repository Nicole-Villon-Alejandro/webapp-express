//pacchetti da importare
import express from 'express';

//impostiamo express e la porta del server
const app = express();
const port = 3000;

//attivazione del server
app.listen(port, () => {
  console.log(`Server Movies in funzione sulla porta: ${port}`);
});