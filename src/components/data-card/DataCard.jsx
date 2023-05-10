import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const DataCard = ({ data }) => {
    const { show, score } = data;
    console.log(show);

    return (

        <div className='col col-md-3 g-3'>
            <Card style={{ width: '18rem', height: '400px' }} className='mx-auto'>
                <Card.Img variant="top" src={show?.image?.original} style={{ height: '200px' }} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title>{show?.name}</Card.Title>
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                        {show?.summary.length > 50 ? show?.summary?.slice(0, 49) : show?.summary}
                        {/* {show?.summary} */}
                    </Card.Text>

                    <Card.Footer>
                        <Link to={`/details/${show?.id}`}>
                            <Button variant="primary" style={{ width: '100%' }}>Details</Button>
                        </Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>

    );
};

export default DataCard;