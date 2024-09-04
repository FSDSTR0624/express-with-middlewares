const commonMiddleware = {
  logger: (req, res, next) => {
    console.log(`Calling to ${req.baseUrl}${req.url}, method: ${req.method}`);
    next();
  },
  logger2: (req, res, next) => {
    console.log("Logger 2");
    next();
  },
};

module.exports = { commonMiddleware };
