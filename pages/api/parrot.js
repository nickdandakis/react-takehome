const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

export default async (request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "POST") {
    return new Promise((resolve) => {
      const hasFailed = !!getRandomInteger(2);
      const randomTimeout = getRandomInteger(8000);

      const payload = hasFailed
        ? {
            message: "Sorry, you have reached teapot not parrot",
            timeout: randomTimeout,
          }
        : {
            ...request.body,
            timeout: randomTimeout,
          };

      response.statusCode = hasFailed ? 418 : 202;

      setTimeout(() => {
        resolve(response.send(payload));
      }, randomTimeout);
    });
  } else {
    return response.status(405).send({ message: "Method not allowed" });
  }
};
