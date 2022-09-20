import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Inbox = ({ inbox }) => {
  let { mId, unread, subject, content } = inbox;
  const {inboxDetail} = useParams()
  const makeUnreadfalse = () =>{
    unread = false
  }

  return (
    <Link to={`${inboxDetail}`} onClick={()=>makeUnreadfalse()}>
      <div style={{cursor: "pointer"}} className="px-5 pt-5" >
      <div class="w-72">
        <div>
          <h2 class="font-bold text-2xl">{subject}</h2>
       { unread ? <p className="font-bold">{content.slice(0,30)}</p> : <p>{content.slice(0,30)}</p> }
        </div>
      </div>
    </div>
    </Link>
  
  );
};

export default Inbox;
