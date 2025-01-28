import React from "react";

const SocialMedia = ({ platform, url }) => {
  return (
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer">{platform}</a>
    </p>
  );
};

export default SocialMedia;
