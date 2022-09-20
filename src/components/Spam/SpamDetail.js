import React from "react";
import useSpams from "../../hooks/useSpams";
import SpamDetailView from "./SpamDetailView";

const SpamDetail = () => {
  const [spams] = useSpams();
  console.log(spams)
  console.log("from spam detail")

  return (
    <div>
      {spams.map((spam) => (
        <SpamDetailView spam={spam} key={spam.mId}></SpamDetailView>
      ))}
    </div>
  );
};

export default SpamDetail;
