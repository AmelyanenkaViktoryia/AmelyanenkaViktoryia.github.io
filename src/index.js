import './main.css';
import {getListFromNewsapi, btnCallback} from "./fetching";

getListFromNewsapi();

const btn = document.getElementById('btn').addEventListener('click', btnCallback);