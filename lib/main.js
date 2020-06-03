"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.warn('THIS ACTION HAS BEEN DEPRECATED. PLEASE REFER TO THE README FOR INFO ON HOW TO UPDATE YOUR WORKFLOWS.');
            yield exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.add("Coverage"); using Coverage; Codecov.submit(process_folder())']);
        }
        catch (error) {
            // We are making errors non fatal for now because this for example
            // will generally not work if triggered by a PR, which is a common
            // situation.
            // core.setFailed(error.message)
            core.debug(error.message);
        }
    });
}
run();
