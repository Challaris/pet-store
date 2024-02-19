const router = require("express").Router();

const PetController = require("../controllers/pet.controller");

router.get("/", PetController.getAllPets);

router.get("/:id", PetController.getSinglePet);

router.post("/", PetController.getSinglePet);

router.patch("/:id", PetController.getSinglePet);

router.delete("/:id", PetController.deletePetData);

module.exports = router;
