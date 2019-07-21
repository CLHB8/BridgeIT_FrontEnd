"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button} from 'react-md';

import {SenMyAssignedRequestsListRow} from './SenMyAssignedRequestsListRow';
import SeniorPage from './SeniorPage';
import {border} from '@material-ui/system';

const dataTableStyle = {
    // 'margin-bottom': '36px',
    // 'box-shadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19)'
};

export const SenMyAssignedRequestsList = ({data, user, onDelete}) => (

    <DataTable plain className="md-cell--12" style={dataTableStyle}>
        <TableHeader>
            <TableRow>
                <TableColumn></TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Student's Name</TableColumn>
                <TableColumn>Created</TableColumn>
                <TableColumn>Rating</TableColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((request, i) => {
                    if (request.isAssigned) {
                        return (
                            <SenMyAssignedRequestsListRow key={i} request={request} user={user} onDelete={(id) => onDelete(id)}/>
                        )
                    }
                }
            )
            }
        </TableBody>
    </DataTable>
);



