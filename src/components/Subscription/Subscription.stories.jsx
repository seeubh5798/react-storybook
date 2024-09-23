import { Danger } from "../Button/Button.stories"
import { Large } from "../Input/Input.stories"
import React from "react";


export default {
    title : "Form/Subscription"
}


//  stories within a story
export const Subscription = ()=>{
     return <>
    <Large />
    <Danger />
    </>
    
}