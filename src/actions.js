import { browserHistory } from 'react-router'
import $ from 'jquery'



export function createUser(formValues) {
  return function (dispatch) {
    dispatch({type: 'CREATING_USER'})

    $.ajax({
     url: 'https://haven-api-rails.herokuapp.com/users',
     type: 'POST',
     data: JSON.stringify({auth: {name: formValues.name, email: formValues.email, password: formValues.password}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     localStorage.setItem('jwt', response.jwt)
     dispatch({type: 'LOGIN_USER', currentUser: response.current_user})
     browserHistory.push('/profile')
   })
  }
}
