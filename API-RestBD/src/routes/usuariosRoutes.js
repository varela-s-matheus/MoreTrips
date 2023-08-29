import express from "express";  
import usuariosController from "../controllers/usuariosController.js";

const routerUsuarios = express.Router();

routerUsuarios
    .get("/usuario/:id", usuariosController.listarUsuarioPorId)   
    .get("/usuario", usuariosController.listarUsuarios)   
    .post("/usuario", usuariosController.cadastrarUsuario)
    .put("/usuario/:id", usuariosController.atualizarUsuario)
    .delete("/usuario/:id", usuariosController.excluirUsuario)

export default routerUsuarios;

