import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HLSPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const src =
      "https://zunisha-cors-proxy.vercel.app/proxy?url=https://dc.netmagcdn.com:2228/hls-playback/b145d2374990ae1c6729b473457964247200b0c4dfc266cd896c13c16c62b0176c9ddc773b9ab8e9957c6579e5ef9fbcebb131eeca1fb604a94687f6892ac5779deccdcf3349e666a862c5fc2e46e5b0c996ecf20d5d23e6ce60024de7b5310744dfd37bbd03834174381b7b5be285199931a8e1d81fc71f2e4244b29163e5c67d82efd9ac43aadfae34983a5912bc9a/master.m3u8";

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else {
      console.error("HLS not supported in this browser");
    }
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <video
        ref={videoRef}
        controls
        style={{
          width: "100%",
          borderRadius: "12px",
          background: "black",
        }}
      />
    </div>
  );
}
