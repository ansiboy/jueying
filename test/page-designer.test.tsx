import { PageDesigner } from "../out"
import renderer from "react-test-renderer"
import { componentsConfig } from "./demo"
import * as pageDatas from "./demo/page-datas"
import React from "react"

test("page-designer 测试 loadComponentTypes 方法", async function () {

    let componentTypesToLoad: string[] = []
    let stack = [...pageDatas.simple.children]
    let componentData = stack.pop()
    while (componentData) {
        componentTypesToLoad.push(componentData.type)
        if (componentData.children) {
            componentData.children.forEach(c => {
                if (typeof c != "string")
                    stack.push(c)
            })
        }
        componentData = stack.pop()
    }


    let componentTypes = await PageDesigner.loadComponentTypes(componentTypesToLoad, componentsConfig)
    expect(componentTypes || null).not.toBeNull()
    componentTypesToLoad.forEach(c => {
        expect(componentTypes[c]).not.toBeUndefined()
    })


})

test("page-designer 测试组件类型加载", async function () {

    let component = renderer.create(<PageDesigner pageData={pageDatas.simple} componentsConfig={componentsConfig} />)
    let pageDesigner = component.getInstance() as any as PageDesigner
    expect(pageDesigner).not.toBeNull()

    let componentTypes = pageDesigner.componentTypes
    let typeNames = Object.keys(componentTypes)
    expect(typeNames.length).toEqual(0)

    await new Promise(function (resolve, reject) {

        let componentDidUpdate = pageDesigner.componentDidUpdate
        pageDesigner.componentDidUpdate = function (prevProps: PageDesigner["props"], prevState: PageDesigner["state"], snapshot?: any) {
            if (componentDidUpdate) {
                componentDidUpdate.apply(pageDesigner, [prevProps, prevState, snapshot])
            }

            resolve({})
        }
    })

    componentTypes = pageDesigner.componentTypes
    typeNames = Object.keys(componentTypes)
    expect(typeNames.length).toBeGreaterThan(0)



})