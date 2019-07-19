"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { SenMyRequestsListRow } from './SenMyRequestsListRow';
import SeniorPage from './SeniorPage';
import { border } from '@material-ui/system';

const dataTableStyle = {
    'margin-bottom': '36px',
    
    'box-shadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19)'

};

export const SenMyRequestsList = ({data, onDelete}) => (
    
        <DataTable plain className="md-cell--6 md-paper md-paper--1" style={dataTableStyle}>
            <TableHeader >
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Edit</TableColumn>
                    <TableColumn>Remove</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((request, i) => <SenMyRequestsListRow key={i} request={request} onDelete={(id) => onDelete(id)} />)}

            </TableBody>
        </DataTable>
    
);

