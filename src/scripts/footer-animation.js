import $ from 'jquery'
import jParticle from './plugins/jParticle'

const FooterAnimation = () => {
    const n = $(".partcile-dec").data("parcount");
    $(".partcile-dec").jParticle({
        background: "rgba(255,255,255,0.0)",
        color: "rgba(255,255,255,0.081)",
        particlesNumber: n,
        particle: {
            speed: 20
        }
    })
}

export default FooterAnimation
