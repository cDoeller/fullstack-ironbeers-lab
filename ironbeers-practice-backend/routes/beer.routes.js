const Beer = require("../models/Beers.model");
const router = require("express").Router();

// GET ALL
router.get("/beers", (req, res) => {
  Beer.find()
    .then((allBeers) => {
      res.json(allBeers);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// ----> CHECK ORDER !

// GET SEARCH QUERY
router.get("/beers/search", (req, res) => {
  Beer.find({ name: { $regex: req.query.q } })
    .then((foundBeers) => {
      res.json(foundBeers);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// GET RANDOM
router.get("/beers/random", (req, res) => {
  Beer.aggregate([{ $sample: { size: 1 } }])
    .then((randomBeer) => {
      res.json(randomBeer);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// GET ONE
router.get("/beers/:id", (req, res) => {
  Beer.findById(req.params.id)
    .then((oneBeer) => {
      res.json(oneBeer);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// POST
router.post("/beers", (req, res) => {
  Beer.create(req.body)
    .then((newBeer) => {
      console.log(newBeer);
      res.json(newBeer);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// PUT
router.put("/beers/:id", (req, res) => {
  Beer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBeer) => {
      res.json(updatedBeer);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE
router.delete("/beers/:id", (req, res) => {
  Beer.findByIdAndDelete(req.params.id)
    .then((deletedBeer) => {
      res.json("beer successfully deleted.");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
