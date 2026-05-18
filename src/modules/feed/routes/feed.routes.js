import express from "express";

import {
   createFeed,
   getFeeds
}
from "../controller/feed.controller.js";

import validate
from "../../../middleware/validate.middleware.js";

import {
   createFeedValidation
}
from "../validators/feed.validator.js";


const router = express.Router();


// GET
router.get("/feed", getFeeds);


// POST
router.post(
   "/feed",
   validate(createFeedValidation),
   createFeed
);

export default router;