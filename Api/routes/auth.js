import express, { application } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { data } from "../methods/methods.js";
const router = express.Router();
dotenv.config();

router.post("/",data);

export default router;
