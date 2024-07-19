import  { useNavigate } from 'react-router-dom'
import './NoPage.css'
import { useEffect } from 'react';



const NoPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000)
    },[]
    );
    return(
        <h1 className='nopage-element'> The requested url was not found</h1>

    );
};

export default NoPage