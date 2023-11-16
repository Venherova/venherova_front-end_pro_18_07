import { useFormik } from 'formik';
import { Fragment } from 'react';
import { string, object } from 'yup';
import './AddContact.scss';

const formElementsConfiguration = {
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

function getInitialValues() {
  let initialValues = {};
  for (let key of Object.keys(formElementsConfiguration)) {
    initialValues[key] = formElementsConfiguration[key].defaultValue;
  }
  return initialValues;
}

function getValidationSchema() {
  let objWithSchemas = {};
  for (let key of Object.keys(formElementsConfiguration)) {
    objWithSchemas[key] = formElementsConfiguration[key].vSchema;
  }
  return object(objWithSchemas);
}

export default function AddContact({ onSaveContact, onCancel }) {
  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: (values) => onSaveContact(values),
  });

  const generateFormElements = () => {
    const formItems = [];
    for (let key of Object.keys(formElementsConfiguration)) {
      const { labelText, inputType } = formElementsConfiguration[key];
      formItems.push((
        <Fragment key={key}>
          <div>
            <label htmlFor={key}>{labelText}</label>
            <input className='input-field' type={inputType} name={key} value={formik.values[key]} onChange={formik.handleChange} />
          </div>
          {formik.errors[key] && <div className='error'>{formik.errors[key]}</div>}
        </Fragment>
      ));
    }
    return (
      <>
        {formItems}
        <div>
          <input type='submit' className='submit-button' value='Save' />
          <input type='button' className='cancel-button' onClick={onCancel} value='Cancel'/>
        </div>
      </>
    )
  }

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        {generateFormElements()}
      </form>
    </div>
  )
}
