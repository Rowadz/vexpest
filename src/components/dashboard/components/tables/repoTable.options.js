const dateComparator = (date1, date2) => new Date(date1) - new Date(date2)
const formatedNumberComparator = (num1, num2) =>
  +num1.split(',').join('') - +num2.split(',').join('')

const columnDefs = [
  {
    headerName: 'Repository Name',
    field: 'name'
  },
  {
    headerName: 'Created At',
    field: 'created_at',
    comparator: dateComparator
  },
  {
    headerName: 'Updated At',
    field: 'updated_at',
    comparator: dateComparator
  },
  {
    headerName: 'Size',
    field: 'size'
  },
  {
    headerName: 'Stars Count',
    field: 'stargazers_count',
    comparator: formatedNumberComparator
  },
  {
    headerName: 'Watchers Count',
    field: 'watchers_count',
    comparator: formatedNumberComparator
  },
  {
    headerName: 'URL',
    field: 'html_url',
    sortable: false,
    cellRenderer: ({ value }) => {
      const urlAsArr = value.split('/')
      return `<a href="${value}" target="_blank" rel="noopener">${
        urlAsArr[urlAsArr.length - 1]
      }</a>`
    }
  },
  {
    headerName: 'Is Forked?',
    field: 'fork'
  },
  {
    headerName: 'Language',
    field: 'language'
  },
  {
    headerName: 'Description',
    field: 'description'
  },
  {
    headerName: 'Has Issues',
    field: 'has_issues'
  },
  {
    headerName: 'Forks Count',
    field: 'forks_count',
    comparator: formatedNumberComparator
  },
  {
    headerName: 'Open Issues Count',
    field: 'open_issues_count',
    comparator: formatedNumberComparator
  },
  {
    headerName: 'Watchers',
    field: 'watchers',
    comparator: formatedNumberComparator
  }
]

export { columnDefs }
