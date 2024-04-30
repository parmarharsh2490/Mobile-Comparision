export interface Phone {
    image : string;
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
  
export interface User {
    name : string,
    username: string;
    email: string;
    imgURL : URL
    wishList? : Phone[],
  }
  
export  interface INewUser{
    email : string;
    name : string;
    username : string;
    password : string;
  }