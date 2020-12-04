import { binderGateWay } from '../../../services/authorizationService'
import * as serviceEndPoints from '../../../config/serviceEndPoints'

export const getActivityList = params => binderGateWay.get(serviceEndPoints.activityEndPoints.getActivityList,params)
export const addActivity = params => binderGateWay.post(serviceEndPoints.activityEndPoints.addActivity,params)
export const deleteActivity = id => binderGateWay.delete(`${serviceEndPoints.activityEndPoints.deleteActivity}/${id}`)
export const editActivity = (params, id) => binderGateWay.patch(`${serviceEndPoints.activityEndPoints.editActivity}/${id}`, params)


