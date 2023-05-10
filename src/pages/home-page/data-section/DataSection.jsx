import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { Spinner } from 'react-bootstrap';
import DataCard from '../../../components/data-card/DataCard';

const DataSection = () => {
    const { data, loading } = useFetch("https://api.tvmaze.com/search/shows?q=all");
    // console.log(data);

    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }
    return (
        <section>
            <div className='row'>
                {
                    data?.length &&
                    data.map(d => {
                        return <DataCard
                            key={d?.show?.id}
                            data={d}
                        ></DataCard>
                    })
                }
            </div>
        </section>
    );
};

export default DataSection;