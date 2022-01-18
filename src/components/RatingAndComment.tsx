import { useEffect, useState } from "react";
import "../styles/StarRating.css";
import { API_BASE } from "../utils/APIFragments";
import { hasUserCommented } from "../utils/hasUserCommented";
import { IInteraction } from "../utils/Interfaces";
import { getRating } from "../utils/getRating";
import AddComment from "./AddComment";

interface RatingAndCommentProps {
  resourceId: number;
  userId: string | null;
  interactions: IInteraction[];
  setGetUpdatedInteractions: (getUpdatedInteractions: boolean) => void;
  getUpdatedInteractions: boolean;
}

export default function RatingAndComment({
  resourceId,
  userId,
  interactions,
  setGetUpdatedInteractions,
  getUpdatedInteractions,
}: RatingAndCommentProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  useEffect(() => {
    setRating(0);
    setHover(0);
  }, [getUpdatedInteractions]);

  return (
    <div className="RatingAndComment">
      {hasUserCommented(resourceId, userId, interactions) ? (
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={
                  index <= getRating(resourceId, userId, interactions)
                    ? "on"
                    : "off"
                }
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
          <p>You rated this resource!</p>
        </div>
      ) : (
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
          {rating ? (
            <AddComment
              userId={userId}
              resourceId={resourceId}
              API_BASE={API_BASE}
              rating={rating}
              interactions={interactions}
              setGetUpdatedInteractions={setGetUpdatedInteractions}
              getUpdatedInteractions={getUpdatedInteractions}
            />
          ) : (
            <p>Rate the resource to add a comment</p>
          )}
        </div>
      )}
    </div>
  );
}
