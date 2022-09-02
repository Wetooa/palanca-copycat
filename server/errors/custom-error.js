class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCOde = statusCode;
  }
}

const createCustomError = (msg, status) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
