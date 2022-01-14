import axios from "axios";
import { useState } from "react";

interface AddCommentProps {
  API_BASE: string;
  resourceId: number;
  userId: string | null;
  rating: number;
  setCommentAdded: (commentAdded: boolean) => void;
  commentAdded: boolean;
}

export default function AddComment(props: AddCommentProps): JSX.Element {
  const { API_BASE, resourceId, userId, rating } = props;
  const [textToAdd, setTextToAdd] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (textToAdd !== "") {
      await axios
        .post(`${API_BASE}/interactions`, {
          userid: userId,
          resourceid: resourceId,
          rating: rating,
          comment: textToAdd,
        }).then(()=>props.setCommentAdded(true))
        .catch(function (error) {
          console.log(error);
        });
      
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <>
      {props.commentAdded ? (
        <p>You rated this resource!</p>
      ) : (
        <div className="CreateComment">
          <div className="input-group mb-3">
            <textarea
              value={textToAdd}
              rows={5}
              className="form-control"
              placeholder="Why have you given this rating?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => {
                const newItem = e.target.value;
                setTextToAdd(newItem);
              }}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => handleSubmit()}
            >
              Submit rating
            </button>
          </div>
          <div className="error">
            {errorMessage && (
              <p>You need to give a reason to submit your rating.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
