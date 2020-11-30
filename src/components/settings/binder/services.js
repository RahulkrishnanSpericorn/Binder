import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const addBinder = params => binderGateWay.post(serviceEndPoints.userEndPoints.getBinder,params)
