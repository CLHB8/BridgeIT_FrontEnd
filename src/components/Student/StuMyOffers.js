"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { StuMyOffersRow } from './StuMyOffersRow';
import StudentPage from './StudentPage';
import UserService from "../../services/UserService";

const dataTableStyle = {
    'margin-top': '20px',
};

export const StuMyOffers = ({data, user,  onDelete}) => (
    <StudentPage user={user}>
        <DataTable plain style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Requester's Name</TableColumn>
                    <TableColumn>Your Message</TableColumn>
                    <TableColumn>Withdraw offer</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((stuOffer, i) => <StuMyOffersRow user={user} key={i} stuOffer={stuOffer} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </StudentPage>
);

