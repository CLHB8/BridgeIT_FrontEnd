"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:3000/auth"; }

    static registerMovieApp(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                username: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static register(user) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                password: user.password,
                reentered_password: user.reentered_password,
                firstname: user.firstname,
                lastname: user.lastname,
                mail: user.mail,
                phone_number: user.phone_number,
                streetname: user.streetname,
                streetnumber: user.streetnumber,
                cityname: user.cityname,
                postalcode: user.postalcode,
                username: user.mail,
                isSenior: user.isSenior,
                isPremium: user.isPremium,
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                username: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static isSenior(){
        return window.localStorage['isSenior'];
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }



    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id : JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username
        };
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }

    static isSenior() {
        return window.localStorage['isSenior'] === "true";
    }

    static isPremium() {
        return window.localStorage['isPremium'] === "true";
    }
}