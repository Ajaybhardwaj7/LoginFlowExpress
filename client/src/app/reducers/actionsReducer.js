import _ from 'lodash';
export default function(state={USER_INFO:{}},action){

    switch(action.type){
        case "USER_INFO" : {
            return _.assign({},state,{USER_INFO:action.payload.data})
        }
        default : return state
    }
}