import express from "express";  
import ingressosController from "../controllers/ingressosController.js";

const routeringressos = express.Router();

routeringressos
    .get("/ingresso/", ingressosController.listarIngressos)   
    .get("/ingresso/:id", ingressosController.listarIngressoPorId)   
    .post("/ingresso", ingressosController.cadastrarIngresso)
    .put("/ingresso/:id", ingressosController.atualizarIngresso)
    .delete("/ingresso/:id", ingressosController.excluirIngresso)

export default routeringressos;

