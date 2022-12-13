import React, {Dispatch, ReactNode} from "react";

export type Props = {
    children: ReactNode
}
export type Episode = {
    id: number
    name: string
    status: string
    image: any
    origin: string
    gender: string
}