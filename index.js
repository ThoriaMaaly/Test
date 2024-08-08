import express from "express";
import { connectDB } from "./DB/connection.js";
import userRouter from "./src/modules/user/user.routes.js";
import noteRouter from "./src/modules/notes/note.routes.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/user", userRouter);
app.use(noteRouter);


connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
