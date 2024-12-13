import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearName } from '../../store/userSlice'
const FooterInsta = React.lazy(()  => import('../../icons/footerInsta'))
const FooterFacebook = React.lazy(()  => import('../../icons/footerFacebook'))
const FooterTwiter = React.lazy(()  => import('../../icons/footerTwiter'))

function Footer() {
    const dispatch = useDispatch()
    function handleLogOut() {
        dispatch(clearName())
        window.location.reload(); 
    }
  return (
    <div className='h-[193px] lg:h-[227px] bg-[#1D1D1D] pt-[29px] md:pt-12'>
        <div className='container'>
                <div className='flex items-start justify-between lg:justify-around w-full border-t-[3px] border-white rounded pt-[21px] md:pt-[37px]'>
                    <div className='flex flex-col md:flex-row md:gap-[41px] lg:gap-[41px]'>
                        <h6 className='font-Poppins font-normal text-sm text-white leading-[21px]'>@keykomaniya</h6>
                        <div className='flex flex-col md:flex-row pt-[11px] md:p-0 gap-y-[9px] gap-6'>
                            <NavLink to="about" className="font-Poppins font-normal text-sm text-white leading-[21px]">О нас</NavLink>
                            <NavLink to="portfolio" className="font-Poppins font-normal text-sm text-white leading-[21px]">Портфолио</NavLink>
                            <NavLink to="services" className="font-Poppins font-normal text-sm text-white leading-[21px]">Услуги</NavLink>
                        </div>
                    </div>

                    <div className='flex flex-col justify-start md:flex-row md:gap-[25px] lg:gap-[48px]'>
                        
                        <div className='flex  md:p-0  gap-[14px]'>
                            <NavLink to="/" className="font-Poppins font-normal text-sm text-white"><FooterInsta/></NavLink>
                            <NavLink to="/" className="font-Poppins font-normal text-sm text-white"><FooterFacebook/></NavLink>
                            <NavLink to="/" className="font-Poppins font-normal text-sm text-white"><FooterTwiter/></NavLink>
                            
                        </div>
                        <button onClick={()=>handleLogOut()} className="pt-[14px] md:p-0 font-Poppins font-normal text-sm text-white leading-[21px] text-left">выйти из системы</button>
                        <h6 className='pt-[14px] md:p-0 font-Poppins font-normal text-sm text-white leading-[21px]'>Ташкент,  Узбекистан.</h6>
                    </div>

                </div>

        </div>

    </div>
  )
}

export default Footer