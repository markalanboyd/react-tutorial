const Home = () => {

    const handleClick = (name, e) => {
        console.log("Hello " + name, e);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => {handleClick("Mark", e)}}>Click me again</button>
        </div>
     );
}
 
export default Home;