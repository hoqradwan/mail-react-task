import React from "react";

const InboxDetailView = ({ inbox }) => {
  const { mId, unread, subject, content } = inbox;

  return (
    <div className="px-5 pt-5">
      <div class="w-full">
        <div>
          <h2 class="font-bold">{subject}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default InboxDetailView;
