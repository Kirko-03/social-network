import React from 'react';
import {create} from 'react-test-renderer'
import ProfileStatus from "../components/Profile/ProfileStatus";

test('after creation <span> should be displayed', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status='it-kamasutra'/>)
    const root = component.root
    // @ts-ignore
    let span = root.findByType('span')
    expect(span).toBe(1)
})
test('after creation <span> should contains correct status', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status='it-kamasutra'/>)
    const root = component.root
    // @ts-ignore
    let span = root.findByType('span')
    // @ts-ignore
    expect(span.children.toString()).toBe('it-kamasutra')
})
test('after creation <input> should be displayed', () => {
    // @ts-ignore
    const component = create(<ProfileStatus status='it-kamasutra'/>)
    const root = component.root
    // @ts-ignore
   expect(()=>{
       let input = root.findByType('input')
   }).toThrow()
})
