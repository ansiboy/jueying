import { errors } from "../src/errors";

test("errors test", function () {

    let e = errors.argumentFieldCanntNull("a", "b");
    expect(e).not.toBeNull();
    expect(e instanceof Error).toBeTruthy();

    

})