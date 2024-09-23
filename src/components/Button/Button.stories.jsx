import {Button} from "./Button";
import React from "react";

// default export for sidemenu panel metadata
export default {
    title : 'Form/Button',
    component : Button
}

// named export each export representing a story ( basically s react compoent for Button component )

export const Primary = ()=> <Button variant="primary">Primary</Button>

export const Secondary = ()=> <Button variant="secondary">Secondary</Button>

export const Danger = ()=> <Button variant="danger">Danger</Button>

