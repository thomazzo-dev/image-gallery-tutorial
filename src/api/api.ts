async function unsplashApi({
  url,
  options,
}: {
  url: string;
  options?: string;
}) {
  //  get Access Key from .env file
  const BASE_URL = "https://api.unsplash.com";
  const API_KEY = process.env.API_ACCESS_KEY;

  const res = await fetch(
    `${BASE_URL}/${url}?client_id=${API_KEY}&${options}`,
    {}
  );

  if (!res.ok) {
    console.error(`API Error: ${res.status} ${res.statusText}`);

    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default unsplashApi;
