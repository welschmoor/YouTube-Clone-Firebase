

////////////////////////////////////////////////////////////
//  These are for LOAD dummies during data fetch
//  they are displayed instead of a real data/elements that are being loaded
//  to prevent the user intarface from breaking when data is still loading.
//  this does not work well, it's better to create dummies right inside the components


import styled from "styled-components"

export const DummyList = () => {
  return (
    <DummyWrapper>
      <ImgAndText>
        <DummyImg />
        <DummyText />
      </ImgAndText>
      <ImgAndText>
        <DummyImg />
      </ImgAndText>
    </DummyWrapper>
  )
}



const DummyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ImgAndText = styled.div`
  display: flex;
  gap: 20px;
`

const DummyImg = styled.div`
  min-width: 340px;
  max-width: 360px;
  display: block;
  cursor: pointer;
  background-color: ${p => p.theme.navCol};
  padding: 100px 70px;
`

const DummyText = styled.div`
  width: 220px;
  height: 10px;
  display: inline;
  cursor: pointer;
  background-color: ${p => p.theme.navCol};
  padding: 20px 70px;
`