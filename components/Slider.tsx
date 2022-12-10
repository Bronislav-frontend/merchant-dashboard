import Slider from "react-slick";

const sliderItems = [
  {
    id: 1,
    text: "5X",
    info: "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
  },
  { id: 2, text: "2X", info: "second info" },
  { id: 3, text: "3X", info: "third info" },
  { id: 4, text: "4X", info: "fourth info" },
  { id: 5, text: "5X", info: "fifth info" },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className="flex">
            <h3>{item.text}</h3>
            <p>{item.info}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
