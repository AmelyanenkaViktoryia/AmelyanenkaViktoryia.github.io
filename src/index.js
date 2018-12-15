import './main.css';
import { btnCallback } from "./fetching";
import { renderSelectItem } from './render';
import { RequestFactory } from './requestFactory';

let getReq = RequestFactory.create('get', 'https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7', renderSelectItem);
getReq.getList();
const btn = document.getElementById('btn').addEventListener('click', btnCallback);
