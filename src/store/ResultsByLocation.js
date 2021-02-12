import createAsyncSlice from './helper/createAsyncSlice';
import {GET_PROP_BY_LOCATION} from '../Api'

const results = createAsyncSlice({
    name: 'search_by_location_results',
    fetchConfig: (location) => GET_PROP_BY_LOCATION(location)
})

export const fetchResultsByLocation = results.asyncAction;

export default results.reducer;