export const API_URL = 'https://real-estate-client-api.herokuapp.com'

export function GET_All_PROPS(){
    return{
        url: `${API_URL}/properties`,
        options: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
    }
}


export function GET_PROP_BY_ID(payload){
    return {
        url: `https://real-estate-client-api.herokuapp.com/properties/${payload.id}`,
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    }
}

export function GET_PROP_BY_LOCATION(payload){
  return {
      url: `https://real-estate-client-api.herokuapp.com/location/${payload}`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
  }
}