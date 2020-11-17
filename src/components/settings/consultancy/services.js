import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getConsultancies =params =>binderGateWay.get(serviceEndPoints.userEndPoints.getConsultancies, params)
export const addConsultancies =params =>binderGateWay.post(serviceEndPoints.userEndPoints.getConsultancies, params)

