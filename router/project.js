// import module
const express = require("express");
const router = express.Router();

// import connection
const connection = require("../connection");

/* CREATE */
// Create one project
router.post("/", (req, res) => {
    const formData = req.body;
    const sql = "INSERT INTO project SET ?";
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json("Le projet a bien été crée");
        }
    });
});

/* READ */
// Get all projects
router.get("/", (req, res) => {
    const sql = "SELECT * FROM project";
    connection.query(sql, [req.params], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Impossible d'obtenir la liste des projets");
        } else {
            res.status(200).json(result);
        }
    });
});

// Get one project
router.get("/:idProject", (req, res) => {
    const { idProject } = req.params;
    const sql = "SELECT * FROM project WHERE id = ? ";
    connection.query(sql, idProject, (err, result) => {
        if (err) {
            res.status(500).send("Impossible de trouver le projet");
        } else {
            res.status(200).json(result);
        }
    });
});

/* UPDATE */
// Edit one project
router.put("/:idProject", (req, res) => {
    const formData = req.body;
    const { idProject } = req.params;
    const sql = "UPDATE project SET ? WHERE id = ?";
    connection.query(sql, [formData, idProject], (err, result) => {
        if (err) {
            res.status(500).send("Impossible de modifier un projet");
        } else {
            res.status(201).send("Le projet a bien été édité");
        }
    });
});

/* DELETE */
// Delete one project
router.delete("/:idProject", (req, res) => {
    const { idProject } = req.params;
    const sql = "DELETE FROM project WHERE id = ?";
    connection.query(sql, [idProject], (err, result) => {
        if (err) {
            res.status(500).send("Impossible d'effacer un projet");
        } else {
            res.status(201).send("Le projet a bien été effacé");
        }
    });
});

// export router
module.exports = router;
