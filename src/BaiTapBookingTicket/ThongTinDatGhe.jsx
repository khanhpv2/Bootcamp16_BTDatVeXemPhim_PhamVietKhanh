import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon '></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế đã chọn</span> <br />
                    <button className='gheDangChon '></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế đang chọn</span> <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế chưa đặt</span><br />
                </div>
                <div className='mt-5' >
                    <table className="table border-2">
                        <thead>
                            <tr className='text-light' style={{fontSize:'30px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {/* <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                            </tr>
                            <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                            </tr> */}
                            {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td> <button onClick={()=>{
                                        this.props.huyGhe(gheDangDat.soGhe)
                                    }}> Hủy </button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia
                                },0).toLocaleString()}</td>

                            </tr>
                        </tfoot>
                    </table>

                </div>
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
        huyGhe: (soGhe) => {
            dispatch ({
                type:'HUY_GHE',
                soGhe  
            })
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ThongTinDatGhe)
