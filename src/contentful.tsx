import { createClient } from 'contentful';



console.log("SPACE:", import.meta.env.VITE_CONTENTFUL_SPACE_ID);
console.log("TOKEN:", import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);

export const client = createClient ({


   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});





