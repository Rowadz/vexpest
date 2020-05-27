import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'
import { columnDefs } from './repoTable.options'
import { formatNumber } from '../../functions/chartBuilders.functions'
import * as moment from 'moment'

export default function RepoTable({ data }) {
  const [state] = useState({
    columnDefs,
    rowData: mapper(data),
    defaultColDef: {
      width: 170,
      sortable: true,
      resizable: true,
      rowClassRules: {
        taksim: true,
      },
    },
    rowClassRules: {
      'dark-blue': ({ rowIndex }) => rowIndex % 2 === 0,
      'not-dark-blue': ({ rowIndex }) => rowIndex % 2 !== 0,
    },
  })
  return (
    <div
      className="ag-theme-alpine-dark"
      style={{
        height: '500px',
        width: '100%',
      }}
    >
      <AgGridReact
        columnDefs={state.columnDefs}
        rowData={state.rowData}
        defaultColDef={state.defaultColDef}
        rowClassRules={state.rowClassRules}
      ></AgGridReact>
    </div>
  )
}

const mapper = (data = []) =>
  data.map(
    ({
      created_at,
      watchers_count,
      stargazers_count,
      updated_at,
      size,
      forks_count,
      watchers,
      open_issues_count,
      ...reset
    }) => ({
      created_at: moment(new Date(created_at)).format('ll'),
      updated_at: moment(new Date(updated_at)).format('ll'),
      size: `${size / 1000} MB`,
      stargazers_count: formatNumber(stargazers_count),
      watchers_count: formatNumber(watchers_count),
      forks_count: formatNumber(forks_count),
      open_issues_count: formatNumber(open_issues_count),
      watchers: formatNumber(watchers),
      ...reset,
    })
  )
