import * as actionTypes from "./constants";

const initialState = {
    getActivityListResponse: {},
    addActivityData: {},
    deleteActivityData: {},
    editActivityData: {}
};

const reducerResp = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ACTIVITY_LIST_REQUEST:
            return {
                ...state
            };
        case actionTypes.GET_ACTIVITY_LIST_SUCCESS:
            return {
                ...state,
                getActivityListResponse: { success: true, ...action.response }
            };
        case actionTypes.GET_ACTIVITY_LIST_FAILURE:
            return {
                ...state,
                getActivityListResponse: { success: false, ...action.error }
            };

        case actionTypes.ADD_ACTIVITY_REQUEST:
            return {
                ...state
            };
        case actionTypes.ADD_ACTIVITY_SUCCESS:
            return {
                ...state,
                addActivityData: { success: true, ...action.response }
            };
        case actionTypes.ADD_ACTIVITY_FAILURE:
            return {
                ...state,
                addActivityData: { success: false, ...action.error }
            };

        case actionTypes.DELETE_ACTIVITY_REQUEST:
            return {
                ...state
            };
        case actionTypes.DELETE_ACTIVITY_SUCCESS:
            return {
                ...state,
                deleteActivityData: { success: true, ...action.response }
            };
        case actionTypes.DELETE_ACTIVITY_FAILURE:
            return {
                ...state,
                deleteActivityData: { success: false, ...action.error }
            };

        case actionTypes.EDIT_ACTIVITY_REQUEST:
            return {
                ...state
            };
        case actionTypes.EDIT_ACTIVITY_SUCCESS:
            return {
                ...state,
                editActivityData: { success: true, ...action.response }
            };
        case actionTypes.EDIT_ACTIVITY_FAILURE:
            return {
                ...state,
                editActivityData: { success: false, ...action.error }
            };

        default:
            return {
                ...state
            };
    }
};

export default reducerResp;
