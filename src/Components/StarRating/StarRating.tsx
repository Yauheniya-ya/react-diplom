import StarRatings from "react-star-ratings";

interface IStarRaiting {
  rating: any | null | number;
}

const StarRating = ({ rating }: IStarRaiting) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor=" #313037"
      starEmptyColor="#131111"
      numberOfStars={5}
      name="rating"
      starDimension="16px"
      starSpacing="5px"
    />
  );
};

export default StarRating;
