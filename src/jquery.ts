import * as j from "jquery";
let jquery = (window as any)['$'] || (window as any)['jQuery'];
if (jquery == null) {
    (window as any)["$"] = (window as any)["jQuery"] = j as any;
}

