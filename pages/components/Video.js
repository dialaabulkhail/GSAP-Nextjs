import React from "react";
import { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    const clip = document.querySelectorAll(".clip");
    for (let i = 0; i < clip.length; i++) {
      clip[i].addEventListener("mouseenter", function (e) {
        clip[i].play();
      });
      clip[i].addEventListener("mouseout", function (e) {
        clip[i].pause();
      });
    }
  });

  
  return (
    <div className="h-screen w-full">
      <video
        src="https://tecdn.b-cdn.net/img/video/forest.mp4"
        type="video/mp4"
        loop
        class="clip w-full"
      ></video>
    </div>
  );
};

export default Video;
