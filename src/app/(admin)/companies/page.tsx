import React from 'react'
import Header from '../../components/header'
import Toolbar from '../../components/toolbar'
import SearchInput from '../../components/search-input'
import AddCompanyButton from '../../components/add-button-company'
import CompanyTable from '../../components/company-table'
import CompanyRow from '../../components/company-row'
import { Status } from '../../components/status-abel'

function Page() {
  return (
    <>
    <Header>Companies</Header>
    <Toolbar
      action={<AddCompanyButton />}
    ><SearchInput /></Toolbar>

    <CompanyTable>
      <CompanyRow id={1} category="Category" company="Company" status={Status.ACTIVE} promotion={true} country="Country" joinedDate="Joined date" />
    </CompanyTable>
    </>
  )
}

export default Page