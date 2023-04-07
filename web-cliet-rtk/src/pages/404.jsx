import ErrorMessage from "../components/errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';
// import {pulse} from 'react-animations';
// import styled, { keyframes } from 'styled-components';

// const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;



const Page404 = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginBottom : '30px'}}>Oops!</h1>
            <ErrorMessage />

            <h2 style={{textAlign: 'center', margin: '30px 0 30px 0'}}>Page not found</h2>
            {/*<Pulse><Link to={'/'} style={{textAlign: 'center', display: 'block'}}>Back to main page!</Link></Pulse>*/}
            <Link to={'/'} style={{textAlign: 'center', display: 'block'}}>Back to main page!</Link>
        </div>
    )
}

export default Page404;