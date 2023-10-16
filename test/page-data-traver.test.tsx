import { Component, ComponentClass, PageData, PageDataHelper as PageDataTravel } from "../src"

let Page = Component.types[Component.typeNames.page] as ComponentClass;

test("ComponentDataTraver each 测试", async function () {

    let ids = {
        image1: "image1",
        div1: "div1",
        div2: "div2"
    }
    let pageData1: PageData = {
        id: "simple", type: Page.typeName, props: {},
        children: [
            { id: ids.image1, type: "Image", props: { url: "abc" }, children: [] }
        ]
    }

    // let travel = new PageDataTravel(pageData1)
    let componentDataIds: string[] = []
    PageDataTravel.each(pageData1, (c) => {
        if (typeof c != "string")
            componentDataIds.push(c.id)
    })

    expect(componentDataIds[0]).toEqual(pageData1.id)


    let pageData2: PageData = {
        id: "pageData2", type: Page.typeName, props: {},
        children: [
            { id: ids.image1, type: "Image", props: { url: "abc" }, children: [] },
            {
                id: ids.div1, type: "div", props: {},
                children: [
                    { id: ids.div2, type: "div", props: {}, children: [] }
                ]
            }
        ]
    }

    componentDataIds = []
    PageDataTravel.each(pageData2,(c) => {
        if (typeof c != "string")
            componentDataIds.push(c.id)
    })

    expect(componentDataIds.indexOf(ids.image1)).toBeGreaterThanOrEqual(0)
    expect(componentDataIds.indexOf(ids.div1)).toBeGreaterThanOrEqual(0)
    expect(componentDataIds.indexOf(ids.div2)).toBeGreaterThanOrEqual(0)
})