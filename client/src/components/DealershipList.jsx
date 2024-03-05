import React, { useContext, useEffect }from 'react'
import { Table, Button } from 'react-bootstrap';
import DealershipFinder from '../apis/DealershipFinder';
import { DealershipsContext } from '../context/DealershipsContext';
import { useNavigate } from 'react-router-dom';

const DealershipList = (props) => {
    const { dealerships, setDealerships } = useContext(DealershipsContext);
    let Navigate = useNavigate()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await DealershipFinder.get("/");
          console.log("Response from API:", response.data.data.dealerships);
          setDealerships(response.data.data.dealerships);
        } catch (err) {
          console.error("Error fetching data:", err);

        }
      };
  
      fetchData();
    }, []); // <-- Dependency array is empty since we only want to run this once

    const handleDelete = async (id) => {
        try {
            const response = await DealershipFinder.delete(`/${id}`);
            setDealerships(
                dealerships.filter((dealership) => {
                return dealership.id !== id
            }));
            console.log(response);
        }   catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (id) => {
        Navigate(`dealership/${id}/update`);
    }
  
  return (
        <div className="list-group">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="bg-primary">
                        <th>Dealership</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dealerships && dealerships.map(dealership => {
                        return (
                            <tr key={dealership.id}>
                                <td>{dealership.name}</td>
                                <td>{dealership.location}</td>
                                <td>{"$".repeat(dealership.price_range)}</td>
                                <td>reviews</td>
                                <td>
                                    <Button onClick={() => handleUpdate(dealership.id)} className="btn btn-warning">Update</Button>
                                </td>
                                <td>
                                    <Button onClick={() => handleDelete(dealership.id)} className="btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default DealershipList;
