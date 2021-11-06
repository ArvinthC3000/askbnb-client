import { Button } from 'semantic-ui-react';
import { FaStar } from 'react-icons/fa';

const HotelListItem = ({ style }) => {
  return (
    <>
      <hr />
      <div className={style.hotelListItem}>
        <img
          src='https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
          alt=''
        />
        <div className={style.descriptionContainer}>
          <div className={style.descriptionHeader}>1 BHK Service Apartment</div>
          <div className={style.descriptionSubHeader}>
            Fully furnished apartment in HRS Layout
          </div>
          <div className={style.amnities}>All - Amnities - Goes - Here</div>
          <div className={style.amnities}>All - Amnities - Goes - Here</div>
          <Button className={style.viewButton} color='teal'>
            View Rooms
          </Button>
          <div className={style.reviewContainer}>
            <FaStar color='yellow' /> 4.5 (<span>11 reviews</span>)
          </div>
          <div className={style.priceContainer}>
            <div className={style.perDayPrice}>
              Rs. 1000 <span>/ night</span>
            </div>
            <div className={style.totalPrice}>Rs. 4000 total</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListItem;
