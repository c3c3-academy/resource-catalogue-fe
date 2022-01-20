import { useState } from "react";
import "../styles/CollapsibleComments.css";
import getusername from "../utils/getusername";
import { IInteraction, IUser } from "../utils/Interfaces";

interface CollapsibleCommentsProps {
  userList: IUser[];
  resourceInteractions: IInteraction[];
}

export default function CollapsibleCommentsLoggedOut({
  userList,
  resourceInteractions,
}: CollapsibleCommentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
              <span className="star">&#127851;</span>
            </button>
          );
        })}
      </div>
      <p className="user">{getusername(userList, interaction.userid)}:</p>
      <p className="comment">{interaction.comment}</p>
      <span className="delete-space"></span>
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
