export const restaurantList = [
    {
      info: {
        id: "279863",
        name: "Ghar ka Khana by EatFit",
        cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
        locality: "Naharpur",
        areaName: "Rohini",
        costForTwo: "₹250 for two",
        cuisines: [
          "North Indian",
          "Home Food",
          "Healthy Food",
          "Indian",
          "Punjabi",
        ],
        avgRating: 4.3,
      },
    },
  
    {
      info: {
        id: "225317",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "aizb6uyem2jb1hcrhxac",
        locality: "Rohini",
        areaName: "New Friends Colony",
        costForTwo: "₹500 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Beverages"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "498382",
        name: "Burger King",
        cloudinaryImageId: "aizb6uyem2jb1hcrhxac",
        locality: "M2K Mall",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.5,
        parentId: "166",
        avgRatingString: "4.5",
      },
    },
    {
      info: {
        id: "850492",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "31c298bddfa617332b46c93bb209d572",
        locality: "Rohini",
        areaName: "Unity Mall",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.4,
      },
    },
    {
      info: {
        id: "89571",
        name: "UBQ by Barbeque Nation",
        cloudinaryImageId: "hjokc46njfhv2vzhbzoa",
        locality: "Rohini",
        areaName: "Rohini",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          
        ],
        avgRating: 4,
      },
    },
    {
      info: {
        id: "326440",
        name: "Punjabi Angithi (Vegorama Group)",
        cloudinaryImageId: "g2pklvjnapzfoc4ackou",
        locality: "Paschim Vihar",
        areaName: "Paschim Vihar",
        costForTwo: "₹400 for two",
        cuisines: ["North Indian", "Chinese", "Tandoor"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "622616",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "3rd Sector",
        areaName: "Rohini",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
      },
    },
  ];
  
  //api links =https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83637
  export const IMG_link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  export const Menu_link= "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=28.644800&lng=77.21672169999999&restaurantId=" ;