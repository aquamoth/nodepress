import {Express, Router} from 'express';
import Database from './types/database';
import { Component } from './types';

export default class ComponentRegister {
    constructor(db: Database) {
        
    }

    public initialize(app:Express) {
        
        const np_core_page = require('@components/np-core-page').default;

        let components:{[route: string]: Component} = {
            ['']: new np_core_page()
        };
        
        for(const route in components){
            const component = components[route];
            app.use('/'+route, component.router);
        }
    }
}