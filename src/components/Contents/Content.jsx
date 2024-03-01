import { useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import "./ContentStyle.css";
import CardVideo from "../Card/CardVideo";
import CardShort from "../Card/CardShort";
function Content() {
  const [videos, setVideos] = useState([]);
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetch("http://localhost:3000/");
      const json = await data.json();
      setVideos(json);
    };

    const fetchShorts = async () => {
      const data = await fetch("http://localhost:3000/short");
      const json = await data.json();
      setShorts(json);
    };

    fetchVideos();
    fetchShorts();
  }, []);

  return (
    <section id="content">
      <Tags></Tags>
      <section id="the-cards">
        {videos.map((video, index) => (
          <CardVideo key={index} content={video}></CardVideo>
        ))}
      </section>
      <section id="shorts">
        <div className="-section-title">[] Shorts</div>
        <div className="short-wrap">
          {shorts.map((short, index) => (
            <CardShort key={index} content={short}></CardShort>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Content;
