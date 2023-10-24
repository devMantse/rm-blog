/** @type {import('tailwindcss').Config} */

const primary = '#3874ff'// This is theme primary color please change your primary color here.
const green = '#00be82'
const red = '#ff3c78'
const yellow = '#ffc728'
const orange = '#fe7831'
const pink = '#ff1087'
const blue = '#335aff'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: false,
  darkMode: 'class',
  theme: {
        screens: {
            xs: "540px", sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1320px',
        }, fontFamily: {
            'spectral': ['"Spectral", sans-serif'],
            'sans': ['"Roboto", sans-serif'],
        }, container: {
            center: true, padding: {
                DEFAULT: '1rem', sm: '1rem', lg: '1rem', xl: '1rem', '2xl': '1rem',
            },
        }, extend: {
            screens: {
                lg_992: '992px',
            }, colors: {
                transparent: 'transparent',
                current: 'current',
                'green': '#03d87f',
                'dark': '#3c4858',
                'black': '#161c2d',
                'dark-footer': '#161c28',
                'dark-sidebar': '#111827',

                primary: {
                    50: '#eef5ff',
                    100: '#d9e7ff',
                    200: '#bcd6ff',
                    300: '#8ebcff',
                    400: '#5997ff',
                    500: primary,
                    'DEFAULT': primary,
                    600: '#1b4ef5',
                    700: '#143ae1',
                    800: '#1730b6',
                    900: '#192e8f',
                },
                green: {
                    50: '#f2fcf9',
                    100: '#e6f9f3',
                    200: '#bfefe0',
                    300: '#99e5cd',
                    400: '#4dd2a8',
                    500: green,
                    'DEFAULT': green,
                    600: '#00ab75',
                    700: '#008f62',
                    800: '#02824c',
                    900: '#005d40',
                },
                red: {
                    50: '#fff5f8',
                    100: '#ffecf2',
                    200: '#ffcedd',
                    300: '#ffb1c9',
                    400: '#ff77a1',
                    500: red,
                    'DEFAULT': red,
                    600: '#e6366c',
                    700: '#bf2d5a',
                    800: '#992448',
                    900: '#7d1d3b',
                },
                yellow: {
                    50: '#fffcf4',
                    100: '#fff9ea',
                    200: '#fff1c9',
                    300: '#ffe9a9',
                    400: '#ffd869',
                    500: yellow,
                    'DEFAULT': yellow,
                    600: '#e6b324',
                    700: '#bf951e',
                    800: '#997718',
                    900: '#7d6214',
                },
                orange: {
                    50: '#fff8f5',
                    100: '#fff2ea',
                    200: '#ffddcc',
                    300: '#ffc9ad',
                    400: '#fea16f',
                    500: orange,
                    'DEFAULT': orange,
                    600: '#e56c2c',
                    700: '#bf5a25',
                    800: '#98481d',
                    900: '#7c3b18',
                },
                pink: {
                    50: '#FFE5F2',
                    100: '#FFD1E8',
                    200: '#FF9ECF',
                    300: '#FF70B8',
                    400: '#FF3D9E',
                    500: pink,
                    'DEFAULT': pink,
                    600: '#D6006B',
                    700: '#A30052',
                    800: '#6B0036',
                    900: '#38001C',
                },
                blue: {
                    50: '#f5f7ff',
                    100: '#ebefff',
                    200: '#ccd6ff',
                    300: '#adbdff',
                    400: '#708cff',
                    500: blue,
                    'DEFAULT': blue,
                    600: '#2e51e6',
                    700: '#2644bf',
                    800: '#1f3699',
                    900: '#192c7d',
                },
            }, backgroundPosition: {
                'mark-p': '0 80%',
            },

            boxShadow: {
                sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
                DEFAULT: '0 10px 20px 0 rgb(232 232 232 / 0.15)',
                md: '0 5px 13px rgb(60 72 88 / 0.20)',
                lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
                xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
            }, backgroundSize: {
                'mark-size': '100% 0.3em',
            },

            fontSize: {
                xs: ['0.75rem', {lineHeight: '1rem'}],
                sm: ['0.8125rem', {lineHeight: '1.25rem'}],
                base: ['0.875rem', {lineHeight: '1.5rem'}],
                lg: ['1rem', {lineHeight: '1.6rem'}],
                xl: ['1.25rem', {lineHeight: '1.75rem'}],
                xxl: ['1.35rem', {lineHeight: '1.75rem'}],
                '2xl': ['1.375rem', {lineHeight: '2rem'}],
                '3xl': ['1.5rem', {lineHeight: '2.25rem'}],
                '4xxl': ['2.5rem', {
                    lineHeight: '2.25rem'
                }],
            }, height: {
                content: 'fit-content',
                '4.5': '18px',
                '17': '4.1rem',
                '88': '22rem',
                '112': '28rem',
                '120': '30rem',
                '128': '32rem',
                '136': '34rem',
                '144': '36rem', // '176': '44rem',
                // '180': '45rem',
                // '184': '46rem',
                '84%': '84%',

            }, width: {
                content: 'fit-content',
                '97%': '97%',
                '94%': '94%',
                '80%': '80%',
                '70%': '70%',
                '61': '15.3rem',
                '18': '78px',
                '68': '17rem',
            }, lineHeight: {
                'extra-loose': '2.5', '1': '.25rem', '11': '2.75', '12': '3rem', '16': '64px',
            }, maxHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '112': '28rem',
                '128': '32rem',
                '136': '34rem',
                '144': '36rem',
            }, minWidth: {
                '40': '10rem',
            }, maxWidth: {
                '80%': '80%', '85%': '85%', '90%': '90%', '95%': '95%',
            }, transitionDuration: {
                '0': '0ms', '2000': '2000ms', '5000': '5000ms',
            }, transitionDelay: {
                '0': '0ms', '2000': '2000ms', '3000': '3000ms',
            }, transitionProperty: {
                'height': 'height',
            }, keyframes: {
                DropDownSlide: {
                    '0%': {transform: 'translateY(15px)'}, '100%': {transform: 'translateY(0)'}
                }, collapsing: {
                    '0%': {transform: 'translateY(-5px)'}, '100%': {transform: 'translateY(5px)'}
                }, ModalSlide: {
                    '0%': {transform: 'translateY(-50px)'},
                    '100%': {transform: 'translateY(0)'}, // '100%': { transform: 'translateY(0)' }
                }
            }, animation: {
                DropDownSlide: 'DropDownSlide .2s ease-in',
                collapsing: 'collapsing .2s ease-in-out',
                ModalSlide: 'ModalSlide .3s ease-in-out',
            },

            spacing: {
                0.75: '0.1875rem', 3.25: '0.8125rem'
            },

            height: ({
                         theme
                     }) => ({
                '10.5': '2.625rem', '85': '21.25rem',
            }), width: ({
                            theme
                        }) => ({
                '10.5': '2.625rem',
            }),

            maxWidth: ({
                           theme, breakpoints
                       }) => ({
                '1200': '71.25rem', '992': '60rem', '768': '45rem',
            }),

            zIndex: {
                1: '1', 2: '2', 3: '3', 999: '999',
            },

        },
    },
  plugins: [],
}
