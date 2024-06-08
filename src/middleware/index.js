"use stict";

function errorHander(err, req, res) {
  return res.status(500).json({
    success: false,
    error: "Server error",
  });
}

function notFound(req, res) {
  return res.status(404).json({
    success: false,
    error: "Not found",
  });
}

function logger(req, res, next) {
  console.log(req.method, req.path);
  console.log(req.headers);
  next();
}

module.exports = { errorHander, notFound, logger };
