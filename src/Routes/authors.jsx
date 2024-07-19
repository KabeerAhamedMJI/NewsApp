import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Authorcard from '../Components/authorcard';

function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchAuthors() {
            try {
                const response = await axios.get('http://localhost:3000/authors');
                if (response.data) {
                    setAuthors(response.data);
                }
            } catch (error) {
                console.error('Error fetching authors:', error);
                // Optionally, you might want to set an error state or display an error message
            }
        }

        fetchAuthors();
    }, []);

    return (
        <section>
            <section className='px-4 py-8'>
                <div className='container mx-auto'>
                    <div className='px-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-16'>
                        {authors.map(author => (
                            <Authorcard key={author.id} author={author} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Authors;
