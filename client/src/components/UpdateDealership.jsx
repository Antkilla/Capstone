import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DealershipsContext } from '../context/DealershipsContext';
import DealershipFinder from '../apis/DealershipFinder';

const UpdateDealership = (props) => {
    const {id} = useParams();
    let Navigate = useNavigate();
    const { dealerships } = useContext(DealershipsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await DealershipFinder.get(`/${id}`);
            console.error(response.data.data);
            setName(response.data.data.dealership.name);
            setLocation(response.data.data.dealership.location);
            setPriceRange(response.data.data.dealership.price_range);
        };
    
        fetchData();
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const UpdatedDealership = await DealershipFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        });
        Navigate("/");
      };

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input value={priceRange} onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control" type="number" />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateDealership;