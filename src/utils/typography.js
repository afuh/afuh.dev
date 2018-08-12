import Typography from "typography"

const family = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif']

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700', '400', '200']
    }
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  headerFontFamily: ['Montserrat', ...family],
  bodyFontFamily: family,
  headerColor: '#fff',
  bodyColor: '#fff',
  bodyWeight: '400'
})

export default typography
