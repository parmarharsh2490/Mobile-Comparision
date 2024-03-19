interface Props {
  image: string;
  model: string;
  display_type: string;
  display_size: string;
  ram: string;
  storage: string;
  price: string;
  processor: string;
  battery: string;
  charger: string;
  charging_speed: string;
  camera: string;
  fingerprint: string;
  antutu_score: string;
  network_type: string;
  customer_ratings: string;
  operating_system: string;
  colors: string[];
  weight: string;
  date_first_available: string;
  in_the_box: string[];
}
const ProductListPhone = ({
  image,
  model,
  price,
  ram,
  storage,
  camera,
  fingerprint,
  colors,
  operating_system,
  antutu_score,
  charging_speed,
  charger,
  display_size,
  display_type,
  date_first_available,
  in_the_box,
  weight,
  customer_ratings,
  network_type,
  battery,
  processor,
}: Props) => {
  return (
    <div className="flex items-center my-3">
      <div className="image">
        <img src={image} height={"350px"} width={"350px"} alt="" />
      </div>
      <div id="phoneDetails" className="flex py-5 text-xl my-3 m-9 items-center justify-around">
       <div className="border border-grey-300 p-3 my-3 mr-14">
       <p>Model : {model}</p>
        <p>Price : {price}</p>
        <p>Processor : {processor}</p>
        <p>Battery : {battery}</p>
        <p>
          Ram/Storage : {ram} / {storage}
        </p>
        <p>Camera : {camera}</p>
        <p>fingerprint : {fingerprint}</p>
        <p>colors : {colors}</p>
        <p>operating_system : {operating_system}</p>
        <p>Charger : {charger}</p>
       </div>
        <div className="border border-grey-300 p-3 my-3 mr-14">
        <p>antutu_score : {antutu_score}</p>
        <p>charging_speed : {charging_speed}</p>
        <p>display_size : {display_size}</p>
        <p>date_first_available : {date_first_available}</p>
        <p>display_type : {display_type}</p>
        <p>in_the_box : {in_the_box}</p>
        <p>weight : {weight}</p>
        <p>customer_ratings : {customer_ratings}</p>
        <p>network_type : {network_type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPhone;
