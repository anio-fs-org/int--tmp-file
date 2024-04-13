import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function tmpfile(file_extension = "", tmp_dir = null) {
	return async_impl(file_extension, tmp_dir)
}

export function tmpfileSync(file_extension = "", tmp_dir = null) {
	return sync_impl(file_extension, tmp_dir)
}
