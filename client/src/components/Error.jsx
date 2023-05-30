import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Loading } from './Loading/Loading'


export const Error = () => {
    
    const history = useHistory();


    useEffect(() => {
        history.push('/home');
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Loading />
        </div>
    );
}