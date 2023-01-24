const c = [
	() => import("../../../src/pages/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/pages/index.md"),
	() => import("../../../src/pages/powerful-features.md"),
	() => import("../../../src/pages/settings/index.svelte"),
	() => import("../../../src/pages/test/index.md"),
	() => import("../../../src/pages/test/test2.md")
];

const d = decodeURIComponent;

export const routes = [
	// src/pages/index.md
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/pages/powerful-features.md
	[/^\/powerful-features\/?$/, [c[0], c[3]], [c[1]]],

	// src/pages/settings/index.svelte
	[/^\/settings\/?$/, [c[0], c[4]], [c[1]]],

	// src/pages/test/index.md
	[/^\/test\/?$/, [c[0], c[5]], [c[1]]],

	// src/pages/test/test2.md
	[/^\/test\/test2\/?$/, [c[0], c[6]], [c[1]]],

	,

	,

	,

	,

	,

	
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];