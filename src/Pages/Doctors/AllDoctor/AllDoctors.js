import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (

        <div className="container mb-5">
            <div className="row">
                {
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}

                        ></Doctor>)
                }
            </div>
        </div >


    );
};

export default AllDoctors;