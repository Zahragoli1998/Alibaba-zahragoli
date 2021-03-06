import React from "react";
import rateImage from'../img/rate.webp'
import phoneImage from '../img/phone.webp'
import bagImage from '../img/bag.webp'
import arrowLogo from '../img/svgexport-21.svg'
import cafeBazarLogo from '../img/Cafe Bazaar.svg'
import MyketLogo from '../img/Myket.svg'
import sibappLogo from '../img/Sibapp.svg'
import downloadLogo from '../img/svgexport-22.svg'
import alibabaLogo from '../img/Alibaba Logo.svg'
import RightsImage from '../img/حقوق مسافر.svg'
import OrganizationImage from '../img/سازمان هواپیمایی کشوری.svg'
import TelegramLogo from '../img/Telegram logo.svg'
import TwitterLogo from '../img/Twitter logo.svg'
import youtubeLogo from '../img/youtube logo.svg'
import AparatLogo from '../img/Aparat logo.svg'
import InstagramLogo from '../img/Instagram logo.svg'
import LinkedinLogo from '../img/Linkedin logo.svg'

const Footer = () =>{

    return(
        <div  className='footer'>
        <div className='footer-content'>
          <div className='footer-list'>
            <li className='footer-listitem'>
              <img src={rateImage} style={{width:'90px',height:'90px'}}></img>
              <div className='text-right'>
                <h3 className='text-gray-500 text-xl'>رتبه یک سفر</h3>
                <span className='text-gray-400 text-sm'>معتبرترین عرضه‌کننده محصولات گردشگری در ایران</span>
              </div>
            </li>

            <li className='footer-listitem' >
              <img src={phoneImage} style={{width:'90px',height:'90px'}}></img>
              <div className='text-right'>
                <h3 className='text-gray-500 text-xl'>همسفر هر سفر</h3>
                <span className='text-gray-400 text-sm'>ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)</span>
              </div>
            </li>

            <li className='footer-listitem'>
              <img src={bagImage} style={{width:'90px',height:'90px'}}></img>
              <div className='text-right'>
                <h3 className='text-gray-500 text-xl'>همسفر همه لحظات سفر</h3>
                <span className='text-gray-400 text-sm'>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</span>
              </div>
            </li>
          </div>

          <div className="downloadBox">
              <div className="downloadBox-main">
                  <h3 className="text-xl font-bold mb-7">اپلیکیشن علی‌بابا</h3>
                  <p  style={{display:'flex',fontSize:'14px'}}>
                      <a role='link' type="button" href="https://www.alibaba.ir/app" style={{display:'flex',marginRight:'10px'}} >
                          <img src={arrowLogo}></img>
                          <span>مشاهده همه قابلیت‌ها</span>
                      </a>
                      .با نصب اپلیکیشن علی‌بابا بلیط همه سفرها در جیب شماست 
                  </p>
              </div>
              <div className="directlyDownloadBox">
                  <a href="https://cafebazaar.ir/app/ir.alibaba/?l=fa" >
                      <img src={cafeBazarLogo}/>
                      کافه بازار 
                  </a>
                  <a href="https://myket.ir/app/ir.alibaba">
                        <img src={MyketLogo}/>
                        مایکت 
                  </a>
                  <a href="https://sibapp.com/applications/alibaba-ir">
                        <img src={sibappLogo}/>
                        سیب اپ 
                  </a>
                  <a href="https://www.alibaba.ir/download/android/ir.alibaba.apk">
                        <img src={downloadLogo}/>
                        دانلود مستقیم 
                  </a>

              </div>
          </div>
          <hr class=" mt-6"></hr>

          <div style={{display:'flex',flexDirection:'row-reverse' ,justifyContent:'center'}}> 
              <div className='footer-nav'>
                  <h3 className="mb-5 text-xl">علی‌بابا</h3>
                  <div>
                      <li><a href="https://www.alibaba.ir/about-us">درباره ما</a></li>
                      <li><a href="https://www.alibaba.ir/contact-us">تماس با ما</a></li>
                      <li><a href="https://www.alibaba.ir/why-alibaba">چرا علی‌بابا</a></li>
                      <li><a href="https://www.alibaba.ir/plus">علی بابا پلاس</a></li>
                      <li><a href="https://www.alibaba.ir/mag">مجله علی‌بابا</a></li>
                  </div>
              </div>
              <div className='footer-nav'>
                  <h3 className="mb-5 text-xl">راهنما</h3>
                  <div >
                      <li><a href="https://www.alibaba.ir/purchase-guide">راهنمای خرید</a></li>
                      <li><a href="https://www.alibaba.ir/refund-guide"></a>راهنمای استرداد بلیط</li>
                      <li><a href="https://www.alibaba.ir/policy"></a>قوانین و مقررات</li>
                      <li><a href="https://www.alibaba.ir/faq"></a>پرسش و پاسخ</li>
                  </div>
              </div>
              <div className='footer-nav'>
                  <h3 className="mb-5 text-xl">اطلاعات تکمیلی</h3>
                  <div >
                      <li><a href="https://www.alibaba.ir/loyalty">باشگاه مشتریان</a></li>
                      <li><a href="https://www.alibaba.ir/b2b"></a>فروش سازمانی</li>
                      <li><a href="https://partner.alibaba.ir/"></a>همکاری با آژانس‌ها</li>
                      <li><a href="https://www.alibaba.ir/jobs"></a>فرصت‌های شغلی</li>
                  </div>
              </div>
              <div style={{flex:'2'}}> 
                  <img src={alibabaLogo} className="w-30 h-10 my-5"/>
                  <div>
                      <p>
                          <a dir="ltr" class="font-medium mr-3" href="tel:02143900000" data-v-37e475cc="">۰۲۱ - ۴۳۹۰۰۰۰۰ </a>
                          <span class="mx-4" data-v-37e475cc="">|</span>
                          <a dir="ltr" class="font-medium" href="tel:02149275000" data-v-37e475cc="">۰۲۱ - ۴۹۲۷۵۰۰۰</a>
                            :تلفن پشتیبانی
                      </p>
                      <p>دفتر فروش: قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴</p>
                  </div>
                  <div className="list-none mt-20">
                      <li className="inline-block">
                          <a className="footer-card" href="https://ecunion.ir/verify/alibaba.ir?token=45162255b6952bb8af5b">
                              <img src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/ecunion.png-8b792f56.png"/>
                          </a>
                      </li>
                      <li className="inline-block">
                          <a className="footer-card" href="https://logo.samandehi.ir/Verify.aspx?id=33643&p=xlaoxlaogvkaaodsxlao">
                              <img src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/samandehi.png-6e2b448a.png"/>
                          </a>
                      </li>
                      <li className="inline-block">
                          <a className="footer-card" href="https://www.cao.ir/paxrights">
                              <img src={RightsImage}/>
                          </a>
                      </li>
                      <li className="inline-block">
                          <a className="footer-card" href="http://www.aira.ir/">
                              <img src="https://cdn.alibaba.ir/h/desktop/assets/images/footer/aira.png-682b7c43.png"/>
                          </a>
                      </li>
                      <li className="inline-block">
                          <a className="footer-card" href="https://www.cao.ir/home">
                              <img src={OrganizationImage}/>
                          </a>
                      </li>
                  </div>

              </div>
          </div>
          <hr class=" mt-6"></hr>
          <div className="p-5"  style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>
              <p className="text-sm text-gray-400">کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.27.1)</p>
              <div style={{display:'flex'}}>
                  <a className="px-5" href="https://www.linkedin.com/company/alibaba-travels">
                      <img  src={LinkedinLogo}/></a>
                  <a className="px-5" href="https://instagram.com/alibaba_travels">
                      <img  src={InstagramLogo}/></a>
                  <a className="px-5" href="https://www.aparat.com/alibaba_travels">
                      <img  src={AparatLogo}/></a>
                  <a className="px-5" href="https://twitter.com/alibaba_travels">
                      <img  src={TwitterLogo}/></a>
                  <a className="px-5" href="https://www.youtube.com/channel/UChN_55cq3XLPUUv7RRzlNgQ">
                      <img  src={youtubeLogo}/></a>
                  <a className="px-5" href="https://t.me/AlibabaTravels">
                      <img  src={TelegramLogo}/></a>
              </div>
          </div>
        </div>

      </div>
    )
}
export default Footer;