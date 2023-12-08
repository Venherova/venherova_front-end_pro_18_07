import { useFormik } from 'formik';
import { Fragment } from 'react';
import { string, object, StringSchema } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactAdded } from '../../store/contactsSlice';
import './AddContact.scss';

type FormValidationSchema = {
  name: StringSchema<string | undefined>;
  username: StringSchema<string | undefined>;
  phone: StringSchema<string | undefined>;
};

interface FormElementConfig {
  defaultValue: string;
  inputType: string;
  labelText: string;
  vSchema: StringSchema<string>;
}

const formElementsConfiguration: Record<string, FormElementConfig> = {
  name: {
    defaultValue: '',
    inputType: 'text',
    labelText: 'Name: ',
    vSchema: string().required(),
  },
  username: {
    defaultValue: '',
    inputType: 'text',
    labelText: 'User Name: ',
    vSchema: string().required(),
  },
  phone: {
    defaultValue: '',
    inputType: 'text',
    labelText: 'Phone: ',
    vSchema: string()
      .matches(/^\d{10}$/, 'Телефонний номер повинен містити 10 цифр')
      .required(),
      
  },
}

interface InitialValues {
  [key: string]: string;
}

function getInitialValues(): InitialValues {
  let initialValues: InitialValues = {};
  for (let key in formElementsConfiguration) {
    initialValues[key] = formElementsConfiguration[key].defaultValue;
  }
  return initialValues;
}


function getValidationSchema() {
  let objWithSchemas: Partial<FormValidationSchema> = {};
  for (let key in formElementsConfiguration) {
    objWithSchemas[key as keyof FormValidationSchema] = formElementsConfiguration[key].vSchema;
  }
  return object(objWithSchemas as FormValidationSchema);
}

export default function AddContact(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      const newContact = {
        ...values,
        id: Date.now(),
      };
      dispatch(contactAdded(newContact));
      navigate('/');
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    navigate('/');
  };

  const generateFormElements = () => {
    return (
      <>
        {Object.keys(formElementsConfiguration).map((key) => {
          const { labelText, inputType } = formElementsConfiguration[key];
          return (
            <Fragment key={key}>
              <div>
                <label htmlFor={key}>{labelText}</label>
                <input
                  className='input-field'
                  type={inputType}
                  name={key}
                  value={formik.values[key]}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors[key] && <div className='error'>{formik.errors[key]}</div>}
            </Fragment>
          );
        })}
        <div>
          <input type='submit' className='submit-button' value='Save' />
          <input type='button' className='cancel-button' onClick={handleCancel} value='Cancel'/>
        </div>
      </>
    );
  };

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        {generateFormElements()}
      </form>
    </div>
  );
}