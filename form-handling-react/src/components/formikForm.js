import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // Define initial values for the form
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
            />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
