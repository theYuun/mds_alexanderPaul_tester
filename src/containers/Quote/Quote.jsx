import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import './Quote.css';

export function ToggleQuote()
{
  document.getElementById('quote__root').classList.toggle('quote__show');
  document.getElementById('quote__root').classList.toggle('quote__hide');
}

const initialValues = {
  name: "",
  surname: "",
  email: "",
  tel: "",
  message: "",
}

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!values.name)
    errors.name = 'Please enter your name'

  if(!values.email)
    errors.email = 'Please enter your Email address';
  else if (!regex.test(values.email))
    errors.email = 'Your Email address format is invalid';
  
  if(!values.message)
    errors.message = 'Please write your message';
  
  return errors;
};

const submitForm = (values) => {
  console.log(values);
}

const Quote = () => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty
          } = formik;
          return(
            <div id="quote__root" className="quote__root quote__hide">
              <form className='quote__form' onSubmit={handleSubmit}>
                <div className='quote__top'>
                  <h1 className='quote__form-heading'>{t('quote_start')}</h1>
                  <div className='quote__form-close' onClick={() => {
                    document.getElementById('quote__root').classList.toggle('quote__show');
                    document.getElementById('quote__root').classList.toggle('quote__hide');
                  }}>X</div>
                </div>
                <div className="quote__form-input-container quote__form-name">
                  <input
                    placeholder={t('quote_name')}
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    /*
                    onClick={() => {
                      document.getElementById('name').classList.remove('quote__input-error');
                      document.getElementById('name').setAttribute('placeholder', 'Your name here');
                    }}
                    */
                    className={"quote__form-input " + (errors.name && touched.name ? "quote__input-error" : null)}/* if errors.name has a value add the .quote__input-error className */
                  />
                </div>
                <div className="quote__form-input-container quote__form-surname">
                  <input
                    placeholder={t('quote_surname')}
                    type="text"
                    name="surname"
                    id="surname"
                    value={values.surname}
                    onChange={handleChange}
                    className="quote__form-input"
                  />
                </div>
                <div className="quote__form-input-container quote__form-email">
                  <input
                    placeholder={t('quote_email')}
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    /*
                    onClick={() => {
                      document.getElementById('email').classList.remove('quote__input-error');
                      document.getElementById('email').setAttribute('placeholder', 'Your email here')
                    }}
                    */
                    className={"quote__form-input " + (errors.email && touched.email ? "quote__input-error" : null)}
                  />
                </div>
                <div className="quote__form-input-container quote__form-tel">
                  <input
                    placeholder={t('quote_tel')}
                    type="text"
                    name="tel"
                    id="tel"
                    value={values.tel}
                    onChange={handleChange}
                    className="quote__form-input"
                  />
                </div>
                <div className="quote__form-input-container quote__form-message">
                  <input
                    placeholder={t('quote_message')}
                    type="textarea"
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    /*
                    onClick={() => {
                      let message = document.getElementById('message');
                      message.classList.remove('quote__input-error');
                      message.setAttribute('placeholder', 'Your message here')}}
                    */
                    className={"quote__form-input " + (errors.message && touched.message ? "quote__input-error" : null)}
                  />
                </div>
                <div className="quote__form-submit-container">
                  <button
                    type="submit"
                    className={'quote__form-submit ' + (dirty && isValid ? '' : 'quote__form-submit-disabled')}>{t('quote_submit')}</button>
                </div>
              </form>
            {/*
              <img className='reference' src={images.reference_quote} />
              <img className='reference' src={images.reference_quote_smaller} />
            */}
            </div>
          )
        }}
      </Formik>
  );
}

export default Quote
