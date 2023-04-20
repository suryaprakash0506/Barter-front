import React from 'react'
import HeroCarousel from './HeroCarousel'
import "../css/Search.css"
const Search = () => {
    return (
        <div className="search-mainContainer">

            <div className="search-container">

                <div className="search-category">

                    <HeroCarousel />

                </div>

                <div className="hero-media" id="hero-media">
                    {/* <video muted="" loop="yes" data-hero-video="" data-src-lg="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" data-src-sm="https://cdn.dribbble.com/uploads/39422/original/2a124f438241970f60b377e881b8dc0b.mp4?1657824997">
                        <source src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" type="video/mp4" /> */}
                    {/* </video> */}
                    <video data-src-lg="https://cdn.dribbble.com/uploads/39534/original/32eb117875f793069fb53fa6a67aa5dc.mp4?1657913912" data-src-sm="https://cdn.dribbble.com/uploads/39535/original/009d9a82575ae2dd099987bd72f5b093.mp4?1657913923" src="https://cdn.dribbble.com/uploads/39534/original/32eb117875f793069fb53fa6a67aa5dc.mp4?1657913912" class="back-video hero-media-asset is-hidden is-visible" autoplay="" loop="infinite" playsinline="playsinline" webkit-playsinline="webkit-playsinline"></video>
                </div>

                <div className="text-content hero-text-content">
                    <h1 className="hero-text-content-h1">Explore the world’s leading<br /> design portfolios</h1>
                    <h2 className="hero-text-content-h2 font-body margin-v-16">Millions of designers and agencies around the world showcase their portfolio work <br />on Barter - the home to the world’s best design and creative professionals.</h2>
                </div>

                <div className="search-component">
                    <div>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search
