import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getSites = params => binderGateWay.get(serviceEndPoints.userEndPoints.getSites,params)
export const addSite = params => binderGateWay.post(serviceEndPoints.userEndPoints.getSites,params)
export const editSiteById = (params, id) => binderGateWay.patch(`${serviceEndPoints.userEndPoints.getSites}/${id}`, params)
export const deleteSite = id => binderGateWay.delete(`${serviceEndPoints.userEndPoints.getSites}/${id}`)

