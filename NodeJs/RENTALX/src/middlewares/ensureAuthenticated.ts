import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../erros/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implemantations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userId } = verify(
            token,
            "078c007bd92ddec308ae2f5115c1775d"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(userId);

        if (!user) {
            throw new AppError("User does not exist", 401);
        }

        next();
    } catch {
        throw new AppError("Invalide token!", 401);
    }
}
