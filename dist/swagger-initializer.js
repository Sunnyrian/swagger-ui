window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    urls: [
      {
        url: "./qipumovieapi.json",
        name: "用户小程序api"
      },
      {
        url: "./qipumovieop.json",
        name: "管理后台api"
      },
      {
        url: "./qipusupplierapi.json",
        name: "供应商小程序api"
      },
      {
        url: "./xsmovieapi.json",
        name: "???api"
      },
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
