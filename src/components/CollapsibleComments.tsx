import axios from "axios";
import { useState } from "react";
import "../styles/CollapsibleComments.css";
import { API_BASE } from "../utils/APIFragments";
import getusername from "../utils/getusername";
import { IInteraction, IUser } from "../utils/Interfaces";

interface CollapsibleCommentsProps {
  userId: string | null;
  userList: IUser[];
  resourceId: number;
  resourceInteractions: IInteraction[];
  setGetUpdatedInteractions: (getUpdatedInteractions: boolean) => void;
  getUpdatedInteractions: boolean;
}

export default function CollapsibleComments({
  userId,
  userList,
  resourceId,
  resourceInteractions,
  setGetUpdatedInteractions,
  getUpdatedInteractions,
}: CollapsibleCommentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteComment = async () => {
    if (userId !== null) {
      await axios({
        method: "delete",
        url: `${API_BASE}/interactions`,
        data: { userid: userId, resourceid: resourceId },
      })
        .then((response) => {
          setGetUpdatedInteractions(!getUpdatedInteractions);
        })
        .catch((error) => console.log(error));
    }
  };

  const ratingAndComments = resourceInteractions?.map((interaction, index) => (
    <div key={index} className="SingleComment">
      <div className="starsForComments">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= interaction.rating ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <p className="user">{getusername(userList, interaction.userid)}:</p>
      <p className="comment">{interaction.comment}</p>
      {userId !== null && interaction.userid === parseInt(userId) ? (
        <button className="delete" onClick={handleDeleteComment}>
          <span className="x">&#10005;</span>
        </button>
      ) : (
        <span className="delete-space"></span>
      )}
    </div>
  ));

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="CollapsibleComments">
      <button type="button" className="collapsible" onClick={handleOpenClose}>
        View Ratings and Comments
      </button>
      {isOpen && (
        <div className="content">
          {ratingAndComments ? ratingAndComments : <p>No comments</p>}
        </div>
      )}
    </div>
  );
}
