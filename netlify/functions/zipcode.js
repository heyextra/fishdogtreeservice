import zipcodes from './zipcodes.json';

export const handler = async (event) => {
  const { zipcode } = event.queryStringParameters; // Assuming you expect the zipcode as a query parameter.

  function searchZipcodes(source, query) {
    return source.includes(query);
  }

  const result = searchZipcodes(zipcodes, zipcode);

  // Netlify Functions need to return an object with a statusCode
  // Other properties such as headers or body can also be included.
  return {
    statusCode: 200,
    body: JSON.stringify({ result }), // Corrected the response body format
  };
};
