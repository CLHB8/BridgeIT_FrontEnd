"use strict";

import React from 'react';
import {DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, List, Subheader} from 'react-md';

import { SenTaskHistoryListItem } from './SenTaskHistoryListItem';

const dataTableStyle = {
    'margin-bottom': '36px',

    'box-shadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19)'
};

export const SenTaskHistoryList = ({data}) => (

    <List plain style={dataTableStyle}>
            {data.map((request, i) => <SenTaskHistoryListItem key={i} request={request} />)}
    </List>

);

