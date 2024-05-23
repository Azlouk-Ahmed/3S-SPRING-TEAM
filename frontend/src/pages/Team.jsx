import React from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { CiLinkedin } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import Loading from '../components/loading/Loading';
import { Link } from 'react-router-dom';

function Team() {
  const { data, loading } = useFetchData("http://localhost:5000/admin/team")
  return (
    <div className='xx'>
      <div className="ta-c">
        <div className="title3">Meet our Team</div>
        <div className="title4 center w50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      </div>
        {loading && <Loading />}
      {data && <div className="dfw gap3 container">
        {data?.map((el,index) => (
          <div className={`teambox df-c ta-c`} key={el.id}>
            <div className="blur"></div>
            <img src={"/img/"+el.image} alt="" className='teamimg center' />
            <div className="title3">{el.name}</div>
            <div>{el.position}</div>
            <div className='experience'>{el.experience} of experience</div>
            <div className="df center"><a href={el.linkedIn}><CiLinkedin /></a> <a href={el.behance}><FaBehance /></a></div>
            <div className="btn center w-100 p0"><Link to={"/team/"+el._id}>view</Link></div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Team
