
const Technologies = () => {
  return (
    <section>
      <div className="text-center bg-gradient-to-b from-blue-50 to-violet-300">

        <h2 className="text-center text-3xl font-bold text-gray-800">Stack de tecnologías usadas</h2>

        <div className="flex flex-wrap justify-center">

          {/* MONGO */}
          <div className="m-10 sm:m-32">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
              className="mb-4 w-32 mx-auto transition rounded-full ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-[#4FAA41]">
              <circle cx={64} cy={64} r={11.4} />
              <a href="https://www.mongodb.com/docs/" target="_blank">
                <path
                  d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"
                />
              </a>
            </svg>
            <h5 className="text-xl font-medium leading-tight mb-2">Mongo</h5>
            <p className="text-gray-500">SGBD NoSQL opensource <br /> orientado a documentos</p>
          </div>

          {/* EXPRESS */}
          <div className="m-10 sm:m-32">
            <a href="http://expressjs.com/" target="_blank">
              <svg
                className=" sm:my-14 w-32 mx-auto transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-stone-500"
                viewBox="0 0 512 149"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332H3.333zm140.455-82.307l-29.49 38.821-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82 32.323 41.82h4.165l-34.322-44.319 31.323-41.32h-3.998zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744 5.887 4.72 13.384 7.081 22.492 7.081 5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329 1.61-5.442 2.416-11.163 2.416-17.16 0-6.443-.834-12.386-2.5-17.828-1.666-5.443-4.082-10.164-7.247-14.162-3.166-3.999-6.998-7.11-11.497-9.33-4.498-2.222-9.58-3.333-15.245-3.333-4.332 0-8.358.639-12.079 1.916-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 00-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963h3.332zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746-6.331-7.164-9.497-17.467-9.497-30.907 0-5.554.778-10.83 2.333-15.828 1.555-4.998 3.804-9.386 6.747-13.162 2.944-3.777 6.582-6.776 10.913-8.997 4.332-2.222 9.22-3.333 14.662-3.333 5.554 0 10.414 1.111 14.579 3.333 4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745 0 4.999-.638 9.97-1.916 14.912-1.277 4.943-3.249 9.386-5.915 13.33-2.665 3.942-6.08 7.163-10.246 9.663-4.166 2.499-9.192 3.748-15.079 3.748zm54.816 1.333V70.477c0-4.665.666-9.22 2-13.662 1.332-4.443 3.387-8.359 6.164-11.746 2.777-3.388 6.303-6.054 10.58-7.998 4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666-3.833 1.222-7.137 2.888-9.914 4.999-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 00-3.666 9.08h-.333v-21.16h-3.332v85.64h3.332zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994-1.388-5.443-3.61-10.275-6.664-14.495-3.055-4.221-6.998-7.609-11.83-10.164-4.832-2.555-10.58-3.832-17.244-3.832-4.777 0-9.442 1-13.996 3-4.554 1.999-8.553 4.914-11.996 8.746-3.443 3.832-6.22 8.525-8.33 14.08-2.11 5.553-3.166 11.884-3.166 18.993 0 6.331.722 12.246 2.166 17.744 1.444 5.498 3.665 10.275 6.664 14.329 3 4.054 6.86 7.192 11.58 9.413 4.72 2.222 10.413 3.277 17.078 3.166 9.774 0 17.994-2.75 24.658-8.247 6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243-5.943 4.721-13.412 7.081-22.41 7.081-6.109 0-11.274-1.055-15.495-3.165-4.22-2.11-7.664-4.999-10.33-8.664-2.665-3.666-4.637-7.97-5.914-12.913-1.278-4.942-1.972-10.302-2.083-16.078zm68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161 1.889-4.777 4.36-8.859 7.415-12.246 3.054-3.388 6.609-5.97 10.663-7.748 4.054-1.777 8.414-2.666 13.079-2.666 5.554 0 10.44 1.028 14.662 3.083 4.22 2.055 7.747 4.86 10.58 8.414 2.832 3.554 4.97 7.692 6.414 12.412 1.444 4.721 2.166 9.692 2.166 14.912zm72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827-5.555-4.332-13.108-6.498-22.66-6.498-5.332 0-9.83.667-13.496 2-3.665 1.332-6.664 3.054-8.997 5.164-2.332 2.11-3.998 4.443-4.998 6.998-1 2.555-1.5 4.999-1.5 7.331 0 4.665.833 8.386 2.5 11.163 1.666 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.331 3 3.11.888 6.72 1.832 10.83 2.831 3.665.89 7.275 1.778 10.83 2.666 3.554.889 6.692 2.083 9.413 3.582 2.722 1.5 4.943 3.416 6.665 5.749 1.721 2.332 2.582 5.387 2.582 9.163 0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 01-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498-3.277.722-6.47 1.083-9.58 1.083-10.108 0-17.856-2.249-23.243-6.747-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66 5.832 4.998 14.468 7.497 25.909 7.497 3.665 0 7.358-.417 11.08-1.25 3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 007.164-7.33c1.833-3 2.75-6.665 2.75-10.997 0-4.11-.806-7.442-2.416-9.997-1.611-2.554-3.721-4.665-6.332-6.331-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 00-9.914-2.75 1726.675 1726.675 0 00-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166-2.888-1.222-5.193-2.971-6.915-5.248-1.722-2.277-2.582-5.526-2.582-9.747 0-.777.222-2.166.666-4.165.444-2 1.5-4.027 3.166-6.082 1.666-2.054 4.22-3.887 7.664-5.498 3.443-1.61 8.164-2.416 14.162-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.304 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997zm77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827-5.554-4.332-13.107-6.498-22.66-6.498-5.331 0-9.83.667-13.495 2-3.666 1.332-6.665 3.054-8.997 5.164-2.333 2.11-3.999 4.443-4.999 6.998-1 2.555-1.499 4.999-1.499 7.331 0 4.665.833 8.386 2.5 11.163 1.665 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.33 3 3.11.888 6.72 1.832 10.83 2.831 3.666.89 7.276 1.778 10.83 2.666 3.555.889 6.692 2.083 9.414 3.582 2.721 1.5 4.943 3.416 6.664 5.749 1.722 2.332 2.583 5.387 2.583 9.163 0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 01-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498-3.276.722-6.47 1.083-9.58 1.083-10.108 0-17.855-2.249-23.242-6.747-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66 5.831 4.998 14.467 7.497 25.908 7.497 3.666 0 7.359-.417 11.08-1.25 3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 007.164-7.33c1.833-3 2.749-6.665 2.749-10.997 0-4.11-.805-7.442-2.416-9.997-1.61-2.554-3.72-4.665-6.331-6.331-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 00-9.914-2.75 1726.65 1726.65 0 00-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166-2.888-1.222-5.193-2.971-6.914-5.248-1.722-2.277-2.583-5.526-2.583-9.747 0-.777.222-2.166.667-4.165.444-2 1.5-4.027 3.165-6.082 1.666-2.054 4.221-3.887 7.664-5.498 3.444-1.61 8.164-2.416 14.163-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.303 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997z"
                />
              </svg>
            </a>
            <h5 className="text-xl font-medium leading-tight mb-2">Express</h5>
            <p className="text-gray-500">Framework de Node para <br /> Web Infrastructure y API's  </p>
          </div>

          {/* REACT */}
          <div className="m-10 sm:m-32">
            <a href="https://es.reactjs.org/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
                className="rounded-full w-32 mb-4 mx-auto transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-[#61DBFB]">
                <circle cx={64} cy={64} r={11.4} />
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
              </svg>
            </a>
            <h5 className="text-xl font-medium leading-tight mb-2">React</h5>
            <p className="text-gray-500">Una librería de JavaScript <br /> orientada a componentes</p>
          </div>

          {/* NODE */}
          <div className="m-10 sm:m-32">
            <a href="https://nodejs.org/es/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
                className="rounded-full w-32 mb-4 mx-auto transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-[#83CD29]">
                <path
                  d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
              </svg>
            </a>
            <h5 className="text-xl font-medium leading-tight mb-2">Node</h5>
            <p className="text-gray-500">Un entorno de ejecución de JavaScript <br /> asíncrono del lado del servidor</p>
          </div>


          {/* TAILWIND */}
          <div className="m-10 sm:m-32">
            <a href="https://tailwindcss.com/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"
                className="mb-4 sm:mb-16 w-32 mx-auto transition rounded-full ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-[url(#a)]"
              >
                <g>
                  <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                    <stop offset={0} stopColor="#2298bd" />
                    <stop offset={1} stopColor="#0ed7b5" />
                  </linearGradient>
                  <path
                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                  />
                </g>
              </svg>
            </a>
            <h5 className="text-xl font-medium leading-tight mb-2">Tailwind</h5>
            <p className="text-gray-500">Un framework de CSS <br /> altamente personalizable</p>
          </div>
          
          {/* VITE */}
          <div className="m-10 sm:m-32">
            <a href="https://vitejs.dev/" target="_blank">
              <svg
                className="mb-4 sm:mb-8 w-28 mx-auto transition rounded-full ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110 hover:fill-[url(#b)]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1.871 -0.4069999999999627 259.721 257.849">
                <linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0" stopColor="#41d1ff" />
                  <stop offset="1" stopColor="#bd34fe" />
                </linearGradient>
                <linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
                  <stop offset="0" stopColor="#ffea83" />
                  <stop offset=".083" stopColor="#ffdd35" />
                  <stop offset="1" stopColor="#ffa800" />
                </linearGradient>
                <path d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z" /><path className="hover:fill-[url(#a)]" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z" />
              </svg>
            </a>
            <h5 className="text-xl font-medium leading-tight mb-2">Vite</h5>
            <p className="text-gray-500">Entorno de desarrollo Frontend de <br /> siguiente generación</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Technologies