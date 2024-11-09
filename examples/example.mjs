import {tmpFile, tmpFileSync} from "../dist/default/index.mjs"

console.log(
	await tmpFile()
)

console.log(
	tmpFileSync()
)
