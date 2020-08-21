import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    return localStorage.getItem('taskManagerToken')
  }
  
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated()) {
          return <Component {...props} />
        } else {
          return <Redirect to={
            {
              pathname: "/dashboard",
              state: {
                from: props.location
              }
            }
          } />
        }
      }}
    />
  )
}

export default PublicRoute