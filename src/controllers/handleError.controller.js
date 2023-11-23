export const httpError = (res, err) => {
  console.error(err);
  res.status(500).json({ msg: `Error en la aplicación` });
};
