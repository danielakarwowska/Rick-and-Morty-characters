import React, {Dispatch, ReactNode} from "react";

export type Props = {
    children: ReactNode
}
export type Episode = {
    [x: string]: any;
    map(arg0: any): React.ReactNode;
    id: number
    name: string
    status: string
    image: any
    origin: string
    gender: string
}