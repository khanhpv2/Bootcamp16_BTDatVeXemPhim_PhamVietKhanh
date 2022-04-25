

import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
      return danhSachGheData.map((hangGhe,index) =>{
          return <div key={index}>
              <HangGhe hangGhe={hangGhe} soHangGhe={index} />
          </div>
      })
  }  
  render() {
    return (
      <div className='bookingMovie' style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(./img/BookingTicket/bgmovie.jpg)',backgroundSize:'100%'}} >
          <dir style={{backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',width:'100%',height:'100%'}}>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-8 text-center">
                          <div className='text-warning display-4' style={{fontSize:'40px'}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                          <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn hình</div>
                          <div className='mt-2 d-flex' style={{flexDirection:'row',justifyContent:'center'}}>
                              <div className='screen'></div>
                          </div>
                          {this.renderHangGhe()}
                      </div>
                      <div className="col-4">
                          <div className='text-light display-4 mt-2' style={{fontSize:'30px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                          <ThongTinDatGhe/>
                      </div>
                  </div>
              </div>
          </dir>
      </div>
    )
  }
}
