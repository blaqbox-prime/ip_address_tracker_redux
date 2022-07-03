import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "../Header";

// create a parent node to test the component on
let container = null;

beforeEach(()=>{
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{
    // cleanup an existing container
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renders Header with title",()=>{
    act(()=>{
        render(<Header/>, container);
    });
    expect(container.querySelector('#Header__title').textContent).toBe("IP Address Tracker");
})