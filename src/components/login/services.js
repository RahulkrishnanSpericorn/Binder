import { binderGateWay } from '../../services/authorizationService'
import * as serviceEndPoints from '../../config/serviceEndPoints'
export const login = params => binderGateWay.post(serviceEndPoints.userEndPoints.loginUser, params)