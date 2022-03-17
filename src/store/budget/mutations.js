
export function SET_ITEM (state, data) {
    state.items.push(data)
}
export function REMOVE_ITEM(state, id){
    let index_item = state.items.findIndex(item => 
        items.id === id
    );
    state.items.splice(index_item, 1);
}

