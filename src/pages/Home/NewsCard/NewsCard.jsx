import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } =news
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex gap-2 py-3 align-items-center'>
                    <Image src={author?.img} className='rounded-circle' style={{ height: '40px' }}></Image>
                    <div className='flex-grow-1'>
                        <p className='my-0 fw-bold'>{author.name}</p>
                        <p className='my-0'><small>{moment( author?.published_date ).format('YYYY-D-MM')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} className='my-3'></Card.Img>
                    <Card.Text>
                        {details.length < 250 ? <>{details}</>
                            : <>{details.slice(0,250)}....<Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-bold'>Read More</Link></> }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            readonly
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <FaEye></FaEye>{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;