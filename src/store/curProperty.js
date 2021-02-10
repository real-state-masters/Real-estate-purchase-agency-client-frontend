import createAsyncSlice from './helper/createAsyncSlice';
import {GET_PROP_BY_ID} from '../Api'


const results = createAsyncSlice({
    name: 'current_property',
    fetchConfig: (payload) => GET_PROP_BY_ID(payload)
})

export const fetchProperty = results.asyncAction;

export default results.reducer;