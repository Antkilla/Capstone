import React, { useContext, useEffect }from 'react'
import DealershipFinder from '../apis/DealershipFinder';
import { DealershipsContext } from '../context/DealershipsContext';

const DealershipList = (props) => {
    const {Dealerships, setDealerships } = useContext(DealershipsContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DealershipFinder.get("/");
                setDealerships(response.data.data.Dealerships)
                console.log(response);
            }   catch (err) {}
        };
    
        fetchData();
    }, []);

  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Dealership</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Auto Sports</td>
                    <td>Palmdale</td>
                    <td>$$$$</td>
                    <td>*****</td>
                    <td>
                        <button className="btn btn-warning">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>

                <tr>
                    <td>Delux Dealer</td>
                    <td>Malibu</td>
                    <td>$$$$$</td>
                    <td>******</td>
                    <td>
                        <button className="btn btn-warning">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

export default DealershipList