import axios from "axios";
import clienteAxios from "../axios";

export const obtenerImagenes = async () => {
  const { data } = await clienteAxios(
    "/imagenes/"
  );
  // console.log(data)
  const respuesta = data;
  return respuesta;
};

export const cambiarEstado = async (id, active) => {
  const activeAc = !active;

  const respuesta = await clienteAxios.put(
    `/imagenes/image/${id}/update`,
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

export const guardarTodo = async (formData) => {
  const respuesta = await axios({
    method: "post",
    url:  "https://totem.ivaras.cl:7002/api/imagenes/upload",
    data: formData,
    headers: {'Content-Type': 'multipart/form-data' }
  });
};
export const eliminarTodo = async (id) => {

  const respuesta = await clienteAxios.delete(
    `/imagenes/image/${id}/delete`
  );
  // console.log(respuesta.data.form)
};
