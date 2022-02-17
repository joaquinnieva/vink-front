import { Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  EDIT_PROFILE,
  SAVE_PROFILE,
  USER_BG,
  USER_COLOR,
  USER_DESC,
  USER_LINK,
  USER_NAME,
  USER_PHOTO
} from '../../data/constants';
import { toBase64 } from '../../functions/fileToBlob';
import { prepareData } from '../../functions/prepareData';

const FormEdit = ({ data }) => {
  const [image, setImage] = useState('');
  const [background, setBackground] = useState('');
  return (
    <>
      <div className="col-span-2 h-full overflow-auto rounded">
        <Formik
          initialValues={{
            name: '',
            description: '',
            image: '',
            background: '',
            options: { color: '#18181b' },
            links: data.links,
          }}
          onSubmit={(values) => {
            console.log('form', { ...values, image, background });
            console.log('prepare', prepareData(values, image, background));
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <div className="rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/* Nombre */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {USER_NAME}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={handleChange}
                          value={values.name}
                          type="text"
                          className="text-gray-600 focus:ring-vink-800 focus:border-vink-800 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 p-1"
                          name="name"
                          id="name"
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
                      <input
                        onChange={handleChange}
                        value={values.description}
                        className="p-1 text-gray-600 shadow-sm focus:ring-vink-500 focus:border-vink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        type="textarea"
                        name="description"
                        autoComplete="off"
                        placeholder={data.description}
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
                        <FieldArray
                          name="links"
                          render={(arrayHelpers) => (
                            <div className="">
                              {values.links && values.links.length > 0 ? (
                                values.links.map((link, index) => (
                                  <div key={index} className="flex flex-row">
                                    <Field
                                      autoComplete="off"
                                      placeholder="Title"
                                      className="text-gray-600 focus:ring-vink-800 focus:border-vink-800 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 p-1"
                                      name={`links.${index}.title`}
                                    />
                                    <Field
                                      autoComplete="off"
                                      placeholder="http://example.com"
                                      className="text-gray-600 focus:ring-vink-800 focus:border-vink-800 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 p-1"
                                      name={`links.${index}.link`}
                                    />
                                    <button
                                      className="text-black p-4"
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                    >
                                      -
                                    </button>
                                    {index === values.links.length - 1 && (
                                      <button
                                        className="text-black p-4"
                                        type="button"
                                        onClick={() => arrayHelpers.insert(index + 1, '')} // insert an empty string at a position
                                      >
                                        +
                                      </button>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <button className="text-black p-4" type="button" onClick={() => arrayHelpers.push('')}>
                                  {/* show this when user has removed all friends from the list */}
                                  Add a Link
                                </button>
                              )}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Imagenes */}
                  <div className="flex gap-6 flex-wrap">
                    <div className="pr-10">
                      <label className="block text-sm font-medium text-gray-700">{USER_PHOTO}</label>
                      <div className="mt-1 flex items-center">
                        <span className="flex justify-center items-center h-12 w-12 rounded-full overflow-hidden bg-gray-500">
                          {image ? (
                            <img className="h-fit w-fit" src={image} alt="" />
                          ) : (
                            <img className="h-fit w-fit" src={data?.image} alt="" />
                          )}
                        </span>

                        <label className="cursor-pointer ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                          {EDIT_PROFILE}
                          <input
                            onChange={(event) => {
                              toBase64(event.currentTarget.files[0]).then((data) => setImage(data));
                            }}
                            value={values.image}
                            type="file"
                            className="hidden"
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                            name="image"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="pr-10">
                      <label className="block text-sm font-medium text-gray-700">{USER_BG}</label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded overflow-hidden bg-gray-100">
                          {background ? (
                            <img className="h-full w-full" src={background} alt="" />
                          ) : data.background ? (
                            <img className="h-full w-full" src={data?.background} alt="" />
                          ) : (
                            <img
                              className="h-full w-full"
                              src="https://asset.gecdesigns.com/img/backgrounds/modern-crystal-abstract-background-template-1612247149783-cover.webp"
                              alt=""
                            />
                          )}
                        </span>
                        <label className="cursor-pointer ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                          {EDIT_PROFILE}
                          <input
                            onChange={(event) => {
                              toBase64(event.currentTarget.files[0]).then((data) => setBackground(data));
                            }}
                            value={values.background}
                            type="file"
                            className="hidden"
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                            name="background"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="pr-10">
                      <label className="block text-sm font-medium text-gray-700">{USER_COLOR}</label>
                      <div className="mt-1 flex items-center">
                        <span
                          className="inline-block h-12 w-12 rounded border border-gray-400 overflow-hidden "
                          style={{ background: values.options.color }}
                        ></span>
                        <label
                          htmlFor="color"
                          className="cursor-pointer w-fit ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        >
                          {EDIT_PROFILE}
                        </label>
                        <input
                          onChange={handleChange}
                          value={values.options.color}
                          name={`options.color`}
                          id="color"
                          type="color"
                          className="invisible absolute top-1/2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boton Guardar */}
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
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
    </>
  );
};

export default FormEdit;
