exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
  
exports.clientBoard = (req, res) => {
    res.status(200).send("Client Content.");
};