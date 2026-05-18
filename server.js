import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import app from "./app.js";
import AppRouter from "./src/modules/feed/routes/feed.routes.js";
import { initSocket } from "./src/modules/socket/socket.js";



const server = http.createServer(app);


// INITIALIZE SOCKET
initSocket(server);

app.use("/api/v1", AppRouter);
mongoose.connect(process.env.MONGO_URI)
.then(() => {

   console.log("MongoDB Connected");

   server.listen(process.env.PORT, () => {

      console.log(`Server running on ${process.env.PORT}`);

   });

})
.catch((err) => {

   console.log(err);

});