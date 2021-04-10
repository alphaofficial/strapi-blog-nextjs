import { getStrapiURL } from "./api";

export const getStrapiMedia = (media) => {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

/**
 * 
 * This function will simply return the correct url for an image depending on where they are hosted (local machine, hosted on a server).
In fact, locally, an image will have the /uploads/... url but on Cloudinary it will have a the https://cloudinary.com/.... url

 */