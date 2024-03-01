function CardSearch({ result }) {
  return (
    <div className="card">
      <div className="-thumb">
        <img src={result.video_thumbnail} alt="" />
      </div>
      <div className="-about">
        <div className="-detail">
          <div className="-title">{result.video_title}</div>
          <div className="-view">การดู 1.2 ล้านครั้ง • 4 เดือนที่ผ่านมา</div>
          <div className="-channel">
            <div className="-channel-img">
              <img src={result.channel_profile_picture} alt="" />
            </div>
            <div className="-channel-name">{result.channel_name}</div>
          </div>
          <div className="-caption -title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            veritatis? Nam, voluptatem blanditiis. Minima et veniam incidunt
            quod! Sunt, consequatur illum consectetur vel odit modi. Voluptates
            mollitia ratione perspiciatis est.
          </div>
          <div className="-option">$</div>
        </div>
      </div>
    </div>
  );
}

export default CardSearch;
