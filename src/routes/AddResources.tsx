// import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddResources = (): JSX.Element => {
  // const { urluserid } = useParams();
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  return (
    <div>
      <h1>Add Resource</h1>

      <form>
        <div>
          <input type="text" placeholder="Add a resource name" />
        </div>
        <div>
          <input type="text" placeholder="Add an author name" />
        </div>
        <div>
          <input type="text" placeholder="Add URL" />
        </div>
        <div>
          <input type="text" placeholder="Add decription" />
        </div>
        <div>
          <select>
            <option disabled>Content Type</option>
            <option value="1">React</option>
            <option value="2">HTML</option>
            <option value="3">CSS</option>
            <option value="4">SQL</option>
            <option value="5">JavaScript</option>
          </select>
          <select>
            <option disabled>Recommeneded Stage</option>
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
            <option value="3">Week 3</option>
            <option value="4">Week 4</option>
            <option value="5">Week 5</option>
          </select>
        </div>
        <p>Do you recommend this resource?</p>
        <select>
          <option disabled>Recommened Type</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
          <option value="3">Maybe</option>
        </select>
        <div>
          <input type="text" placeholder="Explain why" />
        </div>
      </form>
      <button>Add Resource </button>
    </div>
  );
};

export default AddResources;
