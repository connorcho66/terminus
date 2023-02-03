import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_USER} from '../utils/queries';
import Auth from '../utils/Auth';

export default function Success() {
  
  const currentUN = Auth.getProfile().data.username

  const {loading, data} = useQuery(QUERY_SINGLE_USER, {
    variables: {username: currentUN}
  })


  loading ? console.log('loading') : console.log(data);



    return (
      <div>
          <h1>Success!</h1>
          <h2>Thank you for your purchase!</h2>
          <h2>You will now be redirected to the your profile page</h2>
      </div>
    );
  }
  