import  express  from "express"; 

const app = express();
const PORT=4000;

const MONGO_URL = "mongodb://localhost";
async function createConnection()
 {const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
   return client;
}
 const client = await createConnection();
 
 const pizzas = [
  {
      name: "Triple Chicken Feast",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 200,
              medium: 350,
              large: 400,
          },
      ],
      category: "nonveg",
      image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.21e57422a5579843b4722a067fbda8ca.1.jpg",
      description: "Triple Chicken Feast I Cheese",
  },
  {
      name: "Chicken Supreme",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 200,
              medium: 350,
              large: 400,
          },
      ],
      category: "nonveg",
      image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.f29fa58b7f2a3ec307b6c0b44411f900.1.jpg",
      description:
          "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  },
  {
      name: "Classic Corn Pizza",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 180,
              medium: 250,
          },
      ],
      category: "veg",
      description:
          "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
      image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
  },
  {
      name: "Country Feast",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 200,
              medium: 300,
              large: 420,
          },
      ],
      category: "veg",
      image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/country-feast.ad202923d4c687dfc1341fc3b719c021.1.jpg",
      description:"pizza made with Herbed Onion & Green capsicum, Sweet Corn, Tomato, Mushroom"
  },
  {
      name: "Margerita",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 150,
              medium: 220,
              large: 300,
          },
      ],
      category: "veg",
      image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
      description:
          "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers.",
  },
  {
      name: "Double Cheese Margherita Pizza",
      varients: ["small", "medium", "large"],
      prices: [
          {
              small: 250,
              medium: 380,
          },
      ],
      category: "veg",
      image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg",
      description:
          "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it",
  },
];


  app.get("/",function(request,response){
    response.send("hello this is lee fullstack developer");
})

app.get("/pizzas", async function(request,response){
    const pizza= await client.db("b30wd").collection("pizzas").find({}).toArray();
    response.send(pizza)
  });
 


app.listen(PORT,()=>console.log(`server is started ${PORT}`));