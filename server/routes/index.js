const router = requrie("express").Router();

// handles post request from form
router.post('/submit-form', submitFormController)

// Catch-all non-existant routes.
router.use("*", (req, res) => {
  res.status(NOT_FOUND).json({ message: "Requested resource not found" });
});
