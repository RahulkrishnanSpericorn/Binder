import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getConsultancies = params => binderGateWay.get(serviceEndPoints.userEndPoints.getConsultancies, params)
export const addConsultancies = params => binderGateWay.post(serviceEndPoints.userEndPoints.getConsultancies, params)
export const getConsultanciesById = id => binderGateWay.get(`${serviceEndPoints.userEndPoints.getConsultancies}/${id}`)
export const editConsultanciesById = (params,id) => binderGateWay.patch(`${serviceEndPoints.userEndPoints.getConsultancies}/${id}`,params)

