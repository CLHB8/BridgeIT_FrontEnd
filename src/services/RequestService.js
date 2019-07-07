"use strict";

import HttpService from './HttpService';

export default class RequestService{

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/requests"
    }

    static createRequest(seniorRequest) {
        seniorRequest.id = Math.floor((Math.random() * 100000000) + 1).toString();

        return new Promise((resolve, reject) => {
            HttpService.post(RequestService.baseURL(), seniorRequest, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}