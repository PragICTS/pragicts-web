import React from 'react'
import PragICTSAwsUpgradeThumbnail from '../images/projects/pragicts-aws-online-presence-upgrade.jpg'
import AgcEgnyteImplementationThumbnail from '../images/projects/egnyte-agc-implementation.jpg'
import BiophiliaPlantDBThumbnail from '../images/projects/biophilia-knowledgebase.jpg'
import AslAwsmigrationThumbnail from '../images/projects/asl-thumb.jpg'
import ToolshubEcommerceThumbnail from '../images/projects/toolshub-thumb.jpg'

const RecentProjects = [
    {
        id: 1,
        company: 'PragICTS',
        thumbnail: PragICTSAwsUpgradeThumbnail,
        tags: [
            {
                id: 1,
                title: 'Cloud Migration'
            }
        ]
    },
    {
        id: 2,
        company: 'AGC',
        thumbnail: AgcEgnyteImplementationThumbnail,
        tags: [
            {
                id: 1,
                title: 'Cloud Services Implementation'
            }
        ]
    },
    {
        id: 3,
        company: 'Biophilia',
        thumbnail: BiophiliaPlantDBThumbnail,
        tags: [
            {
                id: 1,
                title: 'Web Application'
            },
            {
                id: 2,
                title: 'Application Support'
            }
        ]
    },
    {
        id: 4,
        company: 'Authenticities Sri Lanka',
        thumbnail: AslAwsmigrationThumbnail,
        tags: [
            {
                id: 1,
                title: 'Cloud Migration'
            }
        ]
    },
    {
        id: 5,
        company: 'Toolshub',
        thumbnail: ToolshubEcommerceThumbnail,
        tags: [
            {
                id: 1,
                title: 'eCommerce'
            },
            {
                id: 2,
                title: 'SEO'
            },
            {
                id: 3,
                title: 'Application Support'
            },
            {
                id: 4,
                title: 'Branding'
            }
        ]
    }
]

const HomeRecentProjects = () => {

    return (
        <section className="dark-bg" id="projects">
            <div className="fet_pr-carousel-title">
                <div className="fet_pr-carousel-title-item">
                    <h3>Our Recent Projects</h3>
                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</p>
                    <a href="#" className="btn float-btn flat-btn color-btn mar-top">View Portfolio</a>
                </div>
            </div>
            <div className="slider-carousel-wrap fl-wrap">
                <div className="fet_pr-carousel cur_carousel-slider-container fl-wrap">
                    {RecentProjects.map(project => (
                        <div key={project.id} className="slick-item">
                            <div className="fet_pr-carousel-box">
                                <div className="fet_pr-carousel-box-media fl-wrap">
                                    <img src={project.thumbnail} className="respimg" alt="" />
                                    <a href={project.thumbnail} className="fet_pr-carousel-box-media-zoom   image-popup"><i className="fal fa-search"></i></a>
                                </div>
                                <div className="fet_pr-carousel-box-text fl-wrap">
                                    <h3><a href="#">{project.company}</a></h3>
                                    <div className="fet_pr-carousel-cat">
                                        {
                                            project.tags.map(tag => (
                                                <a key={tag.id} href="#">{tag.title}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sp-cont sp-arr sp-cont-prev"><i className="fal fa-long-arrow-left"></i></div>
                <div className="sp-cont sp-arr sp-cont-next"><i className="fal fa-long-arrow-right"></i></div>
            </div>
            <div className="fet_pr-carousel-counter"></div>
        </section>
    )
}

export default HomeRecentProjects
