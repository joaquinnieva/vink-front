import { Form, Formik } from 'formik';
import React from 'react';
import {
  EDIT_PROFILE,
  SAMPLE_IMAGE,
  SAVE_PROFILE,
  USER_BG,
  USER_COLOR,
  USER_DESC,
  USER_LINK,
  USER_NAME,
  USER_PHOTO
} from '../../data/constants';

const FormEdit = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Formik
              initialValues={{ username: '', password: '' }}
              validate={(values) => {
                const errors = {};
                if (values.username.length < 3) {
                  errors.username = '¡Usuario debe contener al menos 3 caracteres!';
                } else if (values.password.length < 6) {
                  errors.password = '¡Contraseña debe contener al menos 6 caracteres!';
                }
                return errors;
              }}
              onSubmit={(values) => {
                loginButton(values);
              }}
            >
              {({}) => (
                <Form action="">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      {/* Nombre */}
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-3">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            {USER_NAME}
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="company-website"
                              id="name"
                              className="text-gray-600 focus:ring-vink-800 focus:border-vink-800 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 p-1"
                              placeholder={data.name}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Descripción */}
                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          {USER_DESC}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="p-1 text-gray-600 shadow-sm focus:ring-vink-500 focus:border-vink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Este es mi perfil"
                            defaultValue={data.description}
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      {/* Enlaces */}
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                          <label htmlFor="links" className="block text-sm font-medium text-gray-700">
                            {USER_LINK}
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="company-website"
                              id="links"
                              className="text-gray-600 focus:ring-vink-800 focus:border-vink-800 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 p-1"
                              placeholder="www.example.com"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Imagenes */}
                      <div className="flex gap-6 flex-wrap">
                        <div className="pr-10">
                          <label className="block text-sm font-medium text-gray-700">{USER_PHOTO}</label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              {data.image ? (
                                <img className="h-full w-full" src={data.image} alt="" />
                              ) : (
                                <img className="h-full w-full" src={SAMPLE_IMAGE} alt="" />
                              )}
                            </span>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            >
                              {EDIT_PROFILE}
                            </button>
                          </div>
                        </div>
                        <div className="pr-10">
                          <label className="block text-sm font-medium text-gray-700">{USER_BG}</label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded overflow-hidden bg-gray-100">
                              {data.background ? (
                                <img className="h-full w-full" src={data.background} alt="background" />
                              ) : (
                                <img
                                  className="h-full w-full"
                                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/backgrounds-design-template-93374da28d7249b9ec731d6607835253.jpg?ts=1595982785"
                                  alt="background"
                                />
                              )}
                            </span>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            >
                              {EDIT_PROFILE}
                            </button>
                          </div>
                        </div>
                        <div className="pr-10">
                          <label className="block text-sm font-medium text-gray-700">{USER_COLOR}</label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded border border-gray-400 overflow-hidden bg-gray-100"></span>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            >
                              {EDIT_PROFILE}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Boton Guardar */}
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      >
                        {SAVE_PROFILE}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEdit;
