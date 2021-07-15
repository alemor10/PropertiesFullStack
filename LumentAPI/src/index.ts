import 'reflect-metadata';
import express, {Application} from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'


async function main() {



    /* create an express app */

    const app = express()

    app.use(helmet())
    app.use(cors())
    app.use(bodyParser.json())

    app.use('/', routes)


    const port = process.env.PORT || 4000

    app.listen(port, () => {
        console.log('listening on port', port)
    })

}

main()



// app.use('/', routes)