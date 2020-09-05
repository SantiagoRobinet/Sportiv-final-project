import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

 const People = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [people, setPeople] = useState();
    const { getTokenSilently } = useAuth0();

    const fetchData =async () => {
        const baseUrl = 'http://localhost:2804';
        const token = await getTokenSilently();
        const res = await fetch(`${baseUrl}/people`, {
            headers:{ Authorization : `Bearer ${token}`},
        });
        
            res.json().then((json) => {
                setPeople(json.people);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }


    useEffect( () => {fetchData(); }, []);

    return(
        <h1>ESTAMOS BIEN...LA CASA ESTA EN ORDEN</h1>
    );

}

export default People;