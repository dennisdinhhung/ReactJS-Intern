const paginate = (data) => {
    const itemsPerPage = 8;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const returnData = [];
    for (let i = 0; i < numberOfPages; i++) {
        let start = i * itemsPerPage;
        returnData.push(data.slice(start, start + itemsPerPage));
    }

    return returnData;
}

export default paginate;
