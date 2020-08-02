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
    connection.query(sql, [idProject], (err, result) => {
        if (err) {
            res.status(500).send("Impossible de trouver le projet");
        } else {
            res.status(200).json(result);
        }
    });
});

// I want the project's screenshot
router.get("/:idProject/screenshot", (req, res) => {
    const { idProject } = req.params;
    const sql = "SELECT screenshot FROM project WHERE id = ?";
    connection.query(sql, [idProject], (err, results) => {
        if (err) {
            res.status(500).json({
                error: err.message,
                sql: err.sql,
            });
        } else {
            // const convertResults = Buffer.from(results[0].screenshot).toString('base64')
            // const blob = results[0].screenshot;
            // const reader = new FileReader();
            // reader.readAsDataURL(blob);
            // reader.onloadend = () => {
            //     const base64data = reader.result;
            //     console.log("64", base64data);
            // };
            // res.status(200).send(reader.readAsDataURL(blob));
            res.status(200).json(results);
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
