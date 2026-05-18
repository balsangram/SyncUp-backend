import {
   createFeedService,
   getFeedsService
}
from "../services/feed.service.js";



// GET FEEDS
export const getFeeds = async (req, res) => {

   try {

      const page =
         Number(req.query.page) || 1;

      const limit =
         Number(req.query.limit) || 5;

      const feeds =
         await getFeedsService(page, limit);

      res.status(200).json({
         success: true,
         data: feeds
      });

   } catch (error) {

      res.status(500).json({
         success: false,
         message: error.message
      });

   }

};




// CREATE FEED
export const createFeed = async (req, res) => {

   try {

      const feed =
         await createFeedService(req.body);

      res.status(201).json({
         success: true,
         data: feed
      });

   } catch (error) {

      res.status(500).json({
         success: false,
         message: error.message
      });

   }

};