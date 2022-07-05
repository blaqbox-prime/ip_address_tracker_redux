import React from 'react'
import './IpDetails.css'

function IpDetails({data}) {
  return (
    <section className="IpDetails">
        <article className="IpDetails__info">
            <h2 className="IpDetails__info_heading">Ip address</h2>
            <p className="IpDetails__info_detail">{data?.isp ? data.ip : '192.212.174.101'}</p>
        </article>
        <div className="IpDetails__divider"></div>
        <article className="IpDetails__info">
            <h2 className="IpDetails__info_heading">Location</h2>
            <p className="IpDetails__info_detail">{data?.location ? `${data.location.city},${data.location.country} ${data.location.postalCode}` : 'Brooklyn, NY 10001'}</p>
        </article>
        <div className="IpDetails__divider"></div>

        <article className="IpDetails__info">
            <h2 className="IpDetails__info_heading">Timezone</h2>
            <p className="IpDetails__info_detail">{data?.location ? data.location.timezone : '-05:00'}</p>
        </article>
        <div className="IpDetails__divider"></div>

        <article className="IpDetails__info">
            <h2 className="IpDetails__info_heading">isp</h2>
            <p className="IpDetails__info_detail">{data?.isp ? data.isp : 'SpaceX Starlink'}</p>
        </article>
    </section>
  )
}

export default IpDetails