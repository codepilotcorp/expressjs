import {
    Request,
    Response
} from "express";

export let ping = (req: Request, res: Response) => {

    res.json(
        {
            "ping": "pong"
        }
    )
}