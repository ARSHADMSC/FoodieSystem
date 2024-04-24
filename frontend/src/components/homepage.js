import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    const buttonStyle = {
        padding: '20px',
        fontSize: '20px',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif'

    };

    return (
        <>
            {/* <h1>Home Page</h1> */}
            <div className="home_rvs">
                <center>
                    <h1 className='home_head'>Welcome to yummy tummy</h1>
                </center>
                <div style={{ padding: '210px', textAlign: 'center' }}>
                    <button style={buttonStyle} onClick={() => navigate("/login")}>Order Now!</button>
                </div>
            </div>
        </>
    )
}