import axios from "axios";

export const obtenerImagenes = async () => {
  const { data } = await axios.get(
    "https://totem.ivaras.cl:7002/api/imagenes/"
  );
  // console.log(data)
  const respuesta = data;
  return respuesta;
};

export const cambiarEstado = async (id, active) => {
  const activeAc = !active;

  const respuesta = await axios.put(
    `https://totem.ivaras.cl:7002/api/imagenes/image/${id}/update`,
    { active: activeAc }
  );
  // console.log(respuesta.data.form)
};

export const actualizarTodo = async (id, formData) => {
  const respuesta = await axios({
    method: "put",
    url:  `https://totem.ivaras.cl:7002/api/imagenes/image/${id}/update`,
    data: formData,
    headers: {'Content-Type': 'multipart/form-data' }
  });
};
