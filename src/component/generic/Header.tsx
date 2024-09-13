const nav = (elements: JSX.Element) => {
    return (<div className="Nav">{elements}</div>)
}

const header = (text:string) => {
    return (
        <div className="headerDiv">
            <span className="header">{text}</span>
        </div>
    );
}

const subHeader = (text: string) => {
    return (
        <div className='subheaderDiv'>
            <span className='subheader'>{text}</span>
        </div>
    )
}

export default {
    nav,
    header,
    subHeader
}