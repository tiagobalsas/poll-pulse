import fastify from "fastify";
import { createPoll } from "./routes/createPoll";
import { getPoll } from "./routes/getPoll";
import { voteOnPoll } from "./routes/voteOnPoll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "4ab5cc06f65f87d70e7ba31a6ae0a906",
  hook: "onRequest",
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running!");
});
