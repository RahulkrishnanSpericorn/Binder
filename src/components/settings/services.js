import { binderGateWay } from '../../services/authorizationService'
import * as serviceEndPoints from '../../config/serviceEndPoints'

export const getConsultancyDropdown = () => binderGateWay.get(serviceEndPoints.userEndPoints.getConsultancyDropdown)
export const getClientDropdown = params => binderGateWay.get(serviceEndPoints.userEndPoints.getClientDropdown,{params})

