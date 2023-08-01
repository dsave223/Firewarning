import styled from "styled-components"
import Paragraph from "../../atoms/Paragraph";
import TitleWithProps from "../../atoms/TitleWithProps";
import F1 from "../../../assets/img/F1.png";
import F2 from "../../../assets/img/F2.jpg";
import F3 from "../../../assets/img/F3.png";
import ManuelP from "../../../assets/img/Manuel.jpg";

function ContentManual() {
    return ( 
        <>
            <Manuel className="">
                <TitleWithProps msn="
                Manual de Prevencion Contra Incendios"/>

                <TitleWithProps propsT7 msn="
                CÓMO PREVENIR INCENDIOS EN CASA"/>
                <Paragraph msn="Con el verano llegan las altas temperaturas y con ellas el aumento de probabilidades de ocasionar un incendio en nuestros hogares."/>
                <Paragraph msn="Para evitar que se produzca cualquier fuego en su hogar, no solo debe tener precauciones en el interior de su vivienda. Quienes vivan en comunidad, están expuestos a los incendios que se puedan ocasionar en las casas vecinas o en las zonas comunes del edificio. La propagación vertical del fuego hace que los pisos superiores sean los más expuestos."/>
                <Paragraph msn="Por ello, es importante prestar atención a los posibles peligros y tomar medidas de precaución como claves para prevenir y proteger a su familia contra un incendio en su casa."/>
                <Paragraph msn="Enchufes eléctricos sobrecargados, fugas de gas y productos inflamables mal almacenados son algunos de los peligros latentes que pueden llegar a convertirse en un incendio."/>

                <TitleWithProps propsT6 msn="INCENDIOS EN LA COCINA"/>
                <ul className="points">
                    <li>Mientras esté cocinando, vigile atentamente lo que se calienta y no lo deje desatendido ni por un segundo.</li>
                    <li>No deje nada cocinando en el fuego ni aparatos eléctricos de gran consumo en marcha cuando abandone su domicilio.</li>
                    <li>Use mangas cortas o ajustadas cuando cocine. Evite también la ropa inflamable, que podría expandir el fuego con facilidad.</li>
                    <li>Tenga siempre un extintor en la cocina y/o manta ignífuga. Es aconsejable tener una manta ignífuga en la cocina, ya que el extintor de Co2 mancha mucho, aunque ambos son igual de eficaces). La única diferencia es su utilización, el extintor de co2 se debe utilizar muy cerca de la llama y en un entorno ventilado, ya que, al robar el oxígeno, apaga tanto la llama como el oxígeno del ambiente y de la persona, por lo que el entorno debe estar ventilado y tener siempre una puerta detrás de la persona que lo utiliza para tener una salida clara y fácil. Mientras que el extintor de polvo puede tener más distancia a la llama, ya que el nitrógeno que contiene el extintor impulsaría eficazmente el polvo químico que apagaría el fuego. Siempre apuntar a la base del fuego.</li>
                    <li>La manta ignífuga o manta cortafuego se abriría tirando de las cuerdas que vienen en su parte inferior y se echaría encima del fuego. Si éste no es muy grande, como una sartén o medidas similares.</li>
                </ul>

                <div className="containerImF">
                    <img src={F1} alt="" />
                    <img src={F2} alt="" />
                    <img src={F3} alt="" />
                </div>

                <ul className="points1">
                    <li>Evite las corrientes de aire en la cocina que pudieran apagar el gas, especialmente si está usted en otra habitación.</li>
                    <li>No almacene ni manipule líquidos inflamables en la cocina. Evite acumular combustibles innecesarios en su casa, como ropa vieja, periódicos, pinturas, etc.</li>
                    <li>Limpie periódicamente los filtros de la campana extractora de la cocina. Conserve también limpias de grasa las salidas de humos y las entradas de aire.</li>
                    <li>Antes de usarlas, elimine la grasa de las tostadoras y los artefactos pequeños.</li>
                    <li>Mantenga limpia el área de la cocina. Limpie los utensilios de cocina y las superficies después de cocinar para evitar la acumulación de grasa.</li>
                    <li>No cocine cuando haya bebido alcohol o tomando alguna medicación que lo vuelva somnoliento.</li>
                    <li>Mantenga alejados a los niños de la cocina y zona de planchar. Sitúe los objetos calientes o con llama viva fuera de su alcance.</li>
                </ul>
                <TitleWithProps propsT6 msn="INCENDIOS EN LA COCINA"/>
                <ul className="points2">
                    <li>Evita sobrecargar los enchufes.</li>
                    <li>No cubras luces o lámparas con telas, papeles o plásticos.</li>
                    <li>Deja la instalación eléctrica a cargo de profesionales. Sólo ellos deben manipularla.</li>
                    <li>Cierra bien las puertas cortafuegos, especialmente las que comunican el aparcamiento con la escalera del edificio. No hay que dejar nunca nada que impida su cierre.</li>
                </ul>
                <Paragraph msn="Es recomendable poner un detector de humo en casa. Se aconseja instalar detectores de humo en zonas como: la cocina, pasillo o lugares concurridos como salas de estar. (En caso de que el incendio se produzca de noche cuando estamos durmiendo sería el sonido de dichos detectores lo que nos despertaría, en caso contrario, el monóxido de carbono nos impediría despertar, con el fatídico desenlace)."/>
                <ul className="points3">
                    <li>En invierno puede aumentar el riesgo de incendio en el hogar. Os dejamos algunos consejos para cuando llegue el momento de usar estufas y chimeneas:</li>
                    <li>Si tienes chimenea, asegúrate de limpiarla al menos una vez al año y hazla revisar periódicamente.</li>
                    <li>Aparta cualquier aparato calefactor de materiales combustibles como cortinas, sábanas, entapizados, colchas, sofás etc. y no pongas ropa a secar al lado de estufas o chimeneas.</li>
                    <li>No enciendas velas, incienso, cigarros ni ningún elemento con brasa o llama cerca de material combustible y asegúrate de apagar bien cualquiera de estos elementos antes de ir a dormir, salir de casa o tirarlo.</li>
                </ul>

                <TitleWithProps propsT6 msn="QUÉ HACER EN CASO DE INCENDIO"/>
                <ul className="points4">
                    <li>Apague la fuente de calor, si es posible. Corte la corriente eléctrica y la entrada de gas.</li>
                    <li>Intente apagar el fuego sólo si es pequeño y se puede controlar. Para hacerlo, sitúese entre el fuego y la vía de escape. Avise al teléfono de emergencias 112.</li>
                    <li>Si no puede apagarlo, no corra riesgos inútiles: busque un lugar seguro y abandone la zona.</li>
                    <li>Si es posible, retire los productos combustibles o inflamables próximos al fuego.</li>
                    <li>Si algún elemento de la cocina comienza a quemarse, trate de sofocarlo cubriéndolo con algún tipo de tapa o con el bicarbonato de soda del extintor. En este caso, la manta ignífuga sería muy eficaz. Además, es económica, fácil de utilizar y de varios usos.</li>
                    <li>Mantenga cerrada la puerta del horno o del microondas si se inicia un incendio.</li>
                    <li>Nunca vierta agua sobre un incendio por grasa o líquidos inflamables. El agua hará que el incendio se extienda. Tampoco la utilice si puede alcanzar instalaciones eléctricas.</li>
                </ul>
                <Paragraph msn="En resumen, para prevenir incendios en su casa no olvide:"/>

                <ul className="points5">
                    <li><span>No sobrecargar los enchufes eléctricos:</span> en una habitación de 6 x 3 metros, solo deben existir dos enchufes. Evitar sobrecargarlos con más conexiones.</li>
                    <li><span>Poner cerillas y encendedores en lugares altos:</span> a los/as niños/as les encanta jugar con ellos, se recomienda comprar encendedores especiales para que no puedan encenderlos.</li>
                    <li><span>No dejar apoyada la plancha sobre la ropa o la cama:</span> al descuidar la plancha, la ropa puede quemarse y producir incendio.</li>
                    <li><span>No vaciar los ceniceros en los cubos de basura:</span> antes de tirar las cenizas a la basura, verifique que se encuentran frías y sobre todo no fume en la cama.</li>
                    <li><span>No dejar velas encendidas cerca de superficies inflamables:</span> como cortinas, cubrecamas, colchones y mesas de madera que puedan incendiarse.</li>
                    <li><span>Al salir de casa, cerrar las válvulas de su cocina:</span> también debe de interrumpir el paso del gas, y si allegar siente olor de gas, recuerde no encender las luces ni aparatos eléctricos.</li>
                    <li><span>No dejar a los niños solos en casa:</span> ellos no conocen sobre los peligros del fuego. Las cerillas y los encendedores deben de estar alejados de su alcance.</li>
                    <li><span>Al cocinar, no permitir que los niños están cerca:</span> los mangos de las ollas y sartenes deben estar hacia dentro para evitar que los más pequeños de la casa puedan tirar.</li>
                    <li><span>No dejar productos inflamables cerca de puntos calientes:</span> entre éstas se encuentran las cocinas, hornos y otros aparatos eléctricos que generan calor.</li>
                </ul>

                <div className="containerImM">
                    <img src={ManuelP} alt="Imagen ilustrativo" className="img" />
                </div>
            </Manuel>
        </>
     );
}

export default ContentManual;

const Manuel = styled.div`
    margin-left: 15vh;
    width: 80%;
    height: 75vh;
    overflow-y: scroll;

    .points li{
        font-family: Hind;
    }
    .points1 li{
        font-family: Hind;
    }
    .points2 li{
        font-family: Hind;
    }

    .points3 li{
        font-family: Hind;
    }
    .points4 li{
        font-family: Hind;
    }
    .points5 li{
        font-family: Hind;
    }
    .points5 span{
        font-weight: bold;
    }

    .containerImF{
        display: flex;
        gap: 4vh;
        width: 100%;
        justify-content: center;
    }
    .containerImF img{
        height: 40vh;
    }
    .img{
        width: 90%;
    }
`;