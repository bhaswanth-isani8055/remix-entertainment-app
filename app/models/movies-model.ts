import mongoose from "mongoose";

const movie = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	studio: String,
});

export const Movie = mongoose.models.Movie || mongoose.model("Movie", movie);
