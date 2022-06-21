import PropTypes from "prop-types"



const objet = {
    objet: "silla",
    description:"Silla muy bonita hecha a mano con madera de primera calidad",
    prise:147,
}

export const Name = ({title, subTitle}) =>{
    return( 
        <>
        <h2>{objet.objet}</h2>
        <h4>{objet.description}</h4>
        <h3>{objet.prise}</h3>
        </>
    )
}


Name.propTypes = {
    title: PropTypes.string
}