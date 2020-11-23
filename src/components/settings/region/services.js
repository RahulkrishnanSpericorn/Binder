import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getRegion = params => binderGateWay.get(serviceEndPoints.userEndPoints.getRegion,params)
export const addRegion = params => binderGateWay.post(serviceEndPoints.userEndPoints.getRegion,params)