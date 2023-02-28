import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    box-sizing: border-box
  }
  main{
    display: flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    padding-top:120px;
    padding-left: 128px;
    padding-right: 48px;
    overflow: hidden;
  }
  body{
    background: linear-gradient(180deg, #515460 0%, #33353C 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  button{
    cursor: pointer;
  }
  a{
    color: ${({ theme }) => theme.Colors.Gray._600}
  }
  a:visited{
    color: ${({ theme }) => theme.Colors.Gray._1000}
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #515460 0%, #33353C 100%);
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.Colors.Gray._300};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.Colors.Gray._600};
  }
  `;
