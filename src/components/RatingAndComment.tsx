import { useState } from "react";
import "../styles/StarRating.css";
import { API_BASE } from "../utils/APIFragments";
import AddComment from "./AddComment";

interface StarRatingProps {
  resourceId: number;
  userId: string | null;
  commentAdded: boolean;
  setCommentAdded: (commentAdded: boolean) => void;
}

export default function StarRating({
  resourceId,
  userId,
  commentAdded,
  setCommentAdded,
}: StarRatingProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
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
      {commentAdded === false ? (
        <button
          onClick={() => {
            setRating(0);
            setHover(0);
          }}
        >
          clear
        </button>
      ) : (
        <></>
      )}
      {rating ? (
        <AddComment
          userId={userId}
          resourceId={resourceId}
          API_BASE={API_BASE}
          rating={rating}
          setCommentAdded={setCommentAdded}
          commentAdded={commentAdded}
        />
      ) : (
        <p>Rate the resource to add a comment</p>
      )}
    </div>
  );
}
