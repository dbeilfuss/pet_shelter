module.exports = {
  seedData: () => {
    const seedData = `
        DROP TABLE IF EXISTS User_Pets_Favorites;
         DROP TABLE IF EXISTS Users;
         DROP TABLE IF EXISTS Pets;

        CREATE TABLE
          Pets (
            id bigint primary key generated always as identity,
            name text,
            breed text,
            age integer null,
            weight integer null,
            sex text,
            image_url text null default 'https://cdn-icons-png.flaticon.com/512/86/86259.png',
            is_reserved boolean default false,
            is_adopted boolean default false,
            adopted_by text null
          );

        INSERT INTO Pets (name, breed, sex, age, weight, image_url)
          VALUES 
            ('Bella', 'Terrier Mix', 'Female', 1, 30, 'https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg'),
            ('Oreo', 'Labrador Retriever', 'Male', 0, 7, 'https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Adler%20on%20Walk_0.JPG?itok=xfFiMl3Q'),
            ('Domino', 'Terrier Mix', 'Male', 2, 35, 'https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp'),
            ('Milo & Otis', 'Tabby Cat', 'Female', 0, 2, 'https://petprojectfoundation.org/wp-content/uploads/2022/02/PPFHome_Slider_FosterKittens.jpg'),
            ('Bruno', 'Boxer', 'Female', 5, 80, 'https://static.wixstatic.com/media/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg/v1/fill/w_320,h_236,q_90/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg'),
            ('Coco', 'Chihuahua Mix', 'Female', 6, 8, 'https://www.peta.org/wp-content/uploads/2017/05/iStock_11799314_Story_Stock.jpg'),
            ('Bailey', 'German Shepherd Mix', 'Female', 10, 55, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZFHvUFqgpYZ04ANNTIEV9FgpYtPZ7k7wBxo8f-Zph4XKNiNRviX4GBsFybRRJ1xCLJQ&usqp=CAU'),
            ('Lucy', 'Beagle Mix', 'Female', 2, 25, 'https://static.wixstatic.com/media/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg'),
            ('Spot', 'Terrier Mix', 'Male', 0, 7, 'https://www.wkrg.com/wp-content/uploads/sites/49/2023/07/Shelter1.jpg?w=1440&h=2048&crop=1'),
            ('Charlie', 'Jack Russell Terrier', 'Male', 0, 4, 'https://humanebroward.com/wp-content/uploads/2021/09/Mask-Group-19-1.png'),
            ('Pirate', 'Tabby Cat', 'Male', 0, 3, 'https://static.wixstatic.com/media/207720_3b6275b554ba4148a1983f29fd97becb~mv2.jpg/v1/fill/w_284,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Picture1.jpg'),
            ('Wolfer', 'Alaskan Malamut', 'Female', 2, 50, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61919290/2/?bust=1680284854&width=720'),
            ('Cutie', 'Shepher Mix', 'Male', 7, 20, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64838608/1/?bust=1685810642&width=720'),
            ('Piggie', 'Bulldog', 'Female', 3, 27, 'https://www.laanimalservices.com/sites/default/files/styles/hero_image_mobile/public/2022-08/09_Outdoor_2398.jpg.webp?itok=Ayffpim4'),
            ('Sierra', 'Hound Mix', 'Male', 4, 45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61zb1XkG6P6dIXYp_D7UxTO_mYZbBB9I5zq7Yi40pt77d49FGwXmagWoxl6-pTNuoaAg&usqp=CAU'),
            ('Monty', 'Bernese Mix', 'Male', 4, 55, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oregonhumane.org%2F&psig=AOvVaw2GP8ZgXWT7pReI8QeNz3JD&ust=1701729246207000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjtycup9IIDFQAAAAAdAAAAABAq'),
            ('Scruffy', 'Terrier Mix', 'Female', 2, 21, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shelteranimalscount.org%2Fjuly-is-national-lost-pet-prevention-month&psig=AOvVaw2GP8ZgXWT7pReI8QeNz3JD&ust=1701729246207000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjtycup9IIDFQAAAAAdAAAAABBD'),
            ('Rocky', 'German Shepherd Mix', 'Female', 0, 17, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdog-shelter&psig=AOvVaw2GP8ZgXWT7pReI8QeNz3JD&ust=1701729246207000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjtycup9IIDFQAAAAAdAAAAABBL');
            
            

      
       CREATE TABLE
          Users (
            id bigint primary key generated always as identity,
            name text,
            is_admin boolean
          );

        INSERT INTO Users (name, is_admin)
          VALUES 
            ('Nitin', true),
            ('Dan', true),
            ('Ginger', true),
            ('Noah', false),
            ('Micah', false),
            ('Becca', false);

        
        CREATE TABLE
          User_Pets_Favorites (
            id bigint primary key generated always as identity,
            user_id integer references Users (id),
            pets_id integer references Pets (id)
          );

          INSERT INTO User_Pets_Favorites (user_id, pets_id)
          VALUES 
            (6, 12),
            (6, 13),
            (6, 14);

        `;
    return seedData;
  },
};
