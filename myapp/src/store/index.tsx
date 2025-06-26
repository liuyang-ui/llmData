import React ,{ createContext } from 'react';

const CounterContext = React.createContext<object>(
    {
        'age': 1,
    }
)

export default CounterContext;