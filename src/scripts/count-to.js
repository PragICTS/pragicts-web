import $ from 'jquery'
import appear from './plugins/appear'
import countTo from './plugins/count'

const CountTo = () => {
    $(".stats").appear(function () {
        $(".num").countTo();
    })
}

export default CountTo
