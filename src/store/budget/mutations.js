
export function SET_ITEM (state, data) {
    let index_item = state.items.findIndex(item => 
        item.id === data.id
    );
    if(index_item=== -1) state.items.push(data);
}
export function REMOVE_ITEM(state, id){
    let index_item = state.items.findIndex(item => 
        item.id === id
    );
    if(index_item != -1) state.items.splice(index_item, 1);
    
}

