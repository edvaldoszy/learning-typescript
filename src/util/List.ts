
interface List<T> {

    add(object: T);

    remove(index: number);
    
    size(): number;
}

export default List;
