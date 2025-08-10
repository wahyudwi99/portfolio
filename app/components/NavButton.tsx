type ComponentsDataType = {
    text : string;
}

function NavButton({text} : ComponentsDataType) {
    return (
        <div>
            <button className="text-white rounded-2xl font-sans font-bold cursor-pointer">
                {text}
            </button>
        </div>
    )
}

export default NavButton