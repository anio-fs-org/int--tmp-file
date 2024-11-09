/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import os from "node:os"
import {randomUUID} from "node:crypto"
import path from "node:path"

import {openFile} from "@anio-fs/api/sync"

export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	file_extension? : string,
	tmp_dir? : string | null
) : ReturnType<ImplementationDocType> {
	if (tmp_dir === null || tmp_dir === undefined) {
		tmp_dir = os.tmpdir()
	}

	if (file_extension === undefined) {
		file_extension = ""
	}

	const rand = randomUUID({disableEntropyCache: true})
	const file_path = path.join(tmp_dir, rand + file_extension)

	const file = openFile(file_path, "wx", 0o744)

	file.close()

	return file_path
}
