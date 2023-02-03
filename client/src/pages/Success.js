import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';

export default function Success() {
    
    const {loading, data} = useQuery(QUERY_ME)

    const user = data?.me || 'No user'

    console.log(user)

    return (
      <div>
          <h1>Success!</h1>
          <h2>Thank you for your purchase!</h2>
          <h2>You will now be redirected to the your profile page</h2>
      </div>
    );
  }
  