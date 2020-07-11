import logger from '@monorepo/logger';

module.exports.hello = async (event) => {
  logger('Hello World. Ive pulled in our own custom logger');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'New Package v1.1! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
};
