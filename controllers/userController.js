let appUsers = [];

const userController = {
  getUserInfo: (req, res) => {
    console.log("Llamada a getUserInfo");
    // console.log("Contenido de REQ", req);

    console.log("PARAMS", req.params, req.query);

    console.log("Obteniendo información del usuario:", req.query.user);

    if (true) {
      throw new Error("Usuario no accesible");
    }

    res.status(200).json({
      id: req.query.user,
      name: "Pepito",
      lastName: "Ortiz",
      email: "pepito@gmail.com",
    });
  },
  getAllUsersInfo: (req, res) => {
    console.log("Llamada a getAllUsersInfo");
    res.status(200).json(appUsers);
  },
  addNewUser: (req, res) => {
    console.log("Has llamado a addNewUser");

    console.log("Contenido del BODY", req.body);

    const userToAdd = {
      name: req.body.name,
      email: req.body.email,
    };

    appUsers = [...appUsers, userToAdd];

    res
      .status(200)
      .send(`Usuario con email ${req.body.email} añadido correctamente`);
  },
};

module.exports = userController;
