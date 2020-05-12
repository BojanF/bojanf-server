import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();

router.post('/parser-test', async (req: Request, res: Response) => {
    console.log('Request: ', JSON.stringify(req.body));
    // const { user } = req.body;
    // if (!user) {
    //     return res.status(BAD_REQUEST).json({
    //         error: paramMissingError,
    //     });
    // }
    // await userDao.add(user);
    const response = {
        code: OK,
        data: JSON.stringify(req.body),
        response: 'Bojan response'
    }
    return res.json(response);
});

export default router;
