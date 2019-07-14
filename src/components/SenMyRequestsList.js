"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { SenMyRequestsListRow } from './SenMyRequestsListRow';
import SeniorPage from './Senior/SeniorPage';

const dataTableStyle = {
    'margin-bottom': '36px'
};

export const SenMyRequestsList = ({data, onDelete}) => (
    <SeniorPage>
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
                {data.map((request, i) => <SenMyRequestsListRow key={i} request={request} onDelete={(id) => onDelete(id)} />)}

            </TableBody>
        </DataTable>
    </SeniorPage>
);

