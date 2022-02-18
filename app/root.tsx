import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGODB_URL: string;
			NODE_ENV: "development" | "production" | "test";
		}
	}
}

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("Mongo Connected");
	})
	.catch((err) => {
		console.log(err);
	});

  export const meta: MetaFunction = () => {
    return { title: "Entertainment App" };
  };

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<LiveReload />
			</body>
		</html>
	);
}
