// NODE NÃO PERMITE ESSA SYNTAXE DE "IMPORT", UTILIZEI O SUCRASE PARA
// UTILIZA-LA.

import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
