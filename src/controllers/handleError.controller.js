export const httpError = (res, err) => {
  console.error(err);
  res.status(500).send({ error: "Error en la aplicación", err });
};
