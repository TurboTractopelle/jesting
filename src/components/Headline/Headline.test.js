import React from "react"
import {shallow} from "enzyme"
import Headline from "./Headline"

function findByTestAttribute(component, attr){
    // [target=_blank]
    // document.querySelectoAll([target=blank])
    return component.find(`[data-test='${attr}']`)
}

function setup(props = {}){
    return shallow(<Headline {...props} />)
}

describe('Headline', () => {

    
    describe('with no passes props', () => {
        let wrapper
        beforeEach(()=>{
            wrapper = setup()
        })
        it('do not display the component', ()=>{
            expect(findByTestAttribute(wrapper, "Headerline")).toHaveLength(0)
        })
    })

    describe('with passed props', () => {
let wrapper
        beforeEach(()=>{
            wrapper = setup({header: "my header", desc:"my desc"})
        })
        it("display the component", ()=>{
            console.log(wrapper.debug())
            expect(findByTestAttribute(wrapper, "Headline")).toHaveLength(1)
    
        })



    })
    



})
