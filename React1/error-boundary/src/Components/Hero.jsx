function Hero({name}) {
    if(name === "joker") throw new Error("It's not a hero");
    return (<>
        <h2>{name}</h2>
    </>)
}
export default Hero;