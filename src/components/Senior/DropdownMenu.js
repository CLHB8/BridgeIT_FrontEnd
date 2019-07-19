import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const titleOptions = [
    {
        key: 'Smartphone Coaching',
        text: 'Smartphone Coaching',
        value: 'Smartphone Coaching',
    },
    {
        key: 'PC/Laptop Coaching',
        text: 'PC/Laptop Coaching',
        value: 'PC/Laptop Coaching',
    },
    {
        key: 'Printer Problems',
        text: 'Printer Problems',
        value: 'Printer Problems',
    },
    {
        key: 'Individual Task',
        text: 'Individual Task',
        value: 'Individual Task',
    },
]

const DropdownTitleSelection = () => (
    <Dropdown
        button
        className='icon'
        floating
        labeled
        icon='world'
        options={titleOptions}
        search
        text='Put in the Title'
    />
)

export default DropdownTitleSelection