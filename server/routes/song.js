import express from "express";

const router = express.Router();

import * as song from "../controllers/song.js";


// route 
// get post put delete
router.get('/', song.welcome);
router.post('/song', song.create);
router.get('/songs', song.songs);
router.get('/song/:slug', song.read);
router.get('/stats', song.getSongStats);
router.put('/song/:_id', song.editSong);
router.delete("/song/:_id", song.remove);

export default router;