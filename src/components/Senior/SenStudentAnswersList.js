"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { SenStudentAnswersListRow } from './SenStudentAnswersListRow';
import UserService from "../../services/UserService";

const dataTableStyle = {
    'margin-bottom': '36px'
};

export const SenStudentAnswersList = ({stuOffers}) => (
        <DataTable plain style={dataTableStyle}>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Student Name</TableColumn>
                    <TableColumn>Message</TableColumn>
                    <TableColumn>Rating</TableColumn>
                    <TableColumn>Choose Student</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {stuOffers.map((stuOffer, i) => <SenStudentAnswersListRow user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined} key={i} stuOffer={stuOffer} />)}
            </TableBody>
        </DataTable>
);

