/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly MAPBOX_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
