import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4545/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    console.log(categories.map(c=><li>{c.name}</li>));
    return (
        <div>
            <h4>All Categories</h4>
            <div className='ps-4 mt-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link className='text-decoration-none text-secondary fs-5 fw-bold'
                            to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;