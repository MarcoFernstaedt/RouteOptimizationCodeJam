const router = requrie("express").Router();
const submitFormRoutes = require("./submitForm");
const { NOT_FOUND } = require("../utils/errors");

// handles post request from form
router.use("/submit-form", submitFormRoutes);

// Catch-all non-existant routes.
router.use("*", (req, res) => {
  res.status(NOT_FOUND).json({ message: "Requested resource not found" });
});
