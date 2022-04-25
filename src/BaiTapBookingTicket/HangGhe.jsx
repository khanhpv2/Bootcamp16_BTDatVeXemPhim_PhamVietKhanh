import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            // Trang thái ghế đã bị đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true
            }
            // xét trạng thái ghé đang đặt
            let cssGheDangDat = ''
            // console.log(this.props.danhSachGheDangDat);
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button 
            onClick={() => {
                this.props.datGhe(ghe)
            }} key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}>
                {ghe.soGhe}
            </button>
            // return <button className={`ghe ${cssGheDaDat}`} key={index}>
            //        {ghe.soGhe} 
            // </button>

        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }

    }


    render() {
        return (
            <div className='text-light text-left ml-5 mt-3'>
                {/* {this.props.hangGhe.hang} {this.renderGhe()} */}
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSanhGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch ({
                type:'DAT_GHE',
                ghe
            })
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(HangGhe)