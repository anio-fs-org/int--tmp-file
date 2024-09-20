import {generateFromTemplate} from "fourtune/autogenerate"

const asyncToSync = {
	"import {openFile} from \"@anio-fs/api/async\"": "import {openFile} from \"@anio-fs/api/sync\"",
	"export default async function": "export default function",
	"await openFile(": "openFile(",
	"await file.close()": "file.close()"
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
