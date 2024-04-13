import {openFile} from "@anio-fs/api/async"
import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export default async function(file_extension = "", tmp_dir = null) {
	if (tmp_dir === null) {
		tmp_dir = os.tmpdir()
	}

	const rand = randomUUID({disableEntropyCache: true})
	const file_path = path.join(tmp_dir, rand + file_extension)

	const file = await openFile(file_path, "wx", 0o744)

	await file.close()

	return file_path
}
