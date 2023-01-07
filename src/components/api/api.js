import axios from "axios";

export const getDataByName = async (searchQ = "", page) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${searchQ}&page=${page}&key=30826039-bb9fe5ddb9f3f8dd9d92d5eff&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}