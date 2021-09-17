import { useState, useEffect } from 'react';

{ /* Custom Hooks <- Podemos tener toda esta función dentro del contenerdor -> App
    pero lo extraimos y lo metimos dentro de un archivo nuevo useInitialState.js para
    tenerlo disponible y usarlo en otro componente */ }

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [], trends: [], originals: [],
  });
  { /*El primer elemento guarda el estado actual - el segundo elemento actualiza el estado*/ }
  { /* Esos dos los traigo de la Función useState.
           useState recibe propiedades para inicializar el Estado -> []*/ }
  useEffect(() => {
    { /*UseEfect en este caso le asignamos la Fake API
          y trae la información y luego se la pasa a setVideos*/ }
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
    { /*La respuesta -> (response) que traiga de la API -> (fetch) se va transformar en un elemento
            que pueda utilizar en la aplicación -> (response).json())*/ }
    { /*Luego le digo que a mi información que ya tengo -> (data)
          se la pase a mi elemento -> (setVideos) y se transmite la información como parametro
          setVideos(data))*/ }
  }, []);
  { /* useEfect recibe otra propiedad, en este caso no le pasamos nada y solo le asignamos un arreglo vacío[]
      ES IMPORTANTE PORQUE PASARLE EL ARREGLO VACÍO PORQUE SINO SE CREA UN LOOP INFINITO.*/ }
  return videos;
};
export default useInitialState;
