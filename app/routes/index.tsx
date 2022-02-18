import { LoaderFunction, useLoaderData } from "remix";
import { Movie } from "~/models/movies";
import { Movie as MovieModel } from "~/models/movies-model";

import styles from "../styles/index.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async () => {
	const moviesList = await (await MovieModel.find({studio: "Marvel"})).reverse();
	return moviesList;
};

export default function Index() {
	const data: Movie[] = useLoaderData();
	return (
		<div className="container">
			{data.map((movie) => {
				return (
					<div className="image">
						<img src={movie.image} alt={movie.title} />
					</div>
				);
			})}
		</div>
	);
}
