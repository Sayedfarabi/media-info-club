import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const DataDetails = () => {

    const data = useLoaderData();
    // console.log(data);
    const nextEpisodeApi = data?._links?.nextepisode?.href;
    const previousEpisodeApi = data?._links?.previousepisode?.href;

    const { data: nextData, loading: nextLoading } = useFetch(nextEpisodeApi)
    const { data: previousData, loading: previousLoading } = useFetch(previousEpisodeApi);
    console.log(previousData);
    return (
        <section>
            <div className='row'>
                <div className='col col-md-4'>
                    <div>
                        <img src={data?.image?.original} alt="" style={{ height: '400px', width: '380px' }} className='mx-auto' />
                    </div>
                </div>
                <div className='col col-md-8'>
                    <div>
                        {data?.summary}
                    </div>
                    <div>
                        <div style={{ width: '400px' }} className='border p-4 rounded bg-light my-4 mx-auto'>
                            <h4>Show Info</h4>
                            <p className='lh-1'>Network:</p>
                            <p className='lh-1'>Schedule:</p>
                            <p className='lh-1'>Status:</p>
                            <p className='lh-1'>Show Type:</p>
                            <p className='lh-1'>Genres:</p>
                            <p className='lh-1'>Episodes ordered:</p>
                            <p className='lh-1'>Created by:</p>
                            <p className='lh-1'>Official site:</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataDetails;