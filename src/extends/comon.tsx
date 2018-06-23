namespace jueying.extentions {

    export function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    export function isEquals(obj1: object, obj2: object) {

        if ((obj1 == null && obj2 != null) || (obj1 != null && obj2 == null))
            return false;

        if (obj1 == null && obj2 == null)
            return true;

        var type = typeof obj1;
        if (type == 'number' || type == 'string' || obj1 instanceof Date) {
            return obj1 == obj2;
        }

        if (Array.isArray(obj1)) {
            if (!Array.isArray(obj2))
                return false;

            if (obj1.length != obj2.length)
                return false;

            for (let i = 0; i < obj1.length; i++) {
                if (!isEquals(obj1[i], obj2[i])) {
                    return false;
                }
            }

            return true;
        }

        let keys1 = Object.getOwnPropertyNames(obj1)
            .filter(o => !skipField(obj1, o))
            .sort();
        let keys2 = Object.getOwnPropertyNames(obj2)
            .filter(o => !skipField(obj2, o))
            .sort();

        if (!isEquals(keys1, keys2))
            return false;

        for (let i = 0; i < keys1.length; i++) {
            let key = keys1[i];
            let value1 = obj1[key];
            let value2 = obj2[key];

            if (!isEquals(value1, value2)) {
                return false;
            }
        }

        return true;
    }

    function skipField(obj: any, field: string): boolean {
        return typeof obj[field] == 'function';
    }




}