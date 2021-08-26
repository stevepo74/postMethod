//fetch data and post it to an API

const data = {
  id: 29,
  name: "Jucy Lucy",
  restaurant: "Matt's",
  web: "www.mattsbar.com",
  description: "Beef burger with a hot melted surprise inside the patty",
  ingredients: [
    "beef",
    "cheese",
    "diced onion",
    "dill pickle slices",
    "ketchup",
    "mustard"
  ],
  addresses: [
    {
      addressId: 0,
      number: "3500",
      line1: "Cedar Ave S",
      line2: "Minneapolis, MN",
      postcode: "55407",
      country: "USA"
    }
  ]
};

fetch("https://my-burger-api.herokuapp.com/burgers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
