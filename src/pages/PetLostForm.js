import React from 'react';
import { Provider } from 'react-redux';
import SubmissionForm from '../components/forms/SubmissionForm/SubmissionForm';
import Layout from "../components/layout/layout/Layout.js";
import store from '../redux/store';

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
