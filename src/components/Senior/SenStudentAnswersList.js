"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { SenStudentAnswersListRow } from './SenStudentAnswersListRow';
import UserService from "../../services/UserService";

const dataTableStyle = {
    'margin-bottom': '36px',
    'border-left': '4px solid #0D47A1',
    'background-color': '#F5F5F5',
};

export const SenStudentAnswersList = ({stuOffers, onChoosenOneChange}) => (
        <DataTable plain style={dataTableStyle} className="md-cell md-cell--12">
            <TableHeader>
                <TableRow>
                    <TableColumn>Recommended</TableColumn>
                    <TableColumn>Wage</TableColumn>
                    <TableColumn>Student Name</TableColumn>
                    <TableColumn>Message</TableColumn>
                    <TableColumn>Rating</TableColumn>
                    <TableColumn>Choose</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {stuOffers.map((stuOffer, i) => <SenStudentAnswersListRow onChoosenOneChange={(anakin) => onChoosenOneChange(anakin)} user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined} key={i} stuOffer={stuOffer} />)}
            </TableBody>
        </DataTable>
);

