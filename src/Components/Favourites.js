import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

function Favourites({rendered}) {

    const {favourites, loading} = useGlobal()
    const theme = useTheme()

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <FavouritesStyled theme={theme}>
            <h2>{trend}Favourites</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                
                {
                    favourites.map((giff) => {
                        return <GiffItem key={giff.id} rendered={rendered} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </FavouritesStyled>
    )
}

const FavouritesStyled = styled.article`
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
        display: -webkit-box; 
        display: -ms-flexbox;
        display: flex;
        margin-left: -20px;
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 20px; 
        background-clip: padding-box;
    }

    .my-masonry-grid_column > div 
        margin-bottom: 15px;
    }
    @media screen and (max-width: 768px) {
        .my-masonry-grid {
            justify-content: flex-start; 
        }

        .my-masonry-grid_column {
            padding-left: 10px; 
        }
    }
`;

export default Favourites