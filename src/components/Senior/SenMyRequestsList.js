"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button} from 'react-md';

import {SenMyRequestsListRow} from './SenMyRequestsListRow';
import SeniorPage from './SeniorPage';
import {border} from '@material-ui/system';
import {Typography, Card, CardActions, CardActionArea, CardContent, CardMedia,} from '@material-ui/core';
import UserService from "../../services/UserService";

const dataTableStyle = {
    'margin-bottom': '36px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': '20px',

    'boxShadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19)'

};

export const SenMyRequestsList = ({data, onDelete}) => (
    <SeniorPage user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined}>
        <Card>
            <CardContent>
                <Typography>
                    Here you can see all the requests you have posted.
                </Typography>

            </CardContent>
        </Card>

        <DataTable plain className="md-cell--9 md-paper md-paper--1" style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Specifications</TableColumn>
                    <TableColumn>Created at</TableColumn>
                    <TableColumn>Edit</TableColumn>
                    <TableColumn>Remove</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((request, i) => <SenMyRequestsListRow
                    user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined} key={i}
                    request={request} onDelete={(id) => onDelete(id)}/>)}

            </TableBody>
        </DataTable>
    </SeniorPage>
);

