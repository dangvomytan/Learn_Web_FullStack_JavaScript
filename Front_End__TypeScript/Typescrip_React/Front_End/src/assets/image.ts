export const Image = {
     get NotFound()
     {
          return new URL("./images/404.jpg",import.meta.url).href;
     }
}