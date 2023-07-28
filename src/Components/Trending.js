import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

function Trending() {

    const { trending, loading } = useGlobal()
    const theme = useTheme()

    console.log(trending)

    const breakpointColumnsObj = {
        default: 4,
        1400: 3,
        977: 2,
        500: 1
    };

    return (
        <TrendingStyled theme={theme}>
            <h2>{trend}Trending</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >

                {
                    trending.map((giff) => {
                        return <GiffItem key={giff.id} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </TrendingStyled>
    )
}

const TrendingStyled = styled.article`
    padding: 2rem;
    background-color: ${(props) => props.theme.colorBg2};
    border-radius: 1rem;
    h2{
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colorWhite};
        display: flex;
        align-items: center;
        gap: 1rem;
        i{
            background: linear-gradient(to right, 
                ${(props) => props.theme.colorBlue2}, 
                ${(props) => props.theme.colorGreen2}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .my-masonry-grid {
        display: flex;
        justify-content: center; 
        margin-left: -20px; 
        width: auto;
      }
    
      .my-masonry-grid_column {
        padding-left: 20px;
        background-clip: padding-box;
      }
    
      .my-masonry-grid_column > div {
        margin-bottom: 15px;
      } 
    }
    .my-masonry-grid_column > div > div {
        height: 350px; 
    }
    
    @media screen and (max-width: 768px) {
        .my-masonry-grid {
          justify-content: flex-start; 
        }
        .my-masonry-grid_column {
          padding-left: 10px; 
        }
        .my-masonry-grid_column > div > div {
          height: auto;
        }
  }
    
`;

export default Trending