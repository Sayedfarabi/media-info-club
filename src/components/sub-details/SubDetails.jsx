import React from 'react';
import { Spinner } from 'react-bootstrap';

const SubDetails = ({ data, name, loading }) => {
    console.log(data);
    const date = new Date(data.airstamp)
    const dateString = date.toString()
    const dateDataArray = dateString.split(" ");

    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (
        <div className='mx-3 p-3 bg-light' style={{ height: "100%" }}>
            <div className='my-4'>
                <h2>{name}</h2>
            </div>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{ width: "10rem", height: "200px" }} src={data?.image} alt="poster" />
                </div>
            </div>
            <div>
                <h3 className='text-center text-primary'>
                    <a style={{ textDecoration: "none" }} href={data?.url} target="_blank" rel="noopener noreferrer">
                        {data?.name}
                    </a>
                </h3>
                <h5 className='text-center text-secondary'>
                    {`Episode ${data?.season} x ${data?.number}; ${dateDataArray[1]} ${dateDataArray[2]}, ${dateDataArray[3]}`}
                </h5>
                <p>{data?.summary}</p>
            </div>
        </div>
    );
};

export default SubDetails;