import { PageDesigner } from "../out"
import renderer from "react-test-renderer"
import { componentsConfig } from "./demo"
import * as pageDatas from "./demo/page-datas"
import React from "react"
import { componentUpdateFinish } from "./common"

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

    await componentUpdateFinish(pageDesigner)

    componentTypes = pageDesigner.componentTypes
    typeNames = Object.keys(componentTypes)
    expect(typeNames.length).toBeGreaterThan(0)

})

test("page-designer 测试组件类型加载", async function () {

    let component = renderer.create(<PageDesigner pageData={pageDatas.simple} componentsConfig={componentsConfig} />)
    let pageDesigner = component.getInstance() as any as PageDesigner
    expect(pageDesigner).not.toBeNull()


    await componentUpdateFinish(pageDesigner)

    let componentTypes = pageDesigner.componentTypes
    let typeNames = Object.keys(componentTypes)
    expect(typeNames.length).toBeGreaterThan(0)

    let componentEditors = pageDesigner.state.componentEditors[typeNames[0]]
    expect(componentEditors).not.toBeUndefined()

})