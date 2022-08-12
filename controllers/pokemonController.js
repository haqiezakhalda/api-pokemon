// import models
import Pokemon from "../models/Pokemon.js";
 
// function catch Pokemon
export const catchPokemon = async (req, res) => {
  try {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const result = { result: getRandomInt(2) };
    console.log("Result:", result);
    res.json(result);
  } catch (error) {
      res.status(500).json({message: error.message});
  }  
}

// function catch Pokemon
export const releasePokemon = async (req, res) => {
  try {
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const number = randomIntFromInterval(1, 20)
    const result = { result: number };
    console.log("Result:", result);
    res.json(result);
  } catch (error) {
      res.status(500).json({message: error.message});
  }  
}

// function get All Pokemon
export const getPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.find();
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }    
}

// function get single Pokemon
export const getPokemonByData = async (req, res) => {
  try {
      const pokemon = await Pokemon.find(req.body);
      res.json(pokemon);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
   
}
 
// function Create Pokemon
export const savePokemon = async (req, res) => {
    const pokemon = new Pokemon(req.body);
    try {
        const savedPokemon = await pokemon.save();
        res.status(201).json(savedPokemon);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update Pokemon
export const updatePokemon = async (req, res) => {
  const cekId = await Pokemon.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
      const updatedPokemon = await Pokemon.updateOne({ _id: req.params.id }, { $set: req.body });
      console.log("Update Nih:", updatedPokemon)
        res.status(200).json(updatedPokemon);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete Pokemon
export const deletePokemon = async (req, res) => {
    const cekId = await Pokemon.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedPokemon = await Pokemon.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPokemon);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}