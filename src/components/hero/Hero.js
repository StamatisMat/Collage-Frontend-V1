import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper, imageListItemBarClasses} from '@mui/material';


const Hero = ({images}) => {
  return (
    <div className = 'image-carousel-container'>
        <Carousel>
            {
                images.map((image, index) => {
                    return(
                        <Paper>
                            <div className='image-card-container'>
                                <div className='image-card'>
                                    <div className='image-thumbnail'>
                                        <img key={index} src={image.src} alt="" />
                                    </div>
                                    <div className='image-details'>
                                        <div className='image-title'>
                                            <h4>{image.title}</h4>
                                        </div>
                                        <div className='image-description' alt="">
                                            <p>{image.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )

                })

            }
        </Carousel>
    </div>
  )
}

export default Hero