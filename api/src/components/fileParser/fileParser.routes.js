import express from 'express'
import { secretFiles, unFormattedSecretFiles } from './fileParser.controller.js'

const fileRouter = express.Router()

fileRouter.get('/data', secretFiles)
fileRouter.get('/list', unFormattedSecretFiles)

export default fileRouter
