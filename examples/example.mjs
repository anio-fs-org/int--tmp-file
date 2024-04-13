import {tmpfile, tmpfileSync} from "../src/index.mjs"

console.log(
	await tmpfile()
)

console.log(
	tmpfileSync()
)
