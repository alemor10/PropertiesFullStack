export interface IPropertyResponse {
    PROP_NAME: string
    ADDRESS: string
    CITY: string
    STATE: string
    ZIP: string
    MISSING_FIELD_COUNTS: number
    MISSING_DATA_ENCODING: number
}

export interface IPropertyRawData {
    MSA_ID: string
    MEASURE_DATE: string
    SURVEY_DATE: string
    PROP_ID: string
    PROP_NAME: string
    PROPERTY_STATUS: string
    YEAR_BUILT: string
    PROPERTY_TOTAL_UNITS: string
    PROPERTY_GRADE_WITHIN_SUBMARKET: string
    PROPERTY_GRADE_WITHIN_MARKET: string
    SUBMARKET_GRADE_WITHIN_MARKET: string
    SUBMARKET: string
    MSA_NAME: string
    ADDRESS: string
    CITY: string
    STATE_ID: string
    ZIP: string
    WEBSITE_ADDRESS: string
    LATITUDE: string
    LONGITUDE: string
    CENSUS_TRACT: string
    CENSUS_BLOCK_GROUP: string
    COUNTY_NAME: string
    FIPS_CODE: string
}