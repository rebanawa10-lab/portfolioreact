
// file:    worldtoday.tsx

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";


import { useEffect , useState} from "react";  // React, 
import  AnnouncementVert from "../../mnuReviewNestedSidebarv2/announcement6VertOpenURL" ;

import Accordion from "../../mnuReviewNestedSidebarv2/accordionfunc";



interface Announcement {
  message: string;
  url?: string;
}


const openWindow = (url: string) => {

    const width = 1100;
    const height = 750;

    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.height - height) / 2);

    window.open(url, "_blank",
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
     );

};


const openURL = (text: string, url: string) => {
    return (
        <span 
        style={{ cursor: "pointer", color: "#1976d2" }}
        onClick={(e) => {
            e.stopPropagation(); // prevent TreeItem selection
            openWindow(url);
        }}
        >
        {text}
        </span>
    );
};


export default function WorldTodayV2() {

    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    useEffect(() => {
      const loadAnnouncements = async () => {
        try {
          const res = await fetch("/worldtoday.json");
          const data = await res.json();
          console.log("AnnouncementVert data:" ,  data) // Use comma , NOT + This lets Chrome DevTools display the real object structure.
          setAnnouncements(data);
        } catch (err) {
          console.error("Failed to load announcements:", err);
        }
      };
      loadAnnouncements(); 
    }, []);   
    // Fallback while loading
    if (announcements.length === 0) return <div>Loading announcements...</div>;
    
     // 🔥 MAPPED ANNOUNCEMENTS WITH onClick for popups
  const mappedAnnouncements = announcements.map((ann) => ({
    ...ann,
    onClick: ann.url ? () => openWindow(ann.url!) : undefined
  }));

     return (
        <div>  

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <h2>World Today</h2>  
                <div style={{ width: "300px" }}>
                    <AnnouncementVert
                    announcements={mappedAnnouncements} // use mapped version // passes full {message, url} objects
                    height={16}
                    scrollDuration={600}
                    pauseDuration={4000}
                    />
                </div>
            </div>
            <Accordion title="Highlight">
                <p className="DivTxtFormatHighlight">            
                The module provides direct links to search engines, information on precious metals, and the latest currency and cryptocurrency rates.
                </p>
           
            </Accordion>
            <br></br>

  
            <SimpleTreeView 
                defaultExpandedItems={["1","11","21"]}
            
                sx={{
                    "& .MuiTreeItem-content": {
                    // Prevent hover highlight
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    // Prevent selected highlight
                    "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "transparent",
                    },
                    },
                }}            
            >
                <TreeItem itemId="1" label="Search Engines">
                    <TreeItem itemId="2" label={openURL("Yahoo", "https://sg.yahoo.com/")} />
                    <TreeItem itemId="3" label={openURL("Google", "https://news.google.com/home?hl=en-SG&gl=SG&ceid=SG:en")} />
                    <TreeItem itemId="4" label={openURL("MSN", "https://www.msn.com")} />
                    <TreeItem itemId="5" label={openURL("Wikipedia", "https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today")} />
                </TreeItem>

                <TreeItem itemId="11" label="Earth Minerals">
                    <TreeItem itemId="12" label={openURL("Gold", "https://goldprice.today/?utm_source=chatgpt.com")}  />
                    <TreeItem itemId="13" label={openURL("Silver", "https://xag.today/?utm_source=chatgpt.com")}  />
                </TreeItem>

                <TreeItem itemId="21" label="Currency & Crypto">
                    <TreeItem itemId="22" label={openURL("SGD rate", "https://www.indexmundi.com/xrates/table.aspx?c1=SGD&utm_source=chatgpt.com")}  />
                    <TreeItem itemId="23" label={openURL("Bitcoin", "https://coinmarketcap.com/currencies/bitcoin/")}  />
                    <TreeItem itemId="24" label={openURL("Ethereum", "https://coinmarketcap.com/currencies/ethereum/")}  />
                </TreeItem>

            </SimpleTreeView>
         </div>
          
     );
}

