import createAsyncSlice from './helper/createAsyncSlice';
import {GET_All_PROPS} from '../Api'

///1612801533602165fd8bfc4

const results = createAsyncSlice({
    name: 'search_results',
    fetchConfig: () => GET_All_PROPS()
})

export const fetchResults = results.asyncAction;

export default results.reducer;