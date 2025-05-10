import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "bu1dnx7k", // From portfolio-cms/sanity.json
  dataset: "myprojects",
  apiVersion: "2023-05-03",
  token:
    "skLQaJwzLSxaSWn4YQb9Ws4ulbDyGKmTTBlHLQphppoDBspU7maMG3Of6xbVqQjJCZBWfu8QYI3WMhQSxDdOQ7K4K9lgH1QvRjF7exY8ZPKu0vkB25DKqXFpkBYAOAAjtgmZnoZS93pC244jTt2dwCagcgAidfW1XiMNuaWTmOq4AhsPW0pV",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
