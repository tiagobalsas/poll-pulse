import fastify from "fastify";
import { createPoll } from "./routes/createPoll";
import { getPoll } from "./routes/get-poll";

const app = fastify();

app.register(createPoll);
app.register(getPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running!");
});
