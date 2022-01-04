import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setSerices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setSerices(data))

    }, [])
    return (
        <div className="container mb-5">
            <h2 className="my-3 text-warning">Our Services</h2>
            <div className="row">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }

            </div>
        </div>
    );
};

export default Services;