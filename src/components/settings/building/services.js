import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getBuildingData = () => binderGateWay.get(serviceEndPoints.userEndPoints.getBuildingData)
export const addBuilding = params => binderGateWay.post(serviceEndPoints.userEndPoints.getBuildingData,params)
export const editBuilding = (params, id) => binderGateWay.patch(`${serviceEndPoints.userEndPoints.getBuildingData}/${id}`, params)
export const deleteBuilding = id => binderGateWay.delete(`${serviceEndPoints.userEndPoints.getBuildingData}/${id}`)

