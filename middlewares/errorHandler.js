const errorHandler = (err, req, res, next) => {
  console.log(err);
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: "Email already exist" });
      break;
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "EmailRequired":
      res.status(400).json({ message: "Please enter your email" });
      break;
    case "PasswordRequired":
      res.status(400).json({ message: "Please enter your password" });
      break;
    case "InvalidLogin":
      res.status(401).json({ message: "Invalid Email/Password" });
      break;
    case "InvalidToken":
      res.status(401).json({ message: "Invalid Token, please login first" });
      break;
    case "Forbidden":
      res.status(403).json({ message: "Forbidden" });
      break;
    case "NotFound":
      res.status(404).json({ message: "Not Found" });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};
module.exports = errorHandler;
