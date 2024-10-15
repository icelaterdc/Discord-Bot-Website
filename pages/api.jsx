import React from 'react';

export default function ApiDocumentation() {
  return (
    <div className="w-full my-10">
      <div className="flex w-full justify-center">
        <img width="400" src="/img/api-doc-image.png" alt="API Documentation" />
      </div>
      <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
        <i className="fal fa-book text-blue-400 mr-2" />
        API Dokümantasyonu
      </h1>
      <div className="lg:max-w-screen-lg mt-10 mx-auto">
        <p className="text-white text-center">
          Burada API ile ilgili dokümantasyon bulabilirsiniz.
        </p>
      </div>
    </div>
  );
}
