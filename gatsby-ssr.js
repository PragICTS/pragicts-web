const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <script src="./src/scripts/jquery.min.js"></script>
    ])
}
