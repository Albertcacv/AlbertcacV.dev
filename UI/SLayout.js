import styled from 'styled-components'

export const SLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.6fr 2.2fr;
  grid-template-rows: 80px 2.7fr;
  gap: 0px 0px;
  grid-template-areas:
    'header header .'
    'profile content .';
  /* background-image: url('background-wallpaper.jpg'); */
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`
