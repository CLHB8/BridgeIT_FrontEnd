"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TablePagination } from 'react-md';

import { TaskListRow } from './TaskListRow';


const dataTableStyle = {
  'margin-bottom': '20px',

};



export const TaskListMini = ({data, onDelete}) => (

        
    
        <DataTable plain resposive style={dataTableStyle} className="md-cell--9 md-paper md-paper--1">
            <TableHeader >
                
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn >Request Name</TableColumn>
                    <TableColumn>Senior's Name 
                    
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
                {data.map((request, i) => <TaskListRow key={i} request={request} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
            {/* <TablePagination rowsPerPageLabel ="Items Per Page" /> */}
        </DataTable>
        
);

