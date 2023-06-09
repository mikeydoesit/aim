/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'med_blue': '#135cb0',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'black': '#1a1a1a',
      'mobile-gray': '#63666b',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-lighter': '#f5f5f5',
      'gray-border': '#dcdcdc',
      'gray-footer': '#333333',
      'gray-footer-secondary': '#b3b3b3',
      'gray-input-border': '#cccccc',
      'gray-input-label': '#4d4d4d',
      'primary_red': '#d11947',
      'primary_red_dark': '#a31438',
      'error_red': '#e03400',
      'white': '#ffffff',
      'off_white': '#f5f5f5'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
        'about_hero': "url('/images/about_hero.jpg')",
        'stories_hero': "url('/images/stories_hero.jpg')",
        'about_cofounder': "url('/images/cofounder.jpg')",
        'story_banner': "url('/images/podium.jpg')",
        'story_banner_2': "url('/images/cofounder_2.jpg')",
        'register_hero': "url('/images/register_bgd.jpg')"
      },
      fontFamily: {
        Open: ["Open Sans", "sans-serif"]
      },
      gridTemplateColumns: {
        'three_column': 'repeat(3, minmax(0, 1fr))',
        'text_image_left': '1fr 2fr',
        'text_image_right': '2fr 1fr',
        'mobile_radio_btn_selector': 'repeat(2, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        'three_row': 'repeat(3, 300px)',
        'three_row_mobile': 'repeat(3, 120px)'
      }
    },
  },
  plugins: []
}
