import React from 'react';
import { QDSTable } from './Table';
import {
    basicCellData,
    basicHeadData,
    dataTableCell,
    dataTableHead
} from './data';

export default {
    title: 'Components/Table',
    component: QDSTable,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => {
    const tableCellData = args.isData ? dataTableCell : basicCellData;
    const tableHeadData = args.isData ? dataTableHead : basicHeadData;

    return (
        <QDSTable
            {...args}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

export const BasicTable = Template.bind({});
BasicTable.args = {};
BasicTable.parameters = {
    docs: {
        source: {
            language: 'html',
            type: 'code',
            code: `
<div class="ds-table">
    <table class="ds-table__table" aria-label="data table">
        <thead>
            <tr class="ds-table__table-tr">
                <th class="ds-table__table-th --flexed-content-col">
                    <div class="ds-row">
                        Feature
                        <span class="ds-icon--info ds-white ds-font-24" aria-label="info"></span>
                    </div>
                </th>
                <th class="ds-table__table-th">Basic</th>
                <th class="ds-table__table-th">Pro</th>
                <th class="ds-table__table-th">Premium</th>
            </tr>
        </thead>

        <tbody>
            <tr class="ds-table__table-tr">
                <td class="ds-table__table-td">100% benefit for covered laboratory services</td>
                <td class="ds-table__table-td></td>
                <td class="ds-table__table-td"></td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
            </tr>

            <tr class="ds-table__table-tr">
                <td class="ds-table__table-td">Limited out-of-pocket patient cost for covered laboratory services</td>
                <td class="ds-table__table-td"></td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
            </tr>

            <tr class="ds-table__table-tr">
                <td class="ds-table__table-td">Digital member card</td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
                <td class="ds-table__table-td --centered"><span class="ds-icon--check ds-green ds-font-24" aria-label="check"></span></td>
            </tr>
        </tbody>
    </table>
</div>
`
        }
    }
};

export const DataTable = Template.bind({});
DataTable.args = {
    isData: true
};
DataTable.parameters = {
    docs: {
        source: {
            language: 'html',
            type: 'code',
            code: `<div class="ds-data-table__container">
    <table class="ds-data-table --sortable">
        <thead>
            <tr class="ds-data-table__head">
                <th class="ds-data-table__head-th">Last Name</th>
                <th class="ds-data-table__head-th">First Name</th>
                <th class="ds-data-table__head-th">Status</th>
            </tr>
        </thead>

        <tbody>
            <tr class="ds-data-table__row">
                <td class="ds-data-table__row-td">
                    <span>Blake</span>
                </td>

                <td class="ds-data-table__row-td">
                    <span>Edward</span>
                </td>

                <td class="ds-data-table__row-td">
                    <div class="ds-badge --informative left-icon">
                        <span class="ds-icon--info ds-font-14" aria-label="informative"></span>
                        Informative
                    </div>
                </td>
            </tr>

            <tr class="ds-data-table__row">
                <td class="ds-data-table__row-td">
                    <span>Jupiter</span>
                </td>

                <td class="ds-data-table__row-td">
                    <span>Sally</span>
                </td>

                <td class="ds-data-table__row-td">
                    <div class="ds-badge --warning left-icon">
                        <span class="ds-icon--warning ds-font-14" aria-label="warning"></span>
                        Warning
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`
        }
    }
};
