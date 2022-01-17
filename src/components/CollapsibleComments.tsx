import { useState } from "react";
import "../styles/CollapsibleComments.css";
import getusername from "../utils/getusername";
import { IInteraction, IUser } from "../utils/Interfaces";

interface CollapsibleCommentsProps {
  userId: string | null;
  userList: IUser[];
  resourceId: number;
  resourceInteractions: IInteraction[];
}

export default function CollapsibleComments({
  userId,
  userList,
  resourceId,
  resourceInteractions,
}: CollapsibleCommentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ratingAndComments = resourceInteractions.map((interaction) => (
    <div key={interaction.id} className="SingleComment">
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
          {ratingAndComments.length !== 0 ? (
            ratingAndComments
          ) : (
            <p>No comments</p>
          )}
        </div>
      )}
    </div>
  );
}
