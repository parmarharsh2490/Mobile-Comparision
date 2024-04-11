
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
    <div className='grid grid-cols-3 items-center'>
      <div>
        <img src={image} className='w-full h-full ' alt="Phone" />
      </div>
      <div className='border rounded-sm border-black m-2 text-xs md:text-xl md:p-2  lg:text-xl lg:p-3 xl:text-2xl '>
        <p>Model: {model}</p>
        <p>Price: {price}</p>
        <p>Processor: {processor}</p>
        <p>Battery: {battery}</p>
        <p>Ram/Storage: {ram} / {storage}</p>
        <p>Camera: {camera}</p>
        <p>Fingerprint: {fingerprint}</p>
        <p>Colors: {colors.join(', ')}</p>
        <p>Operating System: {operating_system}</p>
        <p>Charger: {charger}</p>
      </div>
      <div className='border rounded-sm border-black m-2 text-xs md:text-xl md:p-2  lg:text-xl lg:p-3 xl:text-2xl'>
        <p>Antutu Score: {antutu_score}</p>
        <p>Charging Speed: {charging_speed}</p>
        <p>Display Size: {display_size}</p>
        <p>Date First Available: {date_first_available}</p>
        <p>Display Type: {display_type}</p>
        <p>In the Box: {in_the_box.join(', ')}</p>
        <p>Weight: {weight}</p>
        <p>Customer Ratings: {customer_ratings}</p>
        <p>Network Type: {network_type}</p>
      </div>
    </div>
  );
};

export default ProductListPhone;
