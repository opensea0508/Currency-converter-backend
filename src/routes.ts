import axios from 'axios';
import { response, Router } from 'express';
import { API_KEY, CURRENCY_API_URL } from './api';

const routes = Router();

routes.get('/', async(req, res) => {
  try {
    var currency = await axios.get(CURRENCY_API_URL, {
      headers: {
        'apikey': API_KEY
      }
    });
    console.log(currency);
  } catch (error) {
    console.log(error);
  }
  return res.json({ data: currency.data.rates });
});

export default routes;