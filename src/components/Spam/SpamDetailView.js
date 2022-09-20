import React from "react";

const SpamDetailView = ({ spam }) => {
  const { mId, unread, subject, content } = spam;

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

export default SpamDetailView;
