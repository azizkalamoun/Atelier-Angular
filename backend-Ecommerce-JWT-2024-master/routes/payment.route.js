const express = require('express');
const router = express.Router();

const Stripe = require('stripe')('sk_test_51MkqU6BajkxsFdRbREzK0h5cnlUoGYybmAeGgfb9H7lSbHjevXjkQeqrRr2SrzAHZyGERagf962bf49NA6L2cBF200swIUMYLa');

router.post('/', async (req, res) => { console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

module.exports = router;

