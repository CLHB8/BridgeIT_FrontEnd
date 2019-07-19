"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TablePagination } from 'react-md';

import { TaskListRow } from './TaskListRow';


const dataTableStyle = {
  'margin-bottom': '36px'

};



export const TaskListMini = ({data, onDelete}) => (

        
    
        <DataTable plain style={dataTableStyle} className="md-cell--9 md-paper md-paper--1">
            <TableHeader >
                
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn >Request Name</TableColumn>
                    <TableColumn>Senior's Name 
                    {/* <select>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            </select> */}
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

