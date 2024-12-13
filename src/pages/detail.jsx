import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailCard = React.lazy(() => import('../components/shared/DetailCard'));

function Detail() {
  const { id } = useParams();
  const { documents } = useSelector((state) => state.getDynamic);
  const data = documents.filter((item) => item.$id === id);
  
  return (
    <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
      <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
      <div className="relative z-10 w-full">
        <div className="container flex flex-col items-center mb-5">
          <React.Suspense fallback={<div>Loading...</div>}>
            <DetailCard dataDetail={data} />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default Detail;
