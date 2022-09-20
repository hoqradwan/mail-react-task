import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Spam = ({ spam }) => {
  const { mId, unread, subject, content } = spam;
  const {spamDetail} = useParams()
  const navigate = useNavigate()
  const navigateToSpamDetail = (mId) =>{
    navigate(`${spamDetail}`)
  }

  return (
      <div style={{cursor: "pointer"}} className="px-5 pt-5" onClick={()=>navigateToSpamDetail(mId)} >
      <div class="w-72">
        <div>
          <h2 class="font-bold text-2xl">{subject}</h2>
       { unread ? <p className="font-bold">{content.slice(0,30)}</p> : <p>{content.slice(0,30)}</p> }
        </div>
      </div>
    </div>
  
  );
};

export default Spam;
