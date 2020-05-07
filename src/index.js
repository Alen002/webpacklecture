//call some code that is from our application
console.log('index.js');

import { run } from "./app/app";
import "./main.scss";

import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";





const alertService = new AlertService();
const componentService = new ComponentService(); 

run(alertService, componentService);