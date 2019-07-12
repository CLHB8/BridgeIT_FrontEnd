"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TablePagination } from 'react-md';

import { TaskListRow } from './TaskListRow';
import StudentPage from './StudentPage'
import CatSideBar from './CatSideBar';


const dataTableStyle = {
  'margin-bottom': '36px'
};


export const TaskList = ({data, onDelete}) => (
    <StudentPage>
        <div className="gridContainer">
        <CatSideBar ad="3" className="catSideBar"/>
        <DataTable plain style={dataTableStyle} className="taskList">
            <TableHeader>
                
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Items Per Page: 
                    <select>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            </select>
                    </TableColumn>
                    <TableColumn>Sort By: 
                        <select>
                            <option value="Date">Date</option>
                            <option value="Location">Location</option>
                            </select>   
                    </TableColumn>
                    <TableColumn></TableColumn>
                    <TableColumn></TableColumn>


                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie, i) => <TaskListRow key={i} movie={movie} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
            <TablePagination rowsPerPageLabel ="Items Per Page" />
        </DataTable>
        </div>
    </StudentPage>
);

