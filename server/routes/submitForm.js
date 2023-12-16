const router = require("express").Router();
const { submitFormController } = require("../controllers/submitForm");

router.post("/", submitFormController);

module.exports = router;
