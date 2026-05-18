import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

console.log("REDIS_USERNAME", process.env.REDIS_USERNAME);
console.log("REDIS_PASSWORD", process.env.REDIS_PASSWORD);
console.log("REDIS_HOST", process.env.REDIS_HOST);
console.log("REDIS_PORT", process.env.REDIS_PORT);
const redisClient = createClient({
   username: process.env.REDIS_USERNAME,
   password: process.env.REDIS_PASSWORD,

   socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
   }
});


redisClient.on("error", (err) => {
   console.log("Redis Client Error", err);
});


await redisClient.connect();

console.log("Redis Connected");

export default redisClient;