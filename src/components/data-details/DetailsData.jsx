import React from 'react';
import Button from 'react-bootstrap/Button';

const DetailsData = ({ data, isSelf, handleShow }) => {
    // console.log(isSelf);
    return (
        <div className='row'>
            <div className='col col-md-4'>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={data?.image?.original} alt="" style={{ height: '400px', width: `${isSelf ? "18rem" : "10rem"}` }} />
                    </div>
                    <div className='text-center mt-3'>
                        <Button variant="primary" onClick={handleShow}>
                            Book Movie Ticket
                        </Button>
                    </div>
                </div>
            </div>
            <div className='col col-md-8'>
                <div className='m-3'>
                    {data?.summary}
                </div>
                <div>
                    <div style={{ width: `${isSelf ? "18rem" : "10rem"}` }} className='border p-3 rounded bg-light my-4 mx-auto'>
                        <h4>Show Info</h4>
                        <p className='lh-1 fw-semibold'>Network: <span className='text-secondary fw-normal'>{data?.network?.name}</span></p>
                        <p className='lh-1 fw-semibold'>Schedule: <span className='text-secondary fw-normal'>

                            {
                                data?.schedule?.days.map(d => {
                                    return <span>{d} {(data?.schedule?.days.indexOf(d)) == (data?.schedule?.days.length - 1) ? "" : ","}</span>
                                })
                            }
                            {` at ${data?.schedule?.time} (${data?.runtime})`}
                        </span></p>
                        <p className='lh-1 fw-semibold'>Status: <span className='text-secondary fw-normal'>{data?.status}</span></p>
                        <p className='lh-1 fw-semibold'>Show Type: <span className='text-secondary fw-normal'>{data?.type}</span></p>
                        <p className='lh-1 fw-semibold'>Genres: <span className='text-secondary fw-normal'>
                            {data?.genres.map(gnrs => {
                                return <span>
                                    {gnrs} {(data?.genres?.indexOf(gnrs)) == (data?.genres.length - 1) ? "" : "|"}
                                </span>
                            })}
                        </span></p>
                        <p className='lh-1 fw-semibold'>Official site: <span className='text-secondary fw-normal'>{data?.officialSite
                        }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsData;