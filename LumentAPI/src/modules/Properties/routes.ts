import {Router} from 'express'

import getData from './PropertiesService'

const router = Router()

router.get('/data', getData )

export default router