export const API_URL = 'https://real-estate-client-api.herokuapp.com'

let token = localStorage.getItem('token')
export function GET_All_PROPS(){
    if(token){
      return{
          url: `${API_URL}/properties/last`,
          options: {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',   
                'Authorization': 'Bearer ' + token
              }
          }
      }
    } else{
        return{
          url: `${API_URL}/properties/last`,
          options: {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',   
              }
          }
        }
    }
}


export function GET_PROP_BY_ID(payload){
  if(token){
    return {
      url: `${API_URL}/properties/${payload.id}`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
  }
  }else{
    return {
        url: `${API_URL}/properties/${payload.id}`,
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    }
  }
}





export function GET_PROP_BY_LOCATION(payload){
  if(token){
    return {
      url: `${API_URL}/location/${payload}`,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
    }
  }else{

    return {
        url: `${API_URL}/location/${payload}`,
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    }
  }
}