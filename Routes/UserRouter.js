import express from 'express'
import { createUser, getUser } from '../Controller/UserController';

const userRouter = express.Router();

userRouter.post(createUser)
userRouter.get(getUser)

export default userRouter;
