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

    static editProfile() {
        let id = this.getCurrentUser().id;
        return new Promise((resolve, reject) => {
            HttpService.put(`${UserService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateEdit(userUpdate) {
        console.log(this.getCurrentUser().id);
        console.log(userUpdate);
        let id = this.getCurrentUser().id;
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${id}`, userUpdate, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getUserById(userId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${userId}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving');
                }
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
                if(!console.log(textStatus)){
                    reject("Password or username not correct");
                }else{
                    reject(textStatus);
                }
            });
        });
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



    static getUser(userId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/${userId}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static goPremium(id) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${id}`, {isPremium: true}, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static isPremium() {
        let user = this.getCurrentUser();

        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/${user.id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data.isPremium);
                }
                else {
                    reject('Error while retrieving information if user is Premium');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getUserInfo() {
        let user = this.getCurrentUser();

        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/user/${user.id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}