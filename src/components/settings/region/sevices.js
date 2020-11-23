import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getRegion = params => binderGateWay.get(serviceEndPoints.userEndPoints.getRegion,params)