"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TablePagination} from 'react-md';

import {TaskListRow} from './TaskListRow';
import StudentPage from './StudentPage'
import CatSideBar from '../CatSideBar';
import UserService from "../../services/UserService";
import { Card, CardContent, Typography } from '@material-ui/core';


const dataTableStyle = {
    'margin-top': '20px',
};


export const TaskList = ({data, user, onPremiumChange, onDelete}) => (
    <StudentPage user={user} onPremiumChange={() => onPremiumChange()}>
        <div className="gridContainer">
            <CatSideBar ad="3" className="catSideBar" user={user}/>
            <div className="taskList">
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            Here are all the recent task requests posted by the seniors.
                        </Typography>
                    </CardContent>
                <DataTable plain responsive style={dataTableStyle} className="md-cell--12 md-paper md-paper--1">
                    <TableHeader>

                        <TableRow>
                            <TableColumn></TableColumn>
                            <TableColumn>Category</TableColumn>
                            <TableColumn>Senior's name:</TableColumn>
                            <TableColumn>Senior's Rating</TableColumn>
                            <TableColumn>Send Offer</TableColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((request, i) => <TaskListRow
                            key={i} request={request} user={user} onDelete={(id) => onDelete(id)}/>)}
                    </TableBody>
                    {/* <TablePagination rowsPerPageLabel ="Items Per Page" /> */}
                </DataTable>
            </Card>
            </div>
        </div>
    </StudentPage>
);

