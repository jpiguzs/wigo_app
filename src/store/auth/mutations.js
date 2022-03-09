import { LocalStorage, SessionStorage } from 'quasar'
export function auth_request(state) {
    state.loading = true;
    state.state = "succes"
}
export function auth_success(state, data) {

    state.token = data.token;
    state.user = data.user;
    state.notifications = data.user.notifications;
    state.isLoggedIn = true;
    LocalStorage.remove('user');
    LocalStorage.set('user', data.user);
    state.loading = false;
}
export function auth_error(state) {
    state.status = 'error';
    state.loading = false;
}
export function log_out(state) {
    state.isLoggedIn = false;
    LocalStorage.clear();
    state.token = null;
    state.user = null;
}

export function refresh(state, data) {
    localStorage.setItem('token', data)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data
    state.token = data;
}
export function set_new_notifications(state, data){

    state.notifications.push(data);
}
export function remove_notifications(state,id){
    
    let index = state.notifications.findIndex( noti => noti.id ===id);
    console.log(index)
    state.notifications.splice(index,1);
}
export function remove_notifications_po(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==3 && noti.read==0 && noti.url==='po' );
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}

export function remove_notifications_inventory(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==5 && noti.read==0 && noti.url==='inventory' );
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}
export function remove_notifications_demands(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==1 && noti.read==0 && noti.url==='demands' );

    if(index>=0){
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}

export function remove_notifications_acp(state,id){
    console.log(id)
    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==1 && noti.read==0 && noti.url==='acp/create' );
    console.log(index);
    if(index>=0){
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}
export function remove_notifications_acpPendind(state,id){
    console.log(id)
    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==1 && noti.read==0 && noti.url==='acp/pending' );
    console.log(index);
    if(index>=0){
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}

export function remove_notifications_NoteDeliveryCompra(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==4 && noti.read==0 && noti.url==='note_delivery_compra' );
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}
export function remove_notifications_finanza(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==1 && noti.read==0 && noti.url==='finance');
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}
export function remove_notifications_finanza_Confirmacion(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==6 && noti.read==0 && noti.url==='finance');
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}
export function remove_notifications_NoteDeliveryFinance(state,id){

    let index = state.notifications.findIndex( noti => noti.target_id ===id && noti.type==1 && noti.read==0 && noti.url==='note_delivery_finance');
    
    if(index>=0){
        console.log(index);
        console.log(state.notifications[index].read);
        state.notifications[index].read=1;
        
        axios.patch('/notifications/read/'+state.notifications[index].id).then(res => {
            console.log('listo')
        }).catch(err => {
            console.log('error');
        });
    }
}

export function set_notificantions(state, data){
    state.notifications = data;
}
export function set_expire_token(state,data){
    state.expire_token = data;
}