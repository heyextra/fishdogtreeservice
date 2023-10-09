import zipcodes from './zipcodes.json';

export const handler = async (event) => {
  try {
    const { zipcode } = event.queryStringParameters;

    if (!zipcode) {
        console.log(event);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'zipcode parameter is missing' }),
      };
    }

    // Convert zipcode to a string if it's not already, and ensure it's trimmed.
    const searchZipcode = String(zipcode).trim();

    const result = zipcodes.includes(searchZipcode);

    if (result) {
      return {
        statusCode: 200,
        body: JSON.stringify({ result: true }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ result: false }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
