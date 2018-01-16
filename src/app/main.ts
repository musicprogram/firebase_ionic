import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import * as firebase from 'firebase/app';

import {firebaseConfig} from '../enviroments/firebase_config';
//var config 
firebase.initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule);


