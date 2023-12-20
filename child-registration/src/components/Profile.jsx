import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { Card, CardHeader, CardFooter, Typography, Button } from '@material-tailwind/react';

const Profile = () => {

    const { id } = useParams()
    const [child, setChild] = useState([]);

    useEffect(() => {
        // Make an HTTP request to fetch data from your API
        axios.get(`http://localhost:5000/child/${id}`)
            .then((response) => {
                setChild(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log('Error fetching loan data:', error);
            });
    }, []);

    return (
        <div className="mt-12 mx-12 px-12 mb-8 flex flex-col gap-12">
            <Card className='pb-8 px-8'>
                <CardHeader variant="gradient" color="light-green" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        {child.firstname + "'s" + " " + "Profile"}
                    </Typography>
                </CardHeader>
                <li className="border-b border-gray-300 py-2 flex justify-center">
                    <p><strong>Name: </strong>{`${child.firstname} ${child.lastname}`}</p>
                </li>
                <li className="border-b border-gray-300 py-2 flex justify-center">
                    <p><strong>Age: </strong>{`${child.age}`}</p>
                </li>
                <li className="border-b border-gray-300 py-2 flex justify-center">
                    <p><strong>Gender: </strong>{`${child.gender}`}</p>
                </li>
                <li className="border-b border-gray-300 py-2 flex justify-center">
                    <p><strong>Immunizations: </strong>{`${child.immunizations}`}</p>
                </li>
            </Card>

        </div>
    );
};

export default Profile;