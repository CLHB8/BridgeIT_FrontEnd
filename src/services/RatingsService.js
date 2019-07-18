"use strict";

import HttpService from './HttpService';
import UserService from './UserService';
import RequestService from './RequestService';

export default class RatingsService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/ratings"
    }

    static getStuOffers(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getMyStuOffers(){
        return new Promise((resolve, reject) => {
            HttpService.get(`${StuOfferService.baseURL()}/my/${UserService.getCurrentUser().id}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getStuRatings(id){
        return new Promise((resolve, reject) => {
            console.log(`${RatingsService.baseURL()}/stu/${id}`);
            HttpService.get(`${RatingsService.baseURL()}/stu/${id}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getSenRatings(id){
        return new Promise((resolve, reject) => {
            HttpService.get(`${RatingsService.baseURL()}/sen/${id}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getStuOffer(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${StuOfferService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving stuOffer');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteStuOffer(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${StuOfferService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateStuOffer(stuOffer) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${stuOffer._id}`, stuOffer, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createStuOffer(stuOffer) {
        stuOffer.id = Math.floor((Math.random() * 100000000) + 1).toString();
        return new Promise((resolve, reject) => {
            HttpService.post(StuOfferService.baseURL(), stuOffer, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}