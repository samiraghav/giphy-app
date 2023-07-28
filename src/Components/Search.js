import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'

const list = <i className="fa-solid fa-list"></i>

function Search() {

    const {searchResults, loading} = useGlobal()
    const theme = useTheme()
    console.log(searchResults)

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <SearchStyled theme={theme}>
            <h2>{list}Search Results</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    searchResults.map((giff) => {
                        return <GiffItem key={giff.id} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </SearchStyled>
    )
}

const SearchStyled = styled.article`
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

    .my-masonry-grid_column > 
        margin-bottom: 15px;
    }
    @media screen and (max-width: 768px) {
        .my-masonry-grid {
          justify-content: flex-start; 
        }
      }
`;

export default Search