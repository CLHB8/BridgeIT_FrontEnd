"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { StuMyOffersRow } from './StuMyOffersRow';
import StudentPage from './StudentPage';

const dataTableStyle = {
    'margin-bottom': '36px'
};

export const StuMyOffers = ({data, onDelete}) => (
    <StudentPage>
        <DataTable plain style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Edit</TableColumn>
                    <TableColumn>Remove</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((stuOffer, i) => <StuMyOffersRow key={i} stuOffer={stuOffer} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </StudentPage>
);

