// import express
import express from "express";
// import controllers
import {
    catchPokemon,
    releasePokemon,
    getPokemon, 
    getPokemonByData, 
    savePokemon, 
    updatePokemon,
    deletePokemon } from "../controllers/pokemonController.js";
 
    // express router
const router = express.Router();

// Route get Catch Pokemon
router.get('/catch', catchPokemon);
// Route get Release Pokemon
router.get('/release', releasePokemon);
// Route get All Pokemon
router.get('/', getPokemon);
// Route get single Pokemon
router.post('/', getPokemonByData);
// Route CREATE Pokemon
router.post('/add', savePokemon);
// Route UPDATE Pokemon
router.patch('/:id', updatePokemon);
// Route DELETE Pokemon
router.delete('/:id', deletePokemon);
 
// export router
export default router;