const Head = () => {
    return (
        <div className="fixed top-0 left-0 bg-blue-500 w-full h-15 shadow-2xl flex">
            <div>
            <input type="text" placeholder="Search.."  className="bg-white my-5 w-lg h-7 mx-28 outline-none sm:w-10px"></input>
            </div>
            <nav className="ml-auto">
                <ul className="flex my-4 gap-5 ">
                    <li className="">Home</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Head;