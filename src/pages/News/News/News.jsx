import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInsights from '../EditorInsignts/EditorInsights';
const News = () => {
    const newsDetails = useLoaderData();
    const { _id, title, details, image_url, category_id} = newsDetails
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">
                            <FaArrowLeft></FaArrowLeft>
                            All News in this category
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='my-5'>
                <EditorInsights></EditorInsights>
            </div>
        </div>
    );
};

export default News;