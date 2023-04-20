import { getConfig } from './rollup.base.js'
import scss from 'rollup-plugin-scss'
export default [getConfig('vue'),{
    input: "style/index.scss",
    plugins: [
        scss({
            output: "lib/index.css",
            outputStyle: "compressed"
        }),
    ]
}]