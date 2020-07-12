const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { route } = require("./project");

/* Create */
// Create one team
router.post("/", (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO team SET ?";
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send("Impossible de créer une équipe");
        } else {
            res.status(201).send("L'équipe a bien été créee");
        }
    });
});

/* Read */
// get all teams
router.get("/", (req, res) => {
    const sql = "SELECT * FROM team";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'afficher la liste des équipes");
        } else {
            res.status(200).json(result);
        }
    });
});

// get one team
router.get("/:idTeam", (req, res) => {
    const { idTeam } = req.params;
    const sql = "SELECT * FROM team WHERE id = ?";
    connection.query(sql, [idTeam], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'acceder à l'équipe");
        } else {
            res.status(200).json(result);
        }
    });
});

/* Update */
// Uptade one team
router.put("/:idTeam", (req, res) => {
    const formData = req.body;
    const { idTeam } = req.params;
    const sql = "UPDATE team SET ? WHERE id = ?";
    connection.query(sql, [formData, idTeam], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'éditer l'équipe");
        } else {
            res.status(200).send("L'équipe a bien été éditée");
        }
    });
});

/* Delete */
// Delete one team
router.delete("/:idTeam", (req, res) => {
    const { idTeam } = req.params;
    const sql = "DELETE FROM team  WHERE id = ?";
    connection.query(sql, [idTeam], (err, result) => {
        if (err) {
            res.status(500).send("Impossible de supprimer l'équipe");
        } else {
            res.status(200).send("L'équipe a bien été supprimée");
        }
    });
});

// export
module.exports = router;
