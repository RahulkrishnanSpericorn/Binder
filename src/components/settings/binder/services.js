import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getBinder = params => binderGateWay.get(serviceEndPoints.userEndPoints.getBinder,params)
export const addBinder = params => binderGateWay.post(serviceEndPoints.userEndPoints.getBinder,params)
export const deleteBinder = id => binderGateWay.delete(`${serviceEndPoints.userEndPoints.getBinder}/${id}`)


