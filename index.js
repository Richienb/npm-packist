"use strict"

const path = require("path")
const packlist = require("npm-packlist")
const tar = require("tar")
const readPkg = require("read-pkg")
const { default: ow } = require("ow")

module.exports = async (cwd = process.cwd(), { fileName } = {}) => {
	ow(cwd, ow.string)
	ow(fileName, ow.any(ow.string, ow.undefined))

	const { name, version } = await readPkg({ cwd })

	fileName = path.resolve(process.cwd(), fileName || `${name}-v${version}.tgz`)

	const files = await packlist({ path: cwd })
	if (files.length === 0) throw new Error("Unable to find any packable files!")

	await tar.create({
		cwd,
		file: fileName,
		gzip: true,
	}, files)

	return fileName
}
