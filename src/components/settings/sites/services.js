import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getSites = params => binderGateWay.get(serviceEndPoints.userEndPoints.getSites,params)
export const addSite = params => binderGateWay.post(serviceEndPoints.userEndPoints.getSites,params)
