import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import DetailsData from '../../components/data-details/DetailsData';
import SubDetails from '../../components/sub-details/SubDetails';
import ModalSection from '../../components/modal-section/ModalSection';

const DataDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const data = useLoaderData();
    // console.log(data);
    const nextEpisodeApi = data?._links?.nextepisode?.href;
    const previousEpisodeApi = data?._links?.previousepisode?.href;
    const { data: nextData, loading: nextLoading } = useFetch(nextEpisodeApi)
    const { data: previousData, loading: previousLoading } = useFetch(previousEpisodeApi);
    console.log(nextData);

    return (
        <section>

            <div>
                {
                    data &&
                    <DetailsData data={data} isSelf={true} handleShow={handleShow}></DetailsData>
                }
            </div>
            <div className='my-4 row'>
                <div className='col'>
                    {
                        previousData &&
                        <SubDetails
                            data={previousData}
                            name={"Previous Episodes"}
                            loading={previousLoading}></SubDetails>
                    }
                </div>
                <div className='col'>
                    {
                        nextData &&
                        <SubDetails
                            data={nextData}
                            name={"Next Episodes"}
                            loading={nextLoading}></SubDetails>
                    }
                </div>
            </div>

            <div>
                {
                    <ModalSection show={show} handleClose={handleClose}></ModalSection>
                }
            </div>
        </section>
    );
};

export default DataDetails;