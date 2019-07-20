"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { StuMyOffersRow } from './StuMyOffersRow';
import StudentPage from './StudentPage';

const dataTableStyle = {
    'margin-top': '20px',
};

export const StuMyOffers = ({data, onDelete}) => (
    <StudentPage>
        
        <DataTable plain resposive style={dataTableStyle} className="md-cell--12 md-paper md-paper--1">
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Request Name</TableColumn>
                    <TableColumn>Your Message</TableColumn>
                    <TableColumn>Withdraw offer</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((stuOffer, i) => <StuMyOffersRow key={i} stuOffer={stuOffer} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </StudentPage>
);

