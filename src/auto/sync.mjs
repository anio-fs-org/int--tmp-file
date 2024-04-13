import {openFile} from "@anio-fs/api/sync"
import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export default function(file_extension = "", tmp_dir = null) {
	if (tmp_dir === null) {
		tmp_dir = os.tmpdir()
	}

	const rand = randomUUID({disableEntropyCache: true})
	const file_path = path.join(tmp_dir, rand + file_extension)

	const file = openFile(file_path, "wx", 0o744)

	file.close()

	return file_path
}
