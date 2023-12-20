import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Typography, Button } from '@material-tailwind/react';

const ListView = () => {
    const [children, setChildren] = useState([]);
    // Get list of children
    useEffect(() => {
        axios.get('http://localhost:5000/children')
            .then((response) => {
                setChildren(response.data);
            })
            .catch((error) => {
                console.log('Error fetching children data:', error);
            });
    }, []);

    // Sort list items
    const handleSort = (criteria) => {
        let sortedChildren = [...children];

        if (criteria === 'age') {
            sortedChildren.sort((a, b) => a.age - b.age); // Sort by age
        } else if (criteria === 'name') {
            sortedChildren.sort((a, b) => {
                const nameA = a.firstname.toLowerCase();
                const nameB = b.firstname.toLowerCase();
                if (nameA < nameB) return -1; // Sort names alphabetically
                if (nameA > nameB) return 1;
                return 0;
            });
        }

        setChildren([...sortedChildren]); // Update state with sorted data
    };

    return (
        <div className="mt-12 mx-12 px-12 mb-8 flex flex-col gap-12">
            <Card className='pb-8 px-8'>
                <CardHeader variant="gradient" color="light-green" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Children's List
                    </Typography>
                </CardHeader>
                <div className='flex justify-end'>
                    <button onClick={() => handleSort('age')} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-4">Sort by Age</button>
                    <button onClick={() => handleSort('name')} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md">Sort by Name</button>
                </div>

                <ul className="mt-4">
                    {children.map((child) => (
                        <li key={child.id} className="border-b border-gray-300 py-2 flex justify-between">
                            <p>{child.firstname} {child.lastname}</p>
                            <Button color='green' ripple={true} variant='gradient'>
                                <Link to={`/profile/${child.id}`} className="text-white">Profile</Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default ListView;
