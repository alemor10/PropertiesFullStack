import create from "zustand"
import { IContent } from "../types/types"

const json:IContent = JSON.parse( JSON.stringify(
    {
        "headerData": ["30%", "$2000000", "85%"],
        "contentA": "This should be displayed in Panel A. This is visible by default",
        "contentB": "This should be displayed in Panel B. This should be hidden by default"
    }
))

interface ContentState {
    headerData: string[];
    contentA: string;
    contentB: string;
    contentSwitch: boolean;
    changeContent(): any;
}


export const useContentStore = create<ContentState>(
    (set) => ( { 
        headerData: json.headerData,
        contentA: json.contentA,
        contentB: json.contentB,
        contentSwitch: false,
        changeContent: () => set((state) => ({ contentSwitch: !state.contentSwitch })),
    })
)