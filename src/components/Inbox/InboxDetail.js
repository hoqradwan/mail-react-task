import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useInboxes from "../../hooks/useInboxes";
import InboxDetailView from "./InboxDetailView";

const InboxDetail = () => {
  const [inboxes] = useInboxes();

  return (
    <div>
   {
    inboxes.map(inbox => <InboxDetailView inbox={inbox}></InboxDetailView>)
   }
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default InboxDetail;
