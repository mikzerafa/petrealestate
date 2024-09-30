const petGroomersMalta = [
  { name: "Teddy's Grooming", contact: "+356 9981 5117", location: "San Pawl Il-Bahar" },
  { name: "Fluff & Puff", contact: "+356 7994 7711", location: "St. Julian's" },
  { name: "Ramsil Mobile Grooming", contact: "+356 9989 0012", location: "Sliema" },
  { name: "Purrfect Paws", contact: "+356 7965 7638", location: "Ghaxaq" },
  { name: "Pampered Pooches", contact: "+356 2154 6565", location: "Mellieha" },
  { name: "Happy Paws", contact: "+356 2145 6611", location: "Msida" },
  { name: "Doggy Day Spa", contact: "+356 2134 4545", location: "Mosta" },
  { name: "Bark & Groom", contact: "+356 9982 2288", location: "Naxxar" },
  { name: "Smart Pets", contact: "+356 2124 5421", location: "Hamrun" },
  { name: "Robert's Grooming Service", contact: "+356 2123 7070", location: "Hamrun" },
  { name: "Pups 'N' Stuff", contact: "+356 2138 3838", location: "San Gwann" },
  { name: "Best Buddies Pet Grooming", contact: "+356 2138 9801", location: "San Gwann" },
  { name: "Pawfect Grooming", contact: "+356 9933 6622", location: "Attard" },
  { name: "Styling Academy Moggies & Doggies", contact: "+356 7980 5566", location: "Qormi" },
  { name: "Shaggy Chic", contact: "+356 2144 0066", location: "Qormi" },
  { name: "Scruffy to Fluffy", contact: "+356 2163 4219", location: "Qormi" },
  { name: "Pets R Us", contact: "+356 2167 7676", location: "Zejtun" },
  { name: "The Pet Parlor", contact: "+356 9985 2112", location: "Zebbug" },
  { name: "Pretty Pets", contact: "+356 2165 5522", location: "Safi" },
  { name: "Pro Grooming Salon", contact: "+356 9980 5511", location: "B’Bugia" }
];


const get = {
    GroomerPage : () => {
      return (
        <div className="container">
          <h1 className="title">Find a groomer for your pooch</h1>
          <ul className="list">
            {petGroomersMalta.map((groomer, index) => (
              <li key={index} className="item">
                <h2 className="name">{groomer.name}</h2>
                <p className="location">Location: {groomer.location}</p>
                <p className="contact">Contact: {groomer.contact}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
}

export default {
    get
}