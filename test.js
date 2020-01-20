const path = require("path")
const test = require("ava")
const tar = require("tar")
const npmPackist = require(".")

test("main", async (t) => {
	const cwd = path.resolve("./fixtures")
	const packed = path.resolve("./packed.tgz")

	t.is(await npmPackist(cwd, { fileName: packed }), packed)

	const dirs = []
	await tar.list({
		file: packed,
		onentry: ({ path: dir }) => dirs.push(dir),
	})

	t.deepEqual(dirs, ["index.js", "package.json"])
})
