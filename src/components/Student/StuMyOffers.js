"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { StuMyOffersRow } from './StuMyOffersRow';
import StudentPage from './StudentPage';
import UserService from "../../services/UserService";
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const dataTableStyle = {
    // 'margin-top': '20px',
};
const cardstyle = {
    'margin-left': 'auto',
    'margin-right': 'auto',
    marginTop: 15,
};

export const StuMyOffers = ({data, user, onDelete}) => (
    <StudentPage user={user}>
        <Card className="md-cell--10" style={cardstyle}>

        <CardMedia
                            className="cardMedia"
                            image="https://www.progrss.com/wp-content/uploads/2016/11/senior-student-housing-nyu-1280x600.jpg"
                            title="Smartphones"
                        />
        <CardContent>
        <Typography variant="h3">

            Here you can find all the ongoing offers you have sent so far.

            </Typography>
        </CardContent>

        <CardContent>
        <DataTable plain style={dataTableStyle} >
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Senior's Username</TableColumn>
                    <TableColumn>Your Message</TableColumn>
                    <TableColumn>Wage per hour</TableColumn>
                    <TableColumn>Created on</TableColumn>
                    <TableColumn>Withdraw offer</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((stuOffer, i) => <StuMyOffersRow user={user} key={i} stuOffer={stuOffer} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
        </CardContent>
        </Card>
    </StudentPage>
);

