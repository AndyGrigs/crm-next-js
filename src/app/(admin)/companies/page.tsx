import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { getCompanies } from '@/lib/companies';
import { Status } from '@/app/components/status-label';

export default function Page() {
  const companies = getCompanies();

  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          {companies.map((company) => (
            <CompanyRow
              key={company.id}
              id={company.id}
              category={company.category}
              company={company.name}
              status={company.status as Status}
              promotion={company.promotion}
              country={company.country}
              joinedDate={company.joinedDate}
            />
          ))}
        </CompanyTable>
      </main>
    </>
  );
}
