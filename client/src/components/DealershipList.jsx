import React, { useContext, useEffect }from 'react'
import { Table, Button } from 'react-bootstrap';
import DealershipFinder from '../apis/DealershipFinder';
import { DealershipsContext } from '../context/DealershipsContext';

const DealershipList = (props) => {
    const { dealerships, setDealerships } = useContext(DealershipsContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await DealershipFinder.get("/");
          console.log(response);
          setDealerships(response.data.data.dealerships);
        } catch (err) {
          console.error(err)
        }
      };
  
      fetchData();
    }, []); // <-- Dependency array is empty since we only want to run this once
  
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
                                    <Button variant="warning">Update</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })};
















                    {/*<tr>
                        <td>Auto Sports</td>
                        <td>Palmdale</td>
                        <td>$$$$</td>
                        <td>*****</td>
                        <td>
                            <Button variant="warning">Update</Button>
                        </td>

                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>Delux Dealer</td>
                        <td>Malibu</td>
                        <td>$$$$$</td>
                        <td>******</td>
                        <td>
                            <Button variant="warning">Update</Button>
                        </td>
                    
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    );
};

export default DealershipList;