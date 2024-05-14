function Logger({data,show}) {
    if (data === "" || !show) {
        return <div></div>
    } else {
        return <div> Твои данные: {data}</div>
    }
}

export default Logger;