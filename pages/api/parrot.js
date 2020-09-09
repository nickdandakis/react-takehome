const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

export default (request, response) => {
  response.setHeader('Content-Type', 'application/json');

  if (request.method === 'GET') {
    response.statusCode = 200;
    return response.end(JSON.stringify({message: 'Only available through POST'}));
  } else if (request.method === 'POST') {
    const hasFailed = !!getRandomInteger(2);
    const randomTimeout = getRandomInteger(8000);
    const payload = (
      hasFailed
      ? {
        message: 'Sorry, you have reached teapot not parrot',
        timeout: randomTimeout,
      }
      : {
        ...request.body,
        timeout: randomTimeout,
      }
    );

    response.statusCode = (hasFailed ? 418 : 202);

    setTimeout(() => {
      return response.end(JSON.stringify(payload));
    }, randomTimeout);
  } else {
    response.statusCode = 404;
    return response.end();
  }
}
