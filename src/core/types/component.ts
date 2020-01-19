import { Router } from "express";

export default class Component {
    public get router(): Router {
        throw new Error('The router must be overridden by all components.');
    }
}