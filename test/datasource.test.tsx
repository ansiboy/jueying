import "./common";
import { renderToString } from "react-dom/server";
import { Component, PageData } from "../src/runtime";
import { guid } from "maishu-toolkit/out/guid";

test("dataSource databinding 1", function () {

    let dataSource = {
        text: "hello"
    };
    let pageData1: PageData = {
        id: "simple", type: Component.typeNames.page, props: {},
        dataSource,
        children: [
            { id: guid(), type: Component.typeNames.text, props: { value: "${text}" }, children: [] }
        ]
    }

    let c = Component.parse(pageData1, Component.defaultComponentTypes);
    let html = renderToString(c);
    console.log(html);

    expect(html.indexOf(dataSource.text)).toBeGreaterThan(0);

})

test("dataSource databinding 2", function () {

    let dataSource = [{ name: 'tom' }, { name: 'mary' }];
    let pageData1: PageData = {
        id: "simple", type: Component.typeNames.page,
        props: {},
        children: [
            { id: guid(), type: Component.typeNames.text, props: { value: '${name}' }, dataSource, children: [] }
        ]
    }

    let c = Component.parse(pageData1, Component.defaultComponentTypes);
    let html = renderToString(c);
    console.log(html);

    // for (let d of dataSource)
    expect(html.indexOf(dataSource[0].name)).toBeGreaterThan(0);
    expect(html.indexOf(dataSource[1].name)).toBeGreaterThan(0);

})

test("dataSource databinding 3", function () {

    let dataSource = {
        name: "pc",
        products: [
            { name: "pc1" },
            { name: "pc2" }
        ]
    };
    let pageData1: PageData = {
        id: "simple", type: Component.typeNames.page, props: {},
        dataSource,
        children: [
            { id: guid(), type: Component.typeNames.text, props: { value: '${name}' }, dataSource: '${products}', children: [] }
        ]
    };

    let c = Component.parse(pageData1, Component.types);
    let html = renderToString(c);
    console.log(html);

    expect(html.indexOf(dataSource.products[0].name)).toBeGreaterThan(0);
    expect(html.indexOf(dataSource.products[1].name)).toBeGreaterThan(0);

})

test("dataSource databinding 4", function () {

    let dataSource = [
        {
            name: "c1",
            products: [
                { name: "pc1" },
                { name: "pc2" }
            ]
        },
        {
            name: "c2",
            products: [
                { name: "pc3" },
                { name: "pc4" }
            ]
        },
    ];
    let pageData1: PageData = {
        id: "simple", type: Component.typeNames.page,
        props: {},
        children: [
            {
                id: guid(), type: Component.typeNames.container,
                props: {}, dataSource,
                children: [
                    { id: guid(), type: Component.typeNames.text, props: { value: '${name}' }, dataSource: '${products}', children: [] }
                ]
            }
        ]
    }

    let c = Component.parse(pageData1, Component.types);
    let html = renderToString(c);
    console.log(html);

    expect(html.indexOf(dataSource[0].products[0].name)).toBeGreaterThan(0);
    expect(html.indexOf(dataSource[0].products[1].name)).toBeGreaterThan(0);

    expect(html.indexOf(dataSource[1].products[0].name)).toBeGreaterThan(0);
    expect(html.indexOf(dataSource[1].products[1].name)).toBeGreaterThan(0);

})