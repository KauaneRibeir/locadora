
import { Router } from "express";
import {
    signup,
    login
} from "../controllers/user_controller.js";

// import via from "../middleware/via_cep.js";
import checkToken from "../middleware/check_token.js";
import checkRole from "../middleware/check_role.js";
import viaCep from "../middleware/via_cep.js";

const router = Router();
// Onde está o check_token o usuario tem que estar logado
// tanto faz o nivel de acesso


// Onde está o check_role ai depende do nivel de acesso
router.post("/signup", viaCep, signup);
router.post("/login", login);

export default router;
