import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'


export const Error = () => {
    
    const history = useHistory();


    useEffect(() => {
        history.push('/home');
    },[])

    return (
        <div >
            <Link to='/home'>
                    <button type='button'>RETURN TO HOME</button>
            </Link>
        </div>
    );
}