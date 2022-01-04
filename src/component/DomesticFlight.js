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
import phoneLogo from '../img/svgexport-17.svg';
import alibabaplusLogo from '../img/alibabaplus.svg';
import { PictureList } from "./PictureList";
import iosLogo from '../img/logoios.png';
import androidLogo from '../img/logoandroid.png';
import questionLogo from '../img/svgexport-19.svg';
import expandMoreLogo from '../img/svgexport-23.svg'


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

            <div className="main-list">
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

                   <div className="mt-6 text-center rounded-xl w-full border-current" style={{display:'flex',height:'300px',justifyContent:'space-between'}}>
                      {
                          PictureList.map((item,i) =>{
                              return(
                                  <div>
                                      <img  className="rounded-xl" style={{height:'270px',width:'680px'}} src={item.url}></img>
                                  </div>
                              )
                          })
                      }
    
                   </div>

                   <div className="mt-6 text-center bg-white rounded-xl w-full border-current mb-20" style={{display:'flex',justifyContent:'space-between',height:'320px'}}>
                      <div className="background rounded-l-lg">
                          <img className="mt-10"style={{marginLeft:'125px'}} src="https://cdn.alibaba.ir/h/desktop/assets/images/app-mobile/app-mobile@1x.webp-09aa7fed.webp"></img>
                      </div>
                      <div className="textbox">
                          <h1 className="text-xl font-bold py-3">دانلود اپلیکیشن علی‌بابا</h1>
                          <h5>با اپلیکیشن علی‌بابا سریع‌تر و مطمئن‌تر به سفر بروید ‌</h5>
                          <button className="bg-blue-500 rounded-xl m-10 px-12 p-3 text-white"> راهنمای دانلود<img src={phoneLogo}></img></button>
                          <div style={{display:'flex'}}>
                              <p> Android و iOS قابلیت نصب روی </p>
                              <img style={{width:'25px',height:'25px'}} src={iosLogo}></img>
                              <img style={{width:'25px',height:'25px'}} src={androidLogo}></img>
                          </div>
                      </div>
                   </div>


                   <div>
                       <h2 className="text-right font-bold text-2xl">پرسش های شما</h2>
                    <div className="w-full" style={{height:'auto'}}>
                        <button className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{height:'auto'}}>
                            <div className="p-5" style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <p className="text-xl" style={{color:'#4B5259',maxWidth:"100%"}}>چند روز قبل از پرواز، بلیط هواپیما را بخریم؟</p>
                                    <img className="rounded-full ml-3"style={{backgroundColor:'#e8f9fc'}} src={questionLogo}/>
                                </div>
                            <button>
                                <img src={expandMoreLogo}/>
                            </button>
                            </div>
                            <div className="hidden">
                                <p  className="text-xl text-right" style={{color:'#4B5259',maxWidth:"100%"}}>امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="w-full" style={{height:'auto'}}>
                        <button className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{height:'auto'}}>
                            <div className="p-5" style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <p className="text-xl" style={{color:'#4B5259',maxWidth:"100%"}}>در هر پرواز، میزان بار مجاز چقدر است؟</p>
                                    <img className="rounded-full ml-3"style={{backgroundColor:'#e8f9fc'}} src={questionLogo}/>
                                </div>
                            <button>
                                <img src={expandMoreLogo}/>
                            </button>
                            </div>
                            <div className="hidden">
                                <p  className="text-xl text-right" style={{color:'#4B5259',maxWidth:"100%"}}>میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.</p>
                            </div>
                        </button>
                    </div>

                    <div className="w-full" style={{height:'auto'}}>
                        <button className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{height:'auto'}}>
                            <div className="p-5" style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <p className="text-xl" style={{color:'#4B5259',maxWidth:"100%"}}>نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟</p>
                                    <img className="rounded-full ml-3"style={{backgroundColor:'#e8f9fc'}} src={questionLogo}/>
                                </div>
                            <button>
                                <img src={expandMoreLogo}/>
                            </button>
                            </div>
                            <div className="hidden">
                                <p  className="text-xl text-right" style={{color:'#4B5259',maxWidth:"100%"}}>این نرخ به کلاس پرواز و کلاس نرخی بستگی دارد. اما عموما 50 تا 75 درصد قیمت بلیط بزرگسالان است. قیمت بلیط هواپیما برای نوزادان (تا 2 سال) در بیشتر موارد 10 درصد بلیط بزرگسالان است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.</p>
                            </div>
                        </button>
                    </div>

                    <div className="w-full mb-24" style={{height:'auto'}}>
                        <button className="mt-6 text-center bg-white rounded-xl w-full border-current" style={{height:'auto'}}>
                            <div className="p-5" style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <p className="text-xl" style={{color:'#4B5259',maxWidth:"100%"}}>رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟</p>
                                    <img className="rounded-full ml-3"style={{backgroundColor:'#e8f9fc'}} src={questionLogo}/>
                                </div>
                            <button>
                                <img src={expandMoreLogo}/>
                            </button>
                            </div>
                            <div className="hidden">
                                <p  className="text-xl text-right" style={{color:'#4B5259',maxWidth:"100%"}}>خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.</p>
                            </div>
                        </button>
                    </div>


                   </div>

                </div>
            </div>
        </div>
    )
}
export default DomesticFlight;