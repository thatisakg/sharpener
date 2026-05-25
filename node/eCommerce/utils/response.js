const sendErrorResponse = (res, err) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    message,
    status: false
  });
};

const sendResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    data,
    status: true
  });
};

module.exports = {
  sendResponse,
  sendErrorResponse
};