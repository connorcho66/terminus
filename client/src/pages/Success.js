import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';

export default function Success() {
    
    const {loading, data} = useQuery(QUERY_SINGLE_USER)

    const user = data?.user || 'No user found'
    console.log(user);

    return (
      <div>
          <h1>Success!</h1>
          <h2>Thank you for your purchase!</h2>
          <h2>You will now be redirected to the your profile page</h2>
      </div>
    );
  }
  