// import * as j from '../lib/jquery-2.1.3'
// let jquery = window['$'] || window['jQuery'];
// if (jquery == null) {
//     window['$'] = window['jQuery'] = j
// }
import j = require("jquery");
let jquery = window['$'] || window['jQuery'];
if (jquery == null) {
    window['$'] = window['jQuery'] = j
}

