const parseData = ({data, column}) => {
    let keys = [];
    column.map((obj) => {
        keys.push(obj.name)
    });
    return data.map((info) => (
        Object.assign({}, ...(info.map((value, index) => (
            { [keys[index]]: value }
            )))
        )
        ))
}

export { parseData };