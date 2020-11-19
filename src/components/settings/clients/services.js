import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getClients = params => binderGateWay.get(serviceEndPoints.userEndPoints.getClients,params)
export const addClients = params => binderGateWay.post(serviceEndPoints.userEndPoints.getClients,params)