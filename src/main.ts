import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run() {
    try {
        await exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.add("Coverage"); using Coverage; Codecov.submit(process_folder())'])
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
