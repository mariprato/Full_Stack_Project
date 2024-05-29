import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import SubmissionForm from '../components/forms/submissionForm/SubmissionForm';
import Layout from "../components/layout/Layout";
import store from '../redux/store'; // Import your Redux store

const PetLostForm = () => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <SubmissionForm />
        </Layout>
      </Provider>
    </>
  );
};

export default PetLostForm;

