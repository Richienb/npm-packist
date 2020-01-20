/**
 * Pack npm modules.
 * @param cwd The directory to pack the modules from.
 * @param options Options.
 * @example
 * ```
 * const npmPackist = require("npm-packist");
 *
 * (async () => {
 * 	await npmPackist(".")
 *  //=> 'C:\\Users\\richi\\Documents\\GitHub\\npm-packist\\the-module-v0.0.0.tgz'
 * })()
 * ```
*/
declare function npmPackist(cwd?: string, options?: {
	/** The filename to save the tgz file as. */
	fileName?: string
}): Promise<string>

export = npmPackist;
