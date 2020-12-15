import * as actionTypes from "./constants";
import * as Service from "./services";

const getSites = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_SITES_REQUEST });
            const res = await Service.getSites(params);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_SITES_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.GET_SITES_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.GET_SITES_FAILURE, error: res.response && res.response.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_SITES_FAILURE, error: e.response && e.response.data });
        }
    };
};

const addSite = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_SITES_REQUEST });
            const res = await Service.addSite(params);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_SITES_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.ADD_SITES_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.ADD_SITES_FAILURE, error: res.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_SITES_FAILURE, error: e.response && e.response.data });
        }
    };
};

const editSiteById = (params, id) => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.EDIT_SITES_BYID_REQUEST });
            const res = await Service.editSiteById(params, id);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.EDIT_SITES_BYID_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.EDIT_SITES_BYID_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.EDIT_SITES_BYID_FAILURE, error: res.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.EDIT_SITES_BYID_FAILURE, error: e.response && e.response.data });
        }
    };
};

const deleteSite = id => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.DELETE_SITES_BYID_REQUEST });
            const res = await Service.deleteSite(id);
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.DELETE_SITES_BYID_SUCCESS, response: res.data });
                } else {
                    dispatch({ type: actionTypes.DELETE_SITES_BYID_FAILURE, error: res.data });
                }
            } else {
                dispatch({ type: actionTypes.DELETE_SITES_BYID_FAILURE, error: res.data });
            }
        } catch (e) {
            dispatch({ type: actionTypes.DELETE_SITES_BYID_FAILURE, error: e.response && e.response.data });
        }
    };
};

export default {
    getSites,
    addSite,
    editSiteById,
    deleteSite
};
