import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const HomeService = () => {
    const [services, setSerices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setSerices(data))

    }, [])
    const homeservice = services.slice(0, 6)
    return (
        <div className="container mb-5">

            <div className="row">
                {
                    homeservice.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
}

export default HomeService;