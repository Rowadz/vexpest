import React, { useState } from 'react'
import * as moment from 'moment'
import { Table } from 'rsuite'
import { formatNumber } from '../../functions/chartBuilders.functions'
const { Column, HeaderCell, Cell, Pagination } = Table

// TODO maybe add it ??
export default function RepoTable2({ data }) {
  const [state, setState] = useState({
    data: mapper(data),
    page: 1,
    displayLength: 30,
  })
  const handleChangePage = (dataKey) => {
    console.log({ dataKey, displayLength: state.displayLength })
    setState({
      page: dataKey,
      data: mapper(data).slice(dataKey, state.displayLength),
    })
    console.log(state)
  }

  const handleChangeLength = (dataKey) => {
    console.log(dataKey)
    setState({
      page: 1,
      displayLength: dataKey,
      data: mapper(data).slice(0, dataKey),
    })
  }

  const [toGetKeys] = mapper(data.slice(0, 1))
  console.log(toGetKeys)
  const cols = Object.keys(toGetKeys).map((key) => (
    <Column
      align={isNaN(+state.data[0][key]) ? 'center' : 'right'}
      fixed={key === 'name' ? true : null}
      key={key}
      resizable
    >
      <HeaderCell align="center" className="karya-table-row">
        {key
          .split('_')
          .map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
          .join(' ')}
      </HeaderCell>
      <Cell dataKey={key} />
    </Column>
  ))
  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h6>Repos Table</h6>
      </div>
      <Table
        virtualized
        height={500}
        data={state.data}
        wordWrap
        rowClassName={'karya-table-row'}
      >
        {cols}
      </Table>
      <Pagination
        lengthMenu={[
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
        ]}
        activePage={state.page}
        displayLength={state.displayLength}
        total={state.data.length}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLength}
      />
    </section>
  )
}

const mapper = (data) =>
  data.map(
    ({
      name,
      stargazers_count,
      forks,
      watchers_count,
      open_issues,
      created_at,
      updated_at,
      default_branch,
      language,
      has_issues,
      has_downloads,
      has_wiki,
      has_pages,
      license,
    }) => ({
      name,
      forks: formatNumber(forks),
      stargazers_count: formatNumber(stargazers_count),
      watchers_count: formatNumber(watchers_count),
      open_issues: formatNumber(open_issues),
      created_at: moment(new Date(created_at)).format('ll'),
      updated_at: moment(new Date(updated_at)).format('ll'),
      default_branch: noData(default_branch),
      language: noData(language),
      has_issues: noData(has_issues),
      has_downloads: noData(has_downloads),
      has_wiki: noData(has_wiki),
      has_pages: noData(has_pages),
      license: noData(license, 'spdx_id'),
    })
  )

const noData = (data, key) =>
  data ? `${key ? data[key].toString() : data}` : 'no data'
