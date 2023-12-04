// const baseURL = `http://localhost:8000/api`;
// const baseURL = "http://3.17.157.157:8000/api";
const baseURL = `./api`;

let petsList = [
  {
    imageURL:
      "https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg",
    Name: "Bella",
    Breed: "Terrier Mix",
    MaleFemale: "Female",
    Age: 1,
    Weight: 30,
  },
  {
    imageURL:
      "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Adler%20on%20Walk_0.JPG?itok=xfFiMl3Q",
    Name: "Oreo",
    Breed: "Labrador Retriever",
    MaleFemale: "Male",
    Age: 0,
    Weight: 7,
  },
  {
    imageURL:
      "https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp",
    Name: "Domino",
    Breed: "Terrier Mix",
    MaleFemale: "Male",
    Age: 2,
    Weight: 35,
  },
  {
    imageURL:
      "https://petprojectfoundation.org/wp-content/uploads/2022/02/PPFHome_Slider_FosterKittens.jpg",
    Name: "Milo & Otis",
    Breed: "Tabby Cat",
    MaleFemale: "Female",
    Age: 0,
    Weight: 2,
  },
  {
    imageURL:
      "https://static.wixstatic.com/media/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg/v1/fill/w_320,h_236,q_90/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg",
    Name: "Bruno",
    Breed: "Boxer",
    MaleFemale: "Female",
    Age: 5,
    Weight: 80,
  },
  {
    imageURL:
      "https://www.peta.org/wp-content/uploads/2017/05/iStock_11799314_Story_Stock.jpg",
    Name: "Coco",
    Breed: "Chihuahua Mix",
    MaleFemale: "Female",
    Age: 6,
    Weight: 8,
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZFHvUFqgpYZ04ANNTIEV9FgpYtPZ7k7wBxo8f-Zph4XKNiNRviX4GBsFybRRJ1xCLJQ&usqp=CAU",
    Name: "Bailey",
    Breed: "German Shepherd Mix",
    MaleFemale: "Female",
    Age: 10,
    Weight: 55,
  },
  {
    imageURL:
      "https://static.wixstatic.com/media/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg",
    Name: "Lucy",
    Breed: "Beagle Mix",
    MaleFemale: "Female",
    Age: 2,
    Weight: 25,
  },
  {
    imageURL:
      "https://www.wkrg.com/wp-content/uploads/sites/49/2023/07/Shelter1.jpg?w=1440&h=2048&crop=1",
    Name: "Spot",
    Breed: "Terrier Mix",
    MaleFemale: "Male",
    Age: 0,
    Weight: 7,
  },
  {
    imageURL:
      "https://humanebroward.com/wp-content/uploads/2021/09/Mask-Group-19-1.png",
    Name: "Charlie",
    Breed: "Jack Russell Terrier",
    MaleFemale: "Male",
    Age: 0,
    Weight: 4,
  },
  {
    imageURL:
      "https://static.wixstatic.com/media/207720_3b6275b554ba4148a1983f29fd97becb~mv2.jpg/v1/fill/w_284,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Picture1.jpg",
    Name: "Pirate",
    Breed: "Tabby Cat",
    MaleFemale: "Male",
    Age: 0,
    Weight: 3,
  },
];

function getAllPets() {
  return petsList;
}

function getSamplePets(numberOfPets) {
  const shuffledPets = petsList.sort(() => 0.5 - Math.random());
  return shuffledPets.slice(0, numberOfPets);
}

let usersList = [
  {
    Name: "Nitin",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Dan",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Ginger",
    UserType: "admin",
    FavoritePets: [""],
  },
  {
    Name: "Noah",
    UserType: "standard",
    FavoritePets: [""],
  },
  {
    Name: "Micah",
    UserType: "standard",
    FavoritePets: [""],
  },
  {
    Name: "Becca",
    UserType: "standard",
    FavoritePets: [""],
  },
];

let currentUser = "Dan";

function getAllUsers() {
  return usersList;
}

function getAdminUsers() {
  const adminUsers = usersList.filter((user) => user.UserType === "admin");
  return adminUsers;
}

function getStandardUsers() {
  const standardUsers = usersList.filter(
    (user) => user.UserType === "standard"
  );
  return standardUsers;
}

function recordLoginToDatabase(userName) {
  currentUser = userName;
  console.log(currentUser);
}

function isAdmin() {
  const thisUser = usersList.find((user) => user.Name === currentUser);
  const isAdmin = thisUser.UserType === "admin";
  console.log(`is admin: ${isAdmin}`);
  return isAdmin;
}

function getCurrentUser() {
  return currentUser;
}

function seedDatabase() {
  const requestURL = `${baseURL}/seedDatabase`;

  axios
    .post(requestURL)
    .then((res) => {
      location.reload();
    })
    .catch((err) => {
      const messageSection = document.querySelector(".selected-item");
      messageSection.innerHTML = "Error Ressetting Database";
      console.log(err);
    });
}
