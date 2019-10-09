import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run() {
    try {
        await exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.add("Coverage"); using Coverage; Codecov.submit(process_folder())'])
    } catch (error) {
        // We are making errors non fatal for now because this for example
        // will generally not work if triggered by a PR, which is a common
        // situation.
        // core.setFailed(error.message)
    }
}

run()
