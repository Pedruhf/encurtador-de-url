export default {
  APP_URL: process.env.APP_URL || "http://localhost:4000",
  PORT: process.env.PORT || "4000",
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost/encurtador_de_url",
  SECRET_KEY: process.env.SECRET_KEY || "encurtador_de_url::secret",
};
