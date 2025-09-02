import React from 'react';
import DSTable from '../components/Table'
import PropTypes from 'prop-types';

export const QDSTable = ({
    hasDarkHeader = false,
    isData = false,
    tableHeadData,
    tableCellData,
}) => {
    return (
        <DSTable
            hasDarkHeader={hasDarkHeader}
            isData={isData}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

QDSTable.propTypes = {
    hasDarkHeader: PropTypes.bool,
    isData: PropTypes.bool,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired
};