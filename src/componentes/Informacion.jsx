const Informacion = ({comision, anioActualProps}) => {
    //aqui va la lógica del componente
    return (
        //aqui pueder ir un poco de lógica
        <>
        <h2>Conceptos de react {comision}</h2>
        <section>
           {/*aqui va todo el maquetado del componente*/} 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ut, dolorum velit sequi voluptate quam fugit aut molestiae numquam iusto natus temporibus beatae nemo omnis modi, minus ipsum quae accusantium.</p>
        comision: {anioActualProps}
        </section>
        </>
    );
};

export default Informacion;