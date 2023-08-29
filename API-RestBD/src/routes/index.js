import express from "express";
import eventos from "./eventosRoutes.js";
import usuarios from "./usuariosRoutes.js";
import ingressos from "./ingressosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Welcome to API-MoreEvents"})
    })
    
    app.use(
        express.json(),
        eventos,
        usuarios,
        ingressos
    )
}

export default routes;

