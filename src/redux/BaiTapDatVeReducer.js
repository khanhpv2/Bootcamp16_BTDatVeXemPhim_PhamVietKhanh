const stateDefault = {
    danhSanhGheDangDat: [
        // {soGhe:"A2",gia:1000}
    ]
}


export const BaiTapDatVeReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSanhGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) { // khi người dùng click ghế đang đặt có trong mảng => remove
                danhSachGheDangDatUpdate.splice(index,1)
            } else { // chưa có thì thêm vô trong mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // cập nhât lại state => giao diện render lại
            state.danhSanhGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSanhGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) { // khi người dùng click ghế đang đặt có trong mảng => remove
                danhSachGheDangDatUpdate.splice(index,1)
            }
            state.danhSanhGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return {...state}
    }
}