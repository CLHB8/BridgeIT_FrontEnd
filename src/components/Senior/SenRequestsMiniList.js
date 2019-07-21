"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button} from 'react-md';

import {SenMyRequestsListRow} from './SenMyRequestsListRow';
import SeniorPage from './SeniorPage';
import {border} from '@material-ui/system';
import {SenMyAssignedRequestsListRow} from "./SenMyAssignedRequestsListRow";
import {SimpleLink} from "../SimpleLink";

const dataTableStyle = {
    'margin-bottom': '0px'

    // 'box-shadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19)'

};


export const SenRequestsMiniList = ({data, user, onDelete}) => (

    <DataTable plain className="md-cell--12 md-paper md-paper--1" style={dataTableStyle}>
        <TableHeader>
            <TableRow>
                <TableColumn></TableColumn>
                <TableColumn>Category</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Created</TableColumn>
                <TableColumn>Remove</TableColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableColumn/>
                <TableColumn/>
                <TableColumn><SimpleLink to={`/sen/add`}>Click here to add a new request</SimpleLink></TableColumn>
                <TableColumn/>
                <TableColumn/>
                <TableColumn/>
            </TableRow>
            {data.map((request, i) => {
                    if (!request.isAssigned) {
                        return (
                            <SenMyRequestsListRow key={i} request={request} user={user}
                                                  onDelete={(id) => onDelete(id)}/>
                        )
                    }
                }
            )
            }

        </TableBody>
    </DataTable>

);



