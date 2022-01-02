import React, { useState } from "react";
import {Link} from 'react-router-dom';
import villaLogo from '../img/svgexport-13.svg';
import hotelLogo from '../img/svgexport-12.svg';
import tourLogo from '../img/svgexport-11.svg';
import busLogo from '../img/svgexport-10.svg';
import trainLogo from '../img/svgexport-9.svg';
import iranoutLogo from '../img/svgexport-8.svg';
import iraninLogo from '../img/svgexport-7.svg';
import changeLogo from '../img/svgexport-15.svg';
import alibabaplusLogo from '../img/alibabaplus.svg';
import { PictureList } from "./PictureList";


const DomesticFlight = () =>{
    console.log(PictureList);
    return(
        <div>
            <div className="relative"> 
                <div className="z-10" >
                    <div className="text-grays-600 text-center">
                        <button role="button" class="btn is-raw caution__close" aria-label="بستن" type="button" data-v-0f9d3f7f=""></button>
                        <span>اطلاع از آخرین شرایط سفر و استرداد با توجه به شیوع کرونا
                            <a className="underline" target="_blank" rel="noopener" href="https://www.alibaba.ir/mag/cvdm/">مشاهده اطلاعیه‌ها</a>
                        </span>
                    </div>
                </div>
                <div className="absolute w-full bg-yellow-100 top-10 m-0 z-0 " style={{zIndex:'0'}}>
                    <img className="w-full mt-100 h-320 absolute top-0 " src="https://cdn.alibaba.ir/h/desktop/assets/images/hero/hero.webp-518e7e11.webp"></img>
                </div>
            </div>

            <div>
                <div className="n ">
                    <div className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{padding:'0px 50px',maxWidth:'100%',paddingTop:'8px'}} >
                        <div className="list">
                            <div className="listitem">
                                <img src={villaLogo}/>
                                <Link to={'/accommodation'}>ویلا و اقامتگاه</Link>
                            </div>
                            <div className="listitem">
                                <img src={hotelLogo}/>
                                <Link to={'/hotel'}>هتل</Link>
                            </div>
                            <div className="listitem">
                                <img src={tourLogo}/>
                                <Link to={'/tour'}>تور</Link>
                            </div>
                            <div className="listitem">
                                <img src={busLogo}/>
                                <Link to={'/bus-ticket'}>اتوبوس</Link>
                            </div>
                            <div className="listitem">
                                <img src={trainLogo}/>
                                <Link to={'/train-ticket'}>قطار</Link>
                            </div>
                            <div className="listitem">
                                <img src={iranoutLogo}/>
                                <Link to={'/iranout'}>پرواز خارجی</Link>
                            </div>
                            <div className="listitem">
                                <img src={iraninLogo}/>
                                <Link to={'/'}>پرواز داخلی</Link>
                            </div>
                        </div>
                      
                        <div>
                            <div>
                                <form>

                                    <div className="w-full my-10" style={{display:'flex',justifyContent:'flex-end',height:'30px'}}>
                                        <span>
                                            <button>
                                                <span class="ml-1 last:ml-0 py-1 text-ellipsis" data-test="title">یک طرفه</span>
                                            </button>
                                        </span>
                                    </div>

                                    <div>
                                        <div className=" input-main flex">
                                             
                                                 <div className=" btn flex border rounded-xl  ">
                                                     <button style={{width:'180px'}}>جستجو</button>
                                                 </div>


                                                <div className=" input flex border rounded-xl mx-3 ">
                                                    <div className="input flex  py-3" style={{zIndex:'0'}}>
                                                        <div className="">
                                                            <span>
                                                                <input type={'text'} placeholder="تعداد مسافران" className="text-right"></input>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div> 


                                                <div className=" input flex border rounded-xl mx-3 ">
                                                    <div className="input flex  py-3" style={{zIndex:'0'}}>
                                                        <div className="">
                                                            <span>
                                                                <input type={'date'}  placeholder="تاریخ رفت" className="text-right"></input>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="input flex py-3 " style={{zIndex:'0'}}>
                                                        <div className="">
                                                            <span>
                                                                <input type={'date'} placeholder="تاریخ برگشت" className="text-right"></input>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            <div className=" input flex border rounded-xl ml-3 ">
                                                <div className="input flex  py-3" style={{zIndex:'0'}}>
                                                    <div className="">
                                                        <span>
                                                            <input id='first' placeholder="مبدا (شهر)" className="text-right"></input>
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="input flex  border rounded-full px-6 ml-2" style={{zIndex:'10'}}>
                                                    <button>
                                                        <img src={changeLogo}></img>
                                                    </button>
                                                </span>
                                                <div className="input flex py-3 " style={{zIndex:'0'}}>
                                                    <div className="">
                                                        <span>
                                                            <input id='last' placeholder="مقصد (شهر)" className="text-right"></input>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{height:'140px',display:'flex',alignItems:'center',justifyContent: 'center'}}>
                        <div className="card ">
                            <div className="p-5">
                                <button>
                                    <div className="bg-black text-white rounded-3xl px-5 py-3">
                                        <p className="text-sm">رفتن به علی‌بابا پلاس</p> 
                                    </div>
                                </button>
                            </div>
                            <div className="text-right text-center" >
                                <p className="font-bold text-xl">علی‌بابا پلاس؛ جمع تجربه‌های سفر</p>
                                <p className="text-sm">به علی‌بابا پلاس بیایید تا هم تجربه‌های سفرهایتان را در اختیار هزاران ‌هزار مسافر قرار دهید، هم تجربه بقیه را بخوانید</p>
                            </div>
                            <div className="p-5">
                                <img className="w-24" src={alibabaplusLogo} ></img>
                            </div>
                        </div>
                   </div>

                   <div style={{height:'140px',display:'flex'}}>
                      {
                          PictureList.map((item,i) =>{
                              return(
                                  <div>
                                      <img src={item.url}></img>
                                  </div>
                              )
                          })
                      }
    
                   </div>

                </div>
            </div>
        </div>
    )
}
export default DomesticFlight;