const router = require("express").Router();
const { submitFormController } = require("../controllers/submitForm");

router.get("/", submitFormController);

module.exports = router;
