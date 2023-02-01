import React, { createContext, useContext } from 'react';

const TerminusContext = createContext()

const {Provider} = TerminusContext

const TerminusProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useTerminusReducer({
        
    })
}

export const useTerminusContext = () => useContext(TerminusContext)

export const 