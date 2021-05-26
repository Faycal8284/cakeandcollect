exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
  
exports.vendeurBoard = (req, res) => {
    res.status(200).send("Vendeur Content.");
};