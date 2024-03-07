import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DealershipsContext } from '../context/DealershipsContext';
import DealershipFinder from '../apis/DealershipFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const DealershipDetailPage = () => {
  const { id } = useParams();
  const { selectedDealership, setSelectedDealership } = useContext(DealershipsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DealershipFinder.get(`/${id}`);
        console.log(response);

        setSelectedDealership(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {selectedDealership && selectedDealership.dealership && (
        <>
          <h1 className="text-center display-1">{selectedDealership.dealership.name}</h1>
          <div className="mt-3">
            <Reviews reviews={selectedDealership.reviews} />
          </div>
            <AddReview />
        </>
      )}
    </div>
  );
};

export default DealershipDetailPage;