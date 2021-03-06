import axios from "axios";
import { useState } from "react";
import { IInteraction } from "../utils/Interfaces";

interface AddCommentProps {
  API_BASE: string;
  resourceId: number;
  userId: string | null;
  rating: number;
  interactions: IInteraction[];
  setGetUpdatedInteractions: (getUpdatedInteractions: boolean) => void;
  getUpdatedInteractions: boolean;
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
        })
        .then(() =>
          props.setGetUpdatedInteractions(!props.getUpdatedInteractions)
        )
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="AddComment">
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
          className="SubmitRating"
          type="button"
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
  );
}
