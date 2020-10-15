const inject = (items, sections) => {
    for (let obj of sections) {
        //sections.indexOf(obj)
        items.splice(obj.index + sections.findIndex((a) => a === obj), 0, obj.content);
    }
    return items;
}
export { inject };
