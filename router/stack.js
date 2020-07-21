// import modules
const express = require("express");
const router = express.Router();

// import connection
const connection = require("../connection");

/* CREATE */
// Create one stack
router.post("/", (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO stack SET ?";
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send(err);
            res.status(500).send("Impossible d'ajouter un langage");
        } else {
            res.status(201).send(
                "Le langage de programmation a bien été ajouté"
            );
        }
    });
});

/* READ */
// Get all stacks
router.get("/", (req, res) => {
    const sql = "SELECT * FROM stack";
    connection.query(sql, (err, result) => {
        if (err) {
            // res.status(500).send("Impossile d'afficher la liste des langages");
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
});

// Get one stack
router.get("/:idStack", (req, res) => {
    const { idStack } = req.params;
    const sql = "SELECT * FROM stack WHERE id = ?";
    connection.query(sql, [idStack], (err, result) => {
        if (err) {
            res.status(200).send("Impossible d'afficher le langage");
        } else {
            res.status(200).json(result);
        }
    });
});

/* UPDATE */
// Edit one stack
router.put("/:idStack", (req, res) => {
    const formData = req.body;
    const { idStack } = req.params;
    const sql = "UPDATE stack SET ? WHERE id = ?";
    connection.query(sql, [formData, idStack], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'éditer le langage");
        } else {
            res.status(201).send("Le langage a bien été édité");
        }
    });
});

/* DELETE */
// Delete one stack
router.delete("/:idStack", (req, res) => {
    const { idStack } = req.params;
    const sql = "DELETE FROM stack WHERE id = ?";
    connection.query(sql, [idStack], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'effacer le langage");
        } else {
            res.status(200).send("le langage a bien été effacé.");
        }
    });
});

module.exports = router;
