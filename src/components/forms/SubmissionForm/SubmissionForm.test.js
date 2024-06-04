import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SubmissionForm from './SubmissionForm';
import { submitForm, setImage, verifyImage } from '../../../redux/reducers/submissionFormReducer';

const mockStore = configureStore([]);

describe('SubmissionForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      submissionForm: {
        formData: {
          name: '',
          email: '',
          petName: '',
          dateLost: '',
          locationLost: '',
          additionalDetails: '',
          image: null,
          imagePreview: null,
        },
      },
      imageVerification: {
        imageVerified: false,
        errorMessage: '',
      },
      location: {
        location: '',
        error: null,
      },
    });

    store.dispatch = jest.fn();

    // Mock window.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    // Clean up mocks
    jest.restoreAllMocks();
  });

  test('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <SubmissionForm />
      </Provider>
    );

    expect(screen.getByText('Post Your Lost Pet')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Pet's Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date Lost")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Location Lost")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Additional Details")).toBeInTheDocument();
  });

  test('handles form input changes', () => {
    render(
      <Provider store={store}>
        <SubmissionForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: 'Jane Smith' } });
    expect(store.dispatch).toHaveBeenCalledWith(submitForm(expect.objectContaining({ name: 'Jane Smith' })));

    fireEvent.change(screen.getByPlaceholderText("Your Email Address"), { target: { value: 'jane@cfg.com' } });
    expect(store.dispatch).toHaveBeenCalledWith(submitForm(expect.objectContaining({ email: 'jane@cfg.com' })));
  });

  test('shows error message if fields are empty on submit', () => {
    render(
      <Provider store={store}>
        <SubmissionForm />
      </Provider>
    );

    fireEvent.submit(screen.getByRole('button', { name: /Submit/i }));

    expect(window.alert).toHaveBeenCalledWith('Please fill in all fields, including uploading a photo.');
  });

});
