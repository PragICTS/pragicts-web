import $ from 'jquery'
import CarouselJs from './src/scripts/carousel'

export const onInitialClientRender = () => {
    $(document).ready(function () {
        CarouselJs()
    });
}
