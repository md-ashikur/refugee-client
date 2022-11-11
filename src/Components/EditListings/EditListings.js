import React from 'react';
import Edit from '../Edit/Edit';

const EditListings = ({ posts }) => {
    return (
        <div className='flex justify-center flex-col items-center'>
            {posts.map((p) => <Edit post={p} key={p._id} />).reverse()}
        </div>
    );
};

export default EditListings;