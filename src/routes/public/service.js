module.exports = (src) => {
  src.get("/liveness_check", (req, res) => {
    // Send a 200 OK response to indicate the service is alive
    res.status(200).send("OK");
  });

  src.get("/readiness_check", (req, res) => {
    // Send a 200 OK response to indicate the service is ready
    res.status(200).send("OK");
  });
};
