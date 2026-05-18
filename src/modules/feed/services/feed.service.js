import redisClient from "../../../config/redis.js";
import { createFeedRepository, getFeedsRepository } from "../repository/feed.repository.js";
import { getIO } from "../../../modules/socket/socket.js";
export const getFeedsService = async (
   page,
   limit
) => {

   const feeds =
      await getFeedsRepository(page, limit);

   return feeds;

};


export const createFeedService = async (data) => {

   const feed = await createFeedRepository(data);

   await redisClient.del("feeds");

   const io = getIO();

   io.emit("new-feed", feed);

   return feed;

};