const apiKey =
  "Kqnx7dzynVsFI1L8txqLhqGmWkQdCSjnWxuXZBOsAeuMBfg10ODYdcF4vAirlpODox5ZCIERKHNq-v1pTrKb_mQpbVbYla7ADI2TSaXmFA2lSh53sKUGsgeXwkuHX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        } else {
          return [
            {
              imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
              name: "Your search do not have in the website.",
              rating: "0",
              reviewCount: "0",
            },
          ];
        }
      });
  },
};

export { Yelp };
