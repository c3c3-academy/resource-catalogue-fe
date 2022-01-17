import { useState } from "react";
import "../styles/CollapsibleComments.css";

interface CollapsibleCommentsProps {
  userId: string | null;
  resourceId: number;
}

export default function CollapsibleComments({
  userId,
  resourceId,
}: CollapsibleCommentsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="CollapsibleComments">
      <button type="button" className="collapsible" onClick={handleOpenClose}>
        Open Collapsible
      </button>
      {isOpen && (
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
      )}
    </div>
  );
}
