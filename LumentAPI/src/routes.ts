import {Router} from 'express'



const router = Router()

import PropertiesRouter from './modules/Properties/routes'

router.use('/Properties', PropertiesRouter)

router.all('*', (req, res) => res.sendStatus(404))

export default router