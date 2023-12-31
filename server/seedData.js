module.exports = {
  seedData: () => {
    const seedData = `
        DROP TABLE IF EXISTS User_Pets_Favorites;
        DROP TABLE IF EXISTS User_Login;
        DROP TABLE IF EXISTS Users;
        DROP TABLE IF EXISTS Pets;

        CREATE TABLE
          Pets (
            id bigint primary key GENERATED BY DEFAULT AS IDENTITY,
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

        INSERT INTO Pets (name, breed, sex, age, weight, image_url, is_reserved, is_adopted, adopted_by)
          VALUES 
          ('Sandy', 'Guinea Pig', 'Female', 3, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cGQhuFTm26HEPkPiXZblZ0Wzo--QAbmdI-l62xUaZ_ct84Pce4ORnNukwbMhHaHZHL4&usqp=CAU', false, false, null),
          ('Simba', 'Pit Bull Mix', 'Male', 1, 35, 'https://i.pinimg.com/736x/b0/77/d1/b077d115e9dbe3aff4eaea4c13a9c998.jpg', false, true, 'Mufasa'),
          ('Shadow', 'Husky Mix', 'Female', 2, 35, 'https://img1.wsimg.com/isteam/ip/568a5479-e09a-4ac2-bbaf-2c7cf3d2a7a4/fb_4216839308345566_1536x2048.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true', false, true, 'Siera Simmons'),
          ('Rusty', 'Corgi Mix', 'Female', 6, 30, 'https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/12815/2023/10/20/09/20231020090100.png', false, false, null),
          ('Sadie', 'Beagle', 'Female', 3, 21, 'https://critter-sitters.com/wp-content/uploads/2016/08/bigstock-Dog-In-Cage-30655145.jpg', false, false, null),
          ('Duke', 'German Shepherd Mix', 'Male', 3, 57, 'https://www.thehumanesociety.org/wp-content/uploads/Jinks-625x470.jpg', false, false, null),
          ('Whiskers', 'Domestic Short Hair', 'Male', 5, 13, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53106224/1/?bust=1632780325&width=600', false, false, null),
          ('Patches', 'Domestic Short Hair', 'Female', 0, 3, 'https://i0.wp.com/brownsburganimalclinic.com/wp-content/uploads/2022/10/sheltercatFI.jpg?w=1038&ssl=1', false, false, null),
          ('Sunny', 'Domestic Short Hair', 'Female', 6, 15, 'https://www.operationkindness.org/wp-content/uploads/blog-june-adopt-shelter-cat-month-operation-kindness.jpg', false, false, null),
          ('Trinity', 'Domestic Short Hair', 'Female', 4, 12, 'https://sl-prod-v2-cdn.shelterluv.com/sites/default/files/animal_pics/38723/2023/04/14/19/20230414195158.png', false, true, 'John Anderson'),
          ('Casper', 'Umbrella Cockatoo', 'Male', 34, 2, 'https://cdn.rescuegroups.org/6685/pictures/animals/18437/18437053/89853213.jpg', false, true, 'Christina Ricci'),
          ('Bluebell', 'Parakeet', 'Male', 1, 0, 'https://cdn.rescuegroups.org/6685/pictures/animals/19477/19477024/95000178.jpg', false, false, null),
          ('Apollo', 'Cockatiel', 'Male', 1, 0, 'https://scontent-fml20-1.xx.fbcdn.net/v/t1.6435-9/43579746_10156281666573591_5399845292138823680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c2f564&_nc_ohc=-HRWC51f48QAX87dSe6&_nc_ht=scontent-fml20-1.xx&oh=00_AfBBo0jIM92hfFpNn4eBl-3FakZTNklxNBoXBhsrMOsEXQ&oe=6594AC7A', false, true, 'Pearl'),
          ('Pearl', 'Cockatiel', 'Female', 1, 0, 'https://cdn.shopify.com/s/files/1/1111/3280/files/Getty_1310774601_600x600.jpg?v=1628904619', false, true, 'Apollo'),
          ('Marbles', 'Rabbit: Harlequin Mix', 'Male', 2, 5, 'https://animalfoundation.com/application/files/4615/4896/7768/Rabbits-as-Pets-2.jpg', false, true, 'Jack Oswald White'),
          ('Domino', 'Rabbit: Dutch', 'Female', 1, 4, 'https://images.squarespace-cdn.com/content/v1/5f09fc56bb3d81154fbf8172/1648073604534-5VZNMXNJMJ713OQQ4EO1/image-asset.jpeg?format=1000w', false, false, null),
          ('Silver', 'Chinchilla', 'Female', 4, 1, 'https://thegabber.com/wp-content/uploads/2022/08/Cassie_Pet-Pal-Animal-Shelter_08182022-e1660234898535.jpeg', false, false, null),
          ('Bell', 'Terrier Mix', 'Female', 1, 30, 'https://www.hartz.com/wp-content/uploads/2022/01/volunteer-at-animal-shelter-1.jpg', true, false, 'Gaston'),
            ('Oreo', 'Labrador Retriever', 'Male', 0, 7, 'https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Adler%20on%20Walk_0.JPG?itok=xfFiMl3Q', false, false, null),
            ('Domino', 'Terrier Mix', 'Male', 2, 35, 'https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp', false, false, null),
            ('Milo & Otis', 'Tabby Cat', 'Female', 0, 2, 'https://petprojectfoundation.org/wp-content/uploads/2022/02/PPFHome_Slider_FosterKittens.jpg', true, false, 'Becca'),
            ('Bruno', 'Boxer', 'Female', 5, 80, 'https://static.wixstatic.com/media/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg/v1/fill/w_320,h_236,q_90/877ec4_3c7edc52a52a48189610a73b24bb71fe~mv2.jpg', false, false, null),
            ('Coco', 'Chihuahua Mix', 'Female', 6, 8, 'https://www.peta.org/wp-content/uploads/2017/05/iStock_11799314_Story_Stock.jpg', false, true, 'Sonny Bird'),
            ('Bailey', 'German Shepherd Mix', 'Female', 10, 55, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZFHvUFqgpYZ04ANNTIEV9FgpYtPZ7k7wBxo8f-Zph4XKNiNRviX4GBsFybRRJ1xCLJQ&usqp=CAU', false, true, 'Micah'),
            ('Lucy', 'Beagle Mix', 'Female', 2, 25, 'https://static.wixstatic.com/media/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f75568_709d46acdd664ed59b4ef66110d3260d~mv2.jpg', false, false, null),
            ('Spot', 'Terrier Mix', 'Male', 0, 7, 'https://www.wkrg.com/wp-content/uploads/sites/49/2023/07/Shelter1.jpg?w=1440&h=2048&crop=1', false, false, null),
            ('Charlie', 'Jack Russell Terrier', 'Male', 0, 4, 'https://humanebroward.com/wp-content/uploads/2021/09/Mask-Group-19-1.png', false, true, 'LeAnne Leidig'),
            ('Pirate', 'Tabby Cat', 'Male', 0, 3, 'https://static.wixstatic.com/media/207720_3b6275b554ba4148a1983f29fd97becb~mv2.jpg/v1/fill/w_284,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Picture1.jpg', false, true, 'James Hook'),
            ('Wolfer', 'Alaskan Malamut', 'Female', 2, 50, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61919290/2/?bust=1680284854&width=720', false, false, null),
            ('Cutie', 'German Shepherd Mix', 'Male', 7, 20, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64838608/1/?bust=1685810642&width=720', false, false, null),
            ('Piggie', 'Bulldog', 'Female', 3, 27, 'https://www.laanimalservices.com/sites/default/files/styles/hero_image_mobile/public/2022-08/09_Outdoor_2398.jpg.webp?itok=Ayffpim4', false, true, 'Kermit leFrog'),
            ('Sierra', 'Hound Mix', 'Male', 4, 45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61zb1XkG6P6dIXYp_D7UxTO_mYZbBB9I5zq7Yi40pt77d49FGwXmagWoxl6-pTNuoaAg&usqp=CAU', false, false, null),
            ('Scruffy', 'Terrier Mix', 'Female', 2, 21, 'https://www.shelteranimalscount.org/wp-content/uploads/2023/07/Screenshot-2023-07-05-at-12.36.10-PM-730x500.png', false, true, 'Sally Mitcheck'),
            ('Peanut Butter', 'German Shepherd Mix', 'Female', 0, 17, 'https://www.shutterstock.com/image-photo/dog-260nw-587562362.jpg', false, false, null);
            

       CREATE TABLE
          Users (
            id bigint primary key generated always as identity,
            name text,
            is_admin boolean DEFAULT false
          );

        INSERT INTO Users (name, is_admin)
          VALUES 
            ('Nitin', true),
            ('Dan', true),
            ('Ginger', false),
            ('Noah', false),
            ('Micah', false),
            ('Becca', false);

        
        CREATE TABLE
          User_Pets_Favorites (
            id bigint primary key generated always as identity,
            user_id integer references Users (id),
            pet_id integer references Pets (id)
          );

          INSERT INTO User_Pets_Favorites (user_id, pet_id)
          VALUES 
            (6, 29),
            (6, 30),
            (6, 31),
            (4, 34),
            (3, 1),
            (5, 12),
            (5, 16),
            (5, 17),
            (5, 1),
            (4, 19),
            (4, 25),
            (5, 26);

            
        CREATE TABLE
          User_Login (
            id bigint primary key generated always as identity,
            user_id integer references Users (id)
          );
        
          INSERT INTO User_Login (user_id)
          VALUES
            (4);
            `;
    return seedData;
  },
};
