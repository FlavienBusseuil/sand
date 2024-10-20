import { hydrate, prerender as ssr } from "preact-iso";
import { init } from "./app/init";

init();

export function App() {
	return <></>;
}

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
