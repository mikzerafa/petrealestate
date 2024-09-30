
import '../css/RestaurantList.css';

type PetSitter = {
  name: string;
  location: string;
  contact: string;
};

const petSitters: PetSitter[] = [
  {
    name: "Muddy Paws Dog Day Care & Boarding",
    location: "Malta",
    contact: "https://www.facebook.com/muddypaws.mt"
  },
  {
    name: "La Pooch Boutique",
    location: "Malta",
    contact: "https://www.facebook.com/LaPoochBoutiqueMalta"
  },
  {
    name: "Keith and Lara Petsitting",
    location: "Malta",
    contact: "https://www.facebook.com/keithandlarapetsitting"
  },
  {
    name: "Hannah’s Pet Care",
    location: "Malta",
    contact: "https://www.facebook.com/HannahsPetCareMalta"
  }
];


const get = {
    SitterPage : () => {
        return   <div className="container">
        <h1 className="title">Pet Sitters</h1>
        <ul className="list">
          {petSitters.map((sitter, index) => (
            <li key={index} className="item">
              <h2 className="name">{sitter.name}</h2>
              <p className="location">Location: {sitter.location}</p>
              <p className="description">Contact: <a href={sitter.contact}>{sitter.contact}</a></p>
            </li>
          ))}
        </ul>
      </div>
    }
}

export default {
    get
}