import { useState } from "react";
import "../styles/StarRating.css";
import { API_BASE } from "../utils/APIFragments";
import { hasUserCommented } from "../utils/hasUserCommented";
import { IInteraction } from "../utils/Interfaces";
import AddComment from "./AddComment";

interface StarRatingProps {
  resourceId: number;
  userId: string | null;
  commentAdded: boolean;
  setCommentAdded: (commentAdded: boolean) => void;
  interactions: IInteraction[]
}

export default function StarRating({
  resourceId,
  userId,
  commentAdded,
  setCommentAdded,
  interactions
}: StarRatingProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <>
    {hasUserCommented(resourceId, userId, interactions) ? (
      <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (interactions[0].rating) ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
        <p>You rated this resource!</p>
      {rating ? (
        <AddComment
          userId={userId}
          resourceId={resourceId}
          API_BASE={API_BASE}
          rating={rating}
          setCommentAdded={setCommentAdded}
          commentAdded={commentAdded}
          interactions={interactions}
        />
      ) : (
        <p>Rate the resource to add a comment</p>
      )}
    </div>
   ) :
    (<div className="star-rating">
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
          setCommentAdded={setCommentAdded}
          commentAdded={commentAdded}
          interactions={interactions}
        />
      ) : (
        <p>Rate the resource to add a comment</p>
      )}
    </div>)
}
 </>  );

}
