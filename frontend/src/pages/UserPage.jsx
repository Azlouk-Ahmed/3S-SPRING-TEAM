import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import Loading from "../components/loading/Loading";
import "./user.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImQuotesLeft } from "react-icons/im";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function UserPage() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      };
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, loading } = useFetchData(
    "http://localhost:5000/admin/team/" + id
  );
  console.log(user);
  return (
    <>
      {user && (
        <div className=" container">
          {user.position === "webdev" && (
            <div className="xx dfw webdev">
              <div className="profile--wrapper">
                <div className="left">
                  <div className="blur"></div>
                  <div className="title2">{user.name}</div>
                  <div>web developper</div>
                  <div className="title3 mt">
                    {user.experience} years of experience
                  </div>
                  <div className="df">
                    <a href={user.linkedIn}>linkedIn</a>
                    <a href={user.behance}>Behance</a>
                  </div>
                </div>
                <div className="centerside">
                  <svg
                    className="bar"
                    version={1.0}
                    xmlns="http://www.w3.org/2000/svg"
                    width="720.000000pt"
                    height="371.000000pt"
                    viewBox="0 0 720.000000 371.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,371.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M5040 3703 c-80 -31 -91 -151 -19 -189 l29 -15 0 -849 0 -850 -360 0
-360 0 0 660 0 660 -2162 -2 c-1915 -3 -2163 -5 -2163 -18 0 -13 245 -15 2138
-18 l2137 -2 0 -665 0 -665 385 0 385 0 2 -832 c3 -825 3 -833 23 -833 19 0
20 8 25 288 l5 287 290 -290 290 -290 649 0 649 0 32 -37 c29 -34 38 -38 79
-38 58 0 95 33 103 93 5 37 2 45 -30 77 -25 25 -44 35 -66 35 -45 0 -86 -24
-101 -60 l-12 -30 -642 0 -641 0 -303 303 -302 302 0 1050 0 1050 153 152 152
153 565 0 c311 1 572 5 579 9 8 5 11 16 8 25 -6 14 -64 16 -587 16 l-581 0
-144 -146 -145 -145 0 305 0 305 28 15 c57 29 69 107 25 156 -28 31 -81 46
-113 33z"
                      />
                    </g>
                  </svg>

                  <img src={"/img/"+user.image} className="w-100" srcset="" />
                  <svg
                    version={1.0}
                    className="rightbar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="720.000000pt"
                    height="410.000000pt"
                    viewBox="0 0 720.000000 410.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,410.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M1539 4071 c-40 -41 -40 -91 1 -133 l30 -30 0 -1161 0 -1161 -156
162 -156 162 -627 -2 c-618 -3 -626 -3 -626 -23 0 -20 8 -20 616 -23 l617 -2
166 -174 166 -173 1 -484 0 -484 207 -172 c114 -95 221 -185 237 -199 17 -14
48 -41 71 -60 l41 -34 2447 0 c2025 0 2446 -2 2446 -13 0 -26 45 -57 84 -57
52 0 86 35 86 90 0 56 -34 90 -89 90 -31 0 -44 -6 -64 -30 l-26 -30 -2432 0
-2433 0 -50 42 c-28 23 -147 123 -263 221 l-213 179 0 1665 0 1664 35 33 c28
27 35 41 35 70 0 49 -44 96 -90 96 -22 0 -41 -9 -61 -29z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="right">
                  <div className="aboutuser">
                    <div className="separator">&lt;p&gt;</div>
                    <div className="devparag">
                      {" "}
                      {user.about}
                    </div>
                    <div className="separator"> &lt;/p&gt;</div>
                  </div>
                </div>
              </div>

              <div className="skills mt">
                <div className="blur"></div>
                <div className="df gap-3 mt">
                  <div className="skillbox">
                    <div className="skilltitle">technical skills</div>
                    <div className="skills-wrapper df-c">
                      {user?.technicalSkills.map((el) => (
                        <div className="df sw" key={el.id}>
                        <div className="skillname">{el.skill}</div>
                        <div className="range">
                          <motion.div
                           initial = {{width : "0px"}}
                           whileInView = {{ width: `${el.range}%` }}
                           transition = {{duration : 1, type : "tween"}}
                            className="skil js"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.84)",
                            }}
                            //animate={{ width: `${el.range}%` }}
                          ></motion.div>
                        </div>
                        <div>{el.range}%</div>
                      </div>
                      ))}
                    </div>
                  </div>
                  <div className="skillbox">
                    <div className="skilltitle">soft skills</div>
                    <div className="skills-wrapper df-c">
                      {user?.softSkills.map((el) => (
                        <div className="df sw" key={el.id}>
                          <div className="skillname">{el.skill}</div>
                          <div className="range">
                            <motion.div
                             initial = {{width : "0px"}}
                             whileInView = {{ width: `${el.range}%` }}
                             transition = {{duration : 1, type : "tween"}}
                              className="skil js"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.84)",
                              }}
                              //animate={{ width: `${el.range}%` }}
                            ></motion.div>
                          </div>
                          <div>{el.range}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="title3 mt">sneak of my projects</div>
              <div className="dfw gap3 mt container pp">
              {user.projects.map((project, index) => (
                  <div className="projectbox" key={index}>
                    <img src={"/img/"+project.image} alt={project.title} />
                    <div className="title3">{project.title}</div>
                    <p>{project.description}</p>
                    <div className="btn p0 w-100"><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></div>
                    </div>
                ))}
              </div>
            </div>
          )}
          {
            user.position =="manager" && (
                <div className="xx dfw manager">
                    <div className="profile--wrapper">
                <div className="left manager">
                  <div className="blur"></div>
                  <div className="title2">{user.name}</div>
                  <div>manager</div>
                  <div className="title3 mt">
                    {user.experience} years of experience
                  </div>
                  <div className="df">
                    <a href={user.linkedIn}>linkedIn</a>
                    <a href={user.behance}>Behance</a>
                  </div>
                </div>
                <div className="centerside">

                  <img src={"/img/"+user.image} className="w-100" srcset="" />
                        <div className="blur"></div>

                </div>
                <div className="right">
                  <div className="aboutuser">
                    <div className="devparag">
                      {" "}
                      {user.about}
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills mt">
                <div className="blur"></div>
                <div className="df gap-3 mt">
                  <div className="skillbox">
                    <div className="skilltitle">soft skills</div>
                    <div className="skills-wrapper df-c">
                      {user?.softSkills.map((el) => (
                        <div className="df sw" key={el.id}>
                          <div className="skillname">{el.skill}</div>
                          <div className="range">
                            <motion.div
                             initial = {{width : "0px"}}
                             whileInView = {{ width: `${el.range}%` }}
                             transition = {{duration : 1, type : "tween"}}
                              className="skil js"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.84)",
                              }}
                              //animate={{ width: `${el.range}%` }}
                            ></motion.div>
                          </div>
                          <div className="title3">{el.range}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="title3 mt">Achievements
and Awards</div>
              <div className="dfw gap3 mt container pp w-100">
              {user.projects.map((project, index) => (
                  <div className={`projectbox`} key={index}>
                    <img src={"/img/"+project.image} alt={project.title} />
                    <div className="title3">{project.title}</div>
                    <p>{project.description}</p>
                    <div className="btn p0 w-100"><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></div>
                    </div>
                ))}
              </div>
                </div>
            )
          }
          {user.position === "designer" && (
            <div className="xx dfw designer manager des">
              <div className="profile--wrapper">
                <div className="left manager">
                  <div className="blur"></div>
                  <div className="title2">{user.name}</div>
                  <div>designer</div>
                  <div className="title3 mt">
                    {user.experience} years of experience
                  </div>
                  <div className="df">
                    <a href={user.linkedIn}>linkedIn</a>
                    <a href={user.behance}>Behance</a>
                  </div>
                </div>
                <div className="centerside">

                  <img src={"/img/"+user.image} className="w-100" srcset="" />
                  <img className="designbar" src="/Group-1000015206.svg" alt="" srcset="" />
                </div>
                <div className="right">
                  <div className="aboutuser">
                    <div className="devparag">
                    

                      {" "}
                      {user.about}
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills mt">
                <div className="blur"></div>
                <div className="df gap-3 mt">
                  <div className="skillbox">
                    <div className="skilltitle">technical skills</div>
                    <div className="skills-wrapper df-c">
                      {user?.technicalSkills.map((el) => (
                        <div className="df sw" key={el.id}>
                        <div className="skillname">{el.skill}</div>
                        <div className="range">
                          <motion.div
                           initial = {{width : "0px"}}
                           whileInView = {{ width: `${el.range}%` }}
                           transition = {{duration : 1, type : "tween"}}
                            className="skil js"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.84)",
                            }}
                            //animate={{ width: `${el.range}%` }}
                          ></motion.div>
                        </div>
                        <div>{el.range}%</div>
                      </div>
                      ))}
                    </div>
                  </div>
                  <div className="skillbox">
                    <div className="skilltitle">soft skills</div>
                    <div className="skills-wrapper df-c">
                      {user?.softSkills.map((el) => (
                        <div className="df sw" key={el.id}>
                          <div className="skillname">{el.skill}</div>
                          <div className="range">
                            <motion.div
                             initial = {{width : "0px"}}
                             whileInView = {{ width: `${el.range}%` }}
                             transition = {{duration : 1, type : "tween"}}
                              className="skil js"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.84)",
                              }}
                              //animate={{ width: `${el.range}%` }}
                            ></motion.div>
                          </div>
                          <div>{el.range}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="title3 mt">sneak of my projects</div>
              <div className="dfw gap3 mt container pp">
              {user.projects.map((project, index) => (
                  <div className="projectbox" key={index}>
                    <img src={"/img/"+project.image} alt={project.title} />
                    <div className="title3">{project.title}</div>
                    <p>{project.description}</p>
                    <div className="btn p0 w-100"><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></div>
                    </div>
                ))}
              </div>
            </div>
          )}
              <div className="testi w-100 mt">
              <div className={`title3 ta-c mt`}>Testimonials{user.position ==="manager" && <br/>}and Recommendations</div>
              <Swiper
  pagination={pagination}
  modules={[Pagination]}
  className="mySwiper"
>
  {user?.testimnials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className={`df-c sl ta-c `}>
        <div className="blur"></div>
        <ImQuotesLeft className="commentquote"/>
        <p className={`ta-c `}>{testimonial.comment}</p>
        <hr />
        <div className="df">
          <img src={"/img/"+testimonial.image} alt="" className="commentimg" />
          <div className="df-c g0 tal">
            <div className="title3">{testimonial.name}</div>
            <div>{testimonial.position}</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

                
              </div>
        </div>
      )}
      {loading && (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}

export default UserPage;
