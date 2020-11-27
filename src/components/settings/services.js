import { binderGateWay } from '../../services/authorizationService'
import * as serviceEndPoints from '../../config/serviceEndPoints'

export const getConsultancyDropdown = () => binderGateWay.get(serviceEndPoints.userEndPoints.getConsultancyDropdown)
export const getClientDropdown = params => binderGateWay.get(serviceEndPoints.userEndPoints.getClientDropdown,{params})
export const getRegionDropdown = params => binderGateWay.get(serviceEndPoints.userEndPoints.getRegionDropdown,{params})
export const getSitesDropdown = params => binderGateWay.get(serviceEndPoints.userEndPoints.getSitesDropdown,{params})

