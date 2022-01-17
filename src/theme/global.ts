import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    body{

    scrollbar-width: thin;
    scrollbar-color: #B7B7B7 transparent;
    
    &::-webkit-scrollbar, & *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-track & *::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb {
      background-color: #B7B7B7;
      min-height: 24px;
      min-width: 24px;
    }

    }
}
`