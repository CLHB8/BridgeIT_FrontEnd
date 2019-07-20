"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { StuMyOffersRow } from './StuMyOffersRow';
import StudentPage from './StudentPage';
import UserService from "../../services/UserService";

const dataTableStyle = {
    'margin-top': '20px',
};

export const StuMyOffers = ({data, onDelete}) => (
    <StudentPage user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined}>
        <DataTable plain style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Senior's Username</TableColumn>
                    <TableColumn>Your Message</TableColumn>
                    <TableColumn>Withdraw offer</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((stuOffer, i) => <StuMyOffersRow user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined} key={i} stuOffer={stuOffer} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </StudentPage>
);

