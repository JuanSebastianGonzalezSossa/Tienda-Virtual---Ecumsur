import { useState, useEffect } from 'react'
import { getProduct } from '../Helpers/GetProduct'

export const useFetchProducts = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getProduct()
            .then(prod => {
                setState({
                    data: prod,
                    loading: false
                });
            })
    }, [])

    return state;
}
