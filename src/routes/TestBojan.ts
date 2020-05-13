import {Request, Response, Router} from 'express';
import {OK} from 'http-status-codes';

// Init shared
const router = Router();

router.get('/date-time', async (req: Request, res: Response) => {
    console.log('Date time HEROKU_LIVE: ', JSON.stringify(new Date()))

    const response = {
        code: OK,
        data: new Date()
    }
    return res.json(response);
});

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
