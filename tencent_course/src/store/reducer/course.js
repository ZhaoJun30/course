import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData: [],
    listData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },
    shopCart: {
        unpay: [],
        selectAll: true
    },
    searchCourse: {
        total: 1,
        limit: 10,
        page: 1,
        type: null,
        data: []
    }
};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.COURSE_QUERY_BANNER:
            let {code, data} = action.bannerData;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        case TYPES.COURSE_QUERY_LIST:
            let {result, flag, courseType} = action;
            if (result.code === 0) {
                state.listData.total = parseFloat(result.total);
                state.listData.limit = parseFloat(result.limit);
                state.listData.page = parseFloat(result.page);
                state.listData.data = state.listData.data.concat(result.data);
            }
            break;
        case TYPES.COURSE_SEARCH_LIST:
            let {search_result} = action;
            let {searchCourse} = state;
            if (search_result.code === 0) {
                searchCourse.total = parseFloat(search_result.total);
                searchCourse.limit = parseFloat(search_result.limit);
                searchCourse.page = parseFloat(search_result.page);
                if (searchCourse.data !== []) {
                    searchCourse.type === search_result.data[0].type ? searchCourse.data = searchCourse.data.concat(search_result.data) : (searchCourse.data = search_result.data, searchCourse.type = search_result.data[0].type);
                } else {
                    searchCourse.data = search_result.data;
                    searchCourse.type = search_result.data[0].type;
                }
            }
            break;
        case TYPES.COURSE_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
            }
            break;
    }
    return state;
};
