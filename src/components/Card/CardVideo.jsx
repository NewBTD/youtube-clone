import { useEffect } from "react";

function CardVideo({ content }) {
  const convertPublishDate = (date) => {
    const publish_date = new Date(date);
    const today = new Date();
    const difference_time = today.getTime() - publish_date.getTime();
    const difference_day = Math.round(difference_time / 86400000);
    return difference_day;
  };

  const convertView = (viewCount) => {
    let text_view_count = "";
    if (viewCount >= 1000 && viewCount < 10000) {
      viewCount /= 1000;
      text_view_count = viewCount + " พัน ครั้ง";
    } else if (viewCount >= 10000 && viewCount < 100000) {
      viewCount /= 10000;
      text_view_count = viewCount + " หมื่น ครั้ง";
    } else if (viewCount >= 100000 && viewCount < 1000000) {
      viewCount /= 100000;
      text_view_count = viewCount + " แสน ครั้ง";
    } else if (viewCount >= 1000000) {
      viewCount /= 1000000;
      text_view_count = viewCount + " ล้าน ครั้ง";
    } else {
      text_view_count = viewCount + " ครั้ง";
    }
    return text_view_count;
  };

  return (
    <div className="card">
      <div className="-thumb">
        <img src={content.video_thumbnail} alt="" />
      </div>
      <div className="-about">
        <div className="-channel-img">
          <img src={content.channel_profile_picture} alt="" />
        </div>
        <div className="-detail">
          <div className="-title">{content.video_title}</div>
          <div className="-channel">{content.channel_name}</div>
          <div className="-view">
            การดู {convertView(content.view_count)} •{" "}
            {convertPublishDate(content.video_created_at)} วันที่ผ่านมา
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardVideo;
