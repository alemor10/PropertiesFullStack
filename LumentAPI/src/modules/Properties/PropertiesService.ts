import {Request, Response} from 'express'
import { deserializeArray, plainToClass } from 'class-transformer';

// import data from '../../data/properties.json';
import { IPropertyRawData, IPropertyResponse } from './types';
import fs from 'fs';
import path from 'path';
import neatCsv from 'neat-csv';


// read csv
async function ReadCSV(): Promise< IPropertyRawData[] > {
    const csv = fs.readFileSync(path.join(__dirname,"../../data/properties.csv"));
    const res : IPropertyRawData[] =  await neatCsv(csv)
    return res;
}


// dedicated function to map object properties to desired response 
function CaliforniaPropertyResponse( input: IPropertyRawData ) : Partial<IPropertyResponse> { 

        let res : Partial<IPropertyResponse> = {
            PROP_NAME: input.PROP_NAME,
            ADDRESS:  input.ADDRESS,
            CITY:   input.CITY,
            STATE:  input.STATE_ID,
            ZIP:    input.ZIP,
            // MISSING_FIELD_COUNTS: 0,
            // MISSING_DATA_ENCODING: 0
        }

        let TEMP_MISSING_DATA_ENCODING = ''
        let TEMP_MISSING_FIELD_COUNTS = 0 
        let keyCount = 1

        const keys = Object.values(res)

        keys.forEach( ( value, index ) => {
            if ( value === ''  ) {
                TEMP_MISSING_FIELD_COUNTS ++  

                // check next value and also safe guard against undefined values
                if ( keys[index + 1] !== ''  ||  keys[index + 1] !== undefined ) {
                    TEMP_MISSING_DATA_ENCODING = TEMP_MISSING_DATA_ENCODING + keyCount.toString()
                    keyCount = 0 
                }

            }
            else {
                if ( keys[index + 1] === ''  && keys[index + 1] !== undefined ) {
                    TEMP_MISSING_DATA_ENCODING =  TEMP_MISSING_DATA_ENCODING + keyCount.toString()
                    keyCount = 0  
                }
            }

            if ( index === keys.length-1 && keyCount !== 0 ) {
                TEMP_MISSING_DATA_ENCODING = TEMP_MISSING_DATA_ENCODING + keyCount.toString()
            }
            keyCount += 1
        });

        // // append last result
        // TEMP_MISSING_DATA_ENCODING =  TEMP_MISSING_FIELD_COUNTS + (keyCount - 1).toString()

        if ( TEMP_MISSING_FIELD_COUNTS === 0 ) {
            res.MISSING_FIELD_COUNTS = 0
            res.MISSING_DATA_ENCODING = keys.length   
        }
        else {
            res.MISSING_FIELD_COUNTS = TEMP_MISSING_FIELD_COUNTS
            res.MISSING_DATA_ENCODING = parseInt( TEMP_MISSING_DATA_ENCODING ) 
        }


        return res


};


// dedicated function to fetch california properties from csv
function GetCaliforniaProperties( dataArray: IPropertyRawData[] ): IPropertyResponse[] {

        const res = dataArray.reduce( ( acc, item ) => {
            if ( item.STATE_ID === 'ca' ) 
                acc.push( CaliforniaPropertyResponse(item) );

            return acc;
        }, [] )

        return res        
}


export default async (req: Request, res: Response) => {

    const data = await ReadCSV()

    const result = GetCaliforniaProperties( data )

    res.json(result);
}
