import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DealershipsContext } from '../context/DealershipsContext';
import DealershipFinder from '../apis/DealershipFinder';

const DealershipDetailPage = () => {
  const { id } = useParams();
  const { selectedDealership, setSelectedDealership } = useContext(DealershipsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DealershipFinder.get(`/${id}`);

        setSelectedDealership(response.data.data.dealership);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {selectedDealership && selectedDealership.name}
    </div>
  );
};

export default DealershipDetailPage;