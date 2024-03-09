const getData = () =>{
    const havaDonate = localStorage.getItem('donation');
    if(havaDonate){
        return JSON.parse(havaDonate)
    }
    return [];
}

const setData = (id) => {
    const havaDonate = getData();
    const isExist = havaDonate.find(oneDonate => oneDonate.id === id);
    if(!isExist){
        havaDonate.push(id);
        localStorage.setItem('donation', JSON.stringify(havaDonate))
    }
};
export {getData, setData}