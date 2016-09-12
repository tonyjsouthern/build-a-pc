import angular from 'angular';
import 'angular-ui-router';

// import utilities
import { config } from './utilities/config';
import { serverConstant as SERVER } from './utilities/server.constant'

// import controllers
import { RootController } from './controllers/root.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { LoginController } from './controllers/login.controller.js';

// import services

angular.module('app', ['ui.router'])
.config(config)
.controller('RootController', RootController)
.controller('HomeController', HomeController)
.controller('LoginController', LoginController)
