import React, {Dispatch, ReactNode} from "react";

export type Props = {
    children: ReactNode
}
export type Episode = {
    name: string;
    gender: string;
    image: string;
    origin: OriginCharacter;
    species: string;
    status: string;
    type?: string;
    url?: string;
    locattion?: LocationCharacter;
    episode?: string[];
    created?: string;
}
interface OriginCharacter {
    name: string;
    url?: string;
  }
  interface LocationCharacter {
    name: string;
    url: string;
  }
  export interface _DATA {
    next: () => void;
    prev: () => void;
    jump: (page: number) => void;
    currentData: () => Episode;
    currentPage: number;
    maxPage: number;
  }
 