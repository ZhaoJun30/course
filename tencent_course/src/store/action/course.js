import * as TYPES from '../action-types';
import { queryBanner, queryList ,queryShopCart} from '../../api/course';


let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER,
                bannerData
            })
        };
    },
    queryList(payload={}) {
        return async dispatch => {
            let {limit=10,page=1,type='all',flag='push'} = payload;
            let result = await queryList({limit,page,type});
            dispatch({
                type: TYPES.COURSE_QUERY_LIST,
                result
            })
        }
    },
    searchList(payload={}){
      return async dispatch=>{
          let {limit=10,page=1,type} = payload;
          let search_result = await queryList({limit,page,type});
          dispatch({
              type:TYPES.COURSE_SEARCH_LIST,
              search_result
          })

      }
    },
    queryUnpay(){
        return async dispatch=>{
            let result = await queryShopCart(0);
            dispatch({
                type:TYPES.COURSE_UNPAY,
                result
            });
        }
    }
};
export default course;