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
const cardstyle = {
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top':'20px',


};

export const SenMyRequestsList = ({data, onDelete}) => (
    <SeniorPage user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined}>
        <Card className="md-cell md-cell--9" style={cardstyle}>
            <CardContent>
                
            <CardMedia
                            className="cardMedia"
                            image="https://i.imgur.com/uhknjwu.jpg"
                            title="Smartphones"
                        />
            <Typography variant="h2" component="h4">
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

