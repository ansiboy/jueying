// import * as j from '../lib/jquery-2.1.3'
// let jquery = window['$'] || window['jQuery'];
// if (jquery == null) {
//     window['$'] = window['jQuery'] = j
// }
import * as j from "jquery";
let jquery = (window as any)['$'] || (window as any)['jQuery'];
if (jquery == null) {
    (window as any)["$"] = (window as any)["jQuery"] = j as any;
}

