
// file:    dtlscripting.tsx 

import strtxt from "./dtlscripting.txt?raw" ;
import "./dtl.css";
import { useMemo } from "react";
import { formatTextToElements } from "../../../utils/formattext" ;

export default function dtlscripting(){

    const formattedText = useMemo(() => {
        return formatTextToElements(strtxt);
    }, []);

    return <div className="DivTxtFormat">{formattedText}</div>;

}