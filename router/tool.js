// import modules
const express = require("express");
const router = express.Router();

// import connection
const connection = require("../connection");

/* CREATE */
// Create one tool
router.post("/", (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO tool SET ?";
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'ajouter un outil.");
        } else {
            res.status(201).send("L'outil de programmation a bien été ajouté.");
        }
    });
});

/* READ */
// Get all tools
router.get("/", (req, res) => {
    const sql = "SELECT * FROM tool";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Impossile d'afficher la liste des outils.");
        } else {
            res.status(200).json(result);
        }
    });
});

// Get one tool
router.get("/:idTool", (req, res) => {
    const { idTool } = req.params;
    const sql = "SELECT * FROM tool WHERE id = ?";
    connection.query(sql, [idTool], (err, result) => {
        if (err) {
            res.status(200).send("Impossible d'afficher l'outil.");
        } else {
            res.status(200).json(result);
        }
    });
});

/* UPDATE */
// Edit one tool
router.put("/:idTool", (req, res) => {
    const formData = req.body;
    const { idTool } = req.params;
    const sql = "UPDATE tool SET ? WHERE id = ?";
    connection.query(sql, [formData, idTool], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'éditer l'outil.");
        } else {
            res.status(201).send("L'outil a bien été édité.");
        }
    });
});

/* DELETE */
// Delete one tool
router.delete("/:idTool", (req, res) => {
    const { idTool } = req.params;
    const sql = "DELETE FROM tool WHERE id = ?";
    connection.query(sql, [idTool], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'effacer l'outil.");
        } else {
            res.status(200).send("l'outil a bien été effacé.");
        }
    });
});

module.exports = router;
