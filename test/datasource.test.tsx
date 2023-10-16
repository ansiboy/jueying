import "./common";
import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { Component, PageData } from "../src/runtime";
import { guid } from "maishu-toolkit/out/guid";
import React from "react";

test("dataSource databinding 1", function () {

    let childTag = "span";
    let dataSource = {
        text: "hello"
    };
    let pageData1: PageData = {
        id: "simple", type: Component.typeNames.page, props: { dataSource },
        children: [
            { id: guid(), type: Component.typeNames.text, props: { value: "${text}" }, children: [] }
        ]
    }

    let c = Component.parse(pageData1, Component.types);
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
            { id: guid(), type: Component.typeNames.text, props: { dataSource, value: '${name}' }, children: [] }
        ]
    }

    let c = Component.parse(pageData1, Component.types);
    let html = renderToString(c);
    console.log(html);

    // for (let d of dataSource)
    expect(html.indexOf(dataSource[0].name)).toBeGreaterThan(0);
    expect(html.indexOf(dataSource[1].name)).toBeGreaterThan(0);

})