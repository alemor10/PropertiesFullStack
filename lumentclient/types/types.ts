export interface IPropertyResponse {
    PROP_NAME: string
    ADDRESS: string
    CITY: string
    STATE: string
    ZIP: string
    MISSING_FIELD_COUNTS: number
    MISSING_DATA_ENCODING: number
}

export interface IContent {
    headerData: string[]
    contentA: string
    contentB: string

}