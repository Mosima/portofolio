
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

    if (typeof window !== `undefined`) {
      const module = require("module")
     
    }
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}