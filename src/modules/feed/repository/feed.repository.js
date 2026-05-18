import  Feed  from "../models/feed.model.js";
export const createFeedRepository = async (data) => {

   return await Feed.create(data);

};


export const getFeedsRepository = async (
   page,
   limit
) => {

   const skip = (page - 1) * limit;

   return await Feed.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

};