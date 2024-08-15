// libs
import { type FC, type ReactNode } from 'react';
// ui lib components
import { Alert, CircularProgress } from '@mui/material';
// components
import HomeFilter from 'components/layout/Home/Filter';
import HomeTable from 'components/layout/Home/Table';
// type
import type { PaginationType } from 'components/layout/Home/type';
// constants
import { API_ENDPOINT } from 'constants/apiEndpoint';
// config
import { initialPayload, initialValues } from 'components/layout/Home/config';
import type { DataType } from 'hooks/type';
// hooks
import { useFetch } from 'hooks/useFetch';
import { usePayload } from 'hooks/usePayload';

const Home:FC = () => {
  const {
    payload, setFilterHandler, setSortHandler, setPaginationHandler,
  } = usePayload(initialPayload);
  const { data, loading, error } = useFetch(API_ENDPOINT, payload);

  const renderDataTable = (): ReactNode => {
    if (loading) {
      return (
        <div className="loading-container">
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return (
        <div className="loading-container">
          <Alert severity="error">{error}</Alert>
        </div>
      );
    }

    return (
      <HomeTable
        data={data?.data as DataType[]}
        onPaginationChange={setPaginationHandler}
        pagination={data?.pagination as PaginationType}
        setSortHandler={setSortHandler}
        sortData={payload.sort}
      />
    );
  };

  return (
    <div className="wrapper">
      <HomeFilter initialValues={initialValues} onSubmit={setFilterHandler} />
      <div className="table-container">
        {
            renderDataTable()
        }
      </div>
    </div>
  );
};

export default Home;
