import React from 'react';
import Edit from '../Edit/Edit';

const EditListings = ({ posts }) => {
    return (
        <div >
            {posts.map((p) => <Edit post={p} key={p._id} />).reverse()}
        </div>
    );
};

export default EditListings;