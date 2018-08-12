import Typography from "typography"

const family = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif']

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  headerFontFamily: family,
  bodyFontFamily: family,
  bodyWeight: '400'
})

export default typography
