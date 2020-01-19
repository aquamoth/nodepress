import {Express, Router} from 'express';
import Database from './types/database';
import { Component } from './types';

export default class ComponentRegister {
    constructor(db: Database) {
        
    }

    public initialize(app:Express) {
        
        console.log('Loading components');
        let components:{[route: string]: Component} = {};
        
        const task1 = import('@components/np-core-page').then(component => components[''] = new component.default());

        Promise.all([task1]).then(()=>{
            console.log('Adding routes to server');
            for(const route in components){
                const component = components[route];
                app.use('/'+route, component.router);
            }
        });
    }
}