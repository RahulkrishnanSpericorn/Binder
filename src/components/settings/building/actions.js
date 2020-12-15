import * as actionTypes from "./constants";
import * as Service from "./services";

const getBuildingData = () => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_BUILDING_REQUEST });
            const res = await Service.getBuildingData();
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_BUILDING_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.GET_BUILDING_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.GET_BUILDING_FAILURE, error: res.response && res.response.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_BUILDING_FAILURE, error: e.response && e.response.data });
        }
    };
};

const addBuilding = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_BUILDING_REQUEST });
            const res = await Service.addBuilding(params);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_BUILDING_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.ADD_BUILDING_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.ADD_BUILDING_FAILURE, error: res.response && res.response.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_BUILDING_FAILURE, error: e.response && e.response.data });
        }
    };
};

const editBuilding = (params, id) => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.EDIT_BUILDING_REQUEST });
            const res = await Service.editBuilding(params, id);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.EDIT_BUILDING_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.EDIT_BUILDING_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.EDIT_BUILDING_FAILURE, error: res.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.EDIT_BUILDING_FAILURE, error: e.response && e.response.data });
        }
    };
};

const deleteBuilding = id => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.DELETE_BUILDING_REQUEST });
            const res = await Service.deleteBuilding(id);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.DELETE_BUILDING_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.DELETE_BUILDING_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.DELETE_BUILDING_FAILURE, error: res.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.DELETE_BUILDING_FAILURE, error: e.response && e.response.data });
        }
    };
};

export default {
    getBuildingData,
    addBuilding,
    editBuilding,
    deleteBuilding
};
