import React from 'react'
import { Link } from 'react-router-dom';
function Authorcard(props) {
    const author = props.author;
    return (
        <div>
            <div>
                <Link to={`/authors/${author._id}`} className="block overflow-hidden rounded-t-lg">
                    <img src={author.image} className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
                    <div className='p-2 rounded-b-lg' style={{ backgroundColor: '#2e69ac' }}>
                    <h3 className="text-md text-center text-gray-800" style={{ color: '#fffff9' }}>{author.name}</h3>
                    <h5 className="text-sm text-center text-gray-800" style={{ color: 'black' }}>{author.designation}</h5>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Authorcard

