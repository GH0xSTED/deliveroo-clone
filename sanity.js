import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "koq6c7sq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token: "",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
