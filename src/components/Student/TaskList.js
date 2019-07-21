"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TablePagination } from 'react-md';

import { TaskListRow } from './TaskListRow';
import StudentPage from './StudentPage'
import CatSideBar from '../CatSideBar';
import UserService from "../../services/UserService";
import { Card, CardContent, Typography } from '@material-ui/core';


const dataTableStyle = {
  'margin-top': '20px',
};


export const TaskList = ({data, onDelete}) => (
    <StudentPage user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined}>
        <div className="gridContainer">
        
        <CatSideBar ad="3" className="catSideBar"/>
        <div className="taskList">
        
        <Card>
        <CardContent>
                            <Typography gutterBottom variant="h4">
                                Here are all the recent task requests posted by the seniors.
                            </Typography>
        </CardContent>
        <DataTable plain responsive style={dataTableStyle} className="md-cell--12">
            <TableHeader>
                
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Senior's name:
                    </TableColumn>
                    <TableColumn>
                        {/* Sort By: 
                        <select>
                            <option value="Date">Date</option>
                            <option value="Location">Location</option>
                            </select>    */}
                    </TableColumn>
                    <TableColumn></TableColumn>
                    <TableColumn></TableColumn>


                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((request, i) => <TaskListRow user={UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined} key={i} request={request} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
            {/* <TablePagination rowsPerPageLabel ="Items Per Page" /> */}
        </DataTable>
        </Card>
        </div>
        </div>
    </StudentPage>
);

