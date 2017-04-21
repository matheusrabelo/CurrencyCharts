import express from 'express';

import history from './history/routes';
import supportedCurrencies from './supportedCurrencies/routes';

const router = new express.Router();

router.use('/history', history);
router.use('/supportedCurrencies', supportedCurrencies);

router.use('*', (request, response) => {
    response.status(404)
            .json({
                message: 'resource not found',
                success: false,
            });
});

export default router;
