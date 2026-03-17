
// file:    dtldb.tsx 

import strtxt from "./dtldb.txt?raw" ;
import "./dtl.css";
import { useMemo } from "react";
import { formatTextToElements } from "../../../utils/formattext" ;

export default function dtldb(){
    const formattedText = useMemo(() => {
        return formatTextToElements(strtxt);
    }, []);

    return <div className="DivTxtFormat">{formattedText}</div>;

}