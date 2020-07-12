// import module
const express = require("express");
const router = express.Router();
const connection = require("../connection");

/* CREATE */
// Create one developper
router.post("/", (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO developper SET ?";
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'ajouter un developper");
        } else {
            res.status(201).send("Le dévelloppeur a bien été crée");
        }
    });
});

/* READ */
// Read all developpers
router.get("/", (req, res) => {
    const sql = "SELECT * FROM developper";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(
                "Impossible d'acceder à la liste des dévelloppeurs"
            );
        } else {
            res.status(200).json(result);
        }
    });
});

// Read one developper
router.get("/:idDevelopper", (req, res) => {
    const { idDevelopper } = req.params;
    const sql = "SELECT * FROM developper WHERE id = ?";
    connection.query(sql, [idDevelopper], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
});

/* UPDATE */
// Update one developper
router.put("/:idDevelopper", (req, res) => {
    const formData = req.body;
    const { idDevelopper } = req.params;
    const sql = "UPDATE developper SET ? WHERE ID = ?";
    connection.query(sql, [formData, idDevelopper], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'éditer le dévelloppeur");
        } else {
            res.status(201).send("Le dévelloppeur a bien été édité");
        }
    });
});

/* DELETE */
// Delete one developper
router.delete("/:idDevelopper", (req, res) => {
    const { idDevelopper } = req.params;
    const sql = "DELETE FROM developper WHERE id = ?";
    connection.query(sql, [idDevelopper], (err, result) => {
        if (err) {
            res.status(500).send("Impossible de supprimer le dévelloppeur");
        } else {
            res.status(200).send("Le dévelloppeur a bien été supprimé");
        }
    });
});

// export router
module.exports = router;
