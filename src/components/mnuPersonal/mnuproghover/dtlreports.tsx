// file:    dtlreports.tsx 

import strtxt from "./dtlreports.txt?raw" ;
import "./dtl.css";
import { useMemo } from "react";
import { formatTextToElements } from "../../../utils/formattext" ;

export default function dtprog(){
    const formattedText = useMemo(() => {
        return formatTextToElements(strtxt);
    }, []);

    return <div className="DivTxtFormat">{formattedText}</div>;

}

