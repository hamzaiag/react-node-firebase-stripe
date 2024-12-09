interface Config {
  baseUrl: string;
}
const checkConfig = (server: string): Config | {} => {
  let config: Config = { baseUrl: "" };

  switch (server) {
    case "production":
      config = {
        baseUrl: "",
      } as Config;
      break;

    case "local":
      config = {
        baseUrl: "http://localhost:8000",
      } as Config;
      break;

    default:
      break;
  }

  return config;
};

export const selectServer = "local";
export const config = checkConfig(selectServer) as Config;
