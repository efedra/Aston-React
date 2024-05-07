function Logger({data}) {
    if (data === "") {
        return <div></div>
    } else {
        return <div> Твои данные: {data}</div>
    }
}

export default Logger;