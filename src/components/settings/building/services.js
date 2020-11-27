import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getBuildingData = () => binderGateWay.get(serviceEndPoints.userEndPoints.getBuildingData)
export const addBuilding = params => binderGateWay.post(serviceEndPoints.userEndPoints.getBuildingData,params)
