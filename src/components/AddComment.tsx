import axios from "axios";
import { useState } from "react";

interface AddCommentProps {
  API_BASE: string;
  resourceId: string;
  userId: string;
  rating: number;
}

export default function AddComment(props: AddCommentProps): JSX.Element {
  const { API_BASE, resourceId, userId, rating } = props;
  const [textToAdd, setTextToAdd] = useState("");
  //   const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async () => {
    if (textToAdd !== "") {
      await axios
        .post(`${API_BASE}/interactions`, {
          userid: userId,
          resourceid: resourceId,
          rating: rating,
          comment: textToAdd,
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(`user Id is ${userId}`);
    }
  };

  return (
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
      {/* <div className="error">
        {errorMessage && <p>You need to give a reason to submit your rating.</p>}
      </div> */}
    </div>
  );
}
