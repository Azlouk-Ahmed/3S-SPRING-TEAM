import React, { useEffect, useState } from 'react'
import "./admin.css"
import { useFetchData } from '../hooks/useFetchData';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
    const {data} = useFetchData("http://localhost:5000/admin/team");

    const [teamdata, setteamdata] = useState([]);
    useEffect(() => {
      setteamdata(data)
    }, [data])
    
    const [inputValue, setInputValue] = useState('');
    const [skills, setSkills] = useState([]);
    const [technicalSkills, settechnicalSkills] = useState([]);
    const [technicalSkill, settechnicalSkill] = useState([]);
    const [name, setName] = useState('');
    const [descriptionp, setDescriptionp] = useState('');
    const [position, setposition] = useState("designer");
    const [softskillrange, setSoftSkillRange] = useState(50);
    const [technicalSkillsrange, setTechnicalSkillRange] = useState(50);
    const handleSoftSkillRangeChange = (e) => { // Handle change for soft skill range
        setSoftSkillRange(e.target.value);
    };
    const handletechnicalSkillsrange = (e) => { // Handle change for technical skill range
        setTechnicalSkillRange(e.target.value);
    };
    const handletechnicalSkillchange = (e) => { // Handle change for technical skill range
        settechnicalSkill(e.target.value);
    };
    
    const [behance, setbehance] = useState('');
    const [image, setImage] = useState(null);
    const [projects, setProjects] = useState([]);
    const [projectImage, setProjectImage] = useState('');
    const [experience, setexperience] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectLink, setProjectLink] = useState('');

    // Handlers for project fields
    const handleProjectImageChange = (e) => {
        setProjectImage(e.target.files[0].name);

    };

    const handleProjectTitleChange = (e) => {
        setProjectTitle(e.target.value);
    };

    const handleProjectDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
    };
    const handleaddexperience = (e) => {
        setexperience(e.target.value);
    };

    const handleProjectLinkChange = (e) => {
        setProjectLink(e.target.value);
    };

    const handleAddProject = () => {
        if (projectImage.trim() !== '' && projectTitle.trim() !== '' && projectDescription.trim() !== '' && projectLink.trim() !== '') {
            setProjects([...projects, {
                image: projectImage.trim(),
                title: projectTitle.trim(),
                description: projectDescription.trim(),
                link: projectLink.trim()
            }]);
            // Reset project fields after adding
            setProjectImage('');
            setProjectTitle('');
            setProjectDescription('');
            setProjectLink('');
        }
    };

    const handleRemoveProject = (index) => {
        const newProjects = [...projects];
        newProjects.splice(index, 1);
        setProjects(newProjects);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChangep = (e) => {
        setDescriptionp(e.target.value);
    };

    const handleaddposition = (e) => {
        setposition(e.target.value);
        console.log("position",position);
    };


    const handlebehanceChange = (e) => {
        setbehance(e.target.value);
    };


        const handleImageChange = (e) => {
            const file = e.target.files[0].name;
            setImage(file);
        };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputValue.trim() !== '') {
      setSkills([...skills, {skill : inputValue.trim(), range : softskillrange}]);
      setInputValue('');
      setSoftSkillRange(50);
    }
  };
  const handleAddtechnicalSkills = () => {
    if (technicalSkill.trim() !== '') {
      settechnicalSkills([...technicalSkills,
        {
            skill: technicalSkill.trim(),
            range: technicalSkillsrange,
        }
        ]);
      setTechnicalSkillRange(50);
      settechnicalSkill("");
    }
  };

  useEffect(() => {
    console.log("technical skills :",technicalSkills);
  
  }, [technicalSkills])
  
  const handletechnicalSkillsremove = (index) => {
    
    const newtechnicalSkills = [...technicalSkills];
    console.log("from funcrion new tech skills",newtechnicalSkills);
    newtechnicalSkills.splice(index, 1);
    console.log("from funcrion afetr splice",newtechnicalSkills);
    settechnicalSkills(newtechnicalSkills);
  };
  const handleRemoveSkill = (index) => {
    const newSkill = [...skills];
    newSkill.splice(index, 1);
    setSkills(newSkill);
  };




    const [linkedin, setlinkedin] = useState('');





    const handlelinkedinChange = (e) => {
        setlinkedin(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const formData = {
            name,
            image: image,
            position: position,
            role: 'user', 
            experience: experience,
            projects,
            softSkills: skills,
            technicalSkills,
            about: descriptionp,
            linkedIn: linkedin,
            behance,
            testimonials
        };
        console.log(formData);
        addTeamMember(formData)
            .then(data => {
                console.log('Team member added successfully:', data);
                setteamdata([...teamdata, data]);
                // Clear form fields after successful submission
                setName('');
                setImage('');
                setposition('');
                setexperience('');
                setProjects([]);
                setSkills([]);
                settechnicalSkills([]);
                setTestimonials([]);
                setDescriptionp('');
                setlinkedin('');
                setbehance('');
            })
            .catch(error => {
                console.error('Error adding team member:', error);
            });
    };
    
    async function addTeamMember(teamData) {
        try {
          const response = await axios.post('http://localhost:5000/admin/team', teamData);
          return response.data;
        } catch (error) {
          throw new Error(error.response.data.error || error.message);
        }
      }

      const [testimonials, setTestimonials] = useState([]);
      const [testimonialImage, setTestimonialImage] = useState('');
      const [userComment, setUserComment] = useState('');
      const [userPosition, setUserPosition] = useState('');
      const [userName, setUserName] = useState('');
      
      // Handlers for testimonial fields
      const handleTestimonialImageChange = (e) => {
          setTestimonialImage(e.target.files[0].name);
      };
      
      const handleUserCommentChange = (e) => {
          setUserComment(e.target.value);
      };
      
      const handleUserPositionChange = (e) => {
          setUserPosition(e.target.value);
      };
      
      const handleUserNameChange = (e) => {
          setUserName(e.target.value);
      };
      
      const handleAddTestimonial = () => {
          if (testimonialImage.trim() !== '' && userComment.trim() !== '' && userPosition.trim() !== '' && userName.trim() !== '') {
              setTestimonials([...testimonials, {
                  image: testimonialImage.trim(),
                  comment: userComment.trim(),
                  position: userPosition.trim(),
                  name: userName.trim()
              }]);
              setTestimonialImage('');
              setUserComment('');
              setUserPosition('');
              setUserName('');
          }
      };
      
      const handleRemoveTestimonial = (index) => {
          const newTestimonials = [...testimonials];
          newTestimonials.splice(index, 1);
          setTestimonials(newTestimonials);
      };


  return (
    <div className="adminpage addportfolio">
         <form className="formcontent box" onSubmit={handleSubmit}>
        <div className="notification-header">
      </div>
        <div className="row">
        <h4>Basic Details</h4>
                    <div className="input-group input-group-icon">
                    <h4>name</h4>
                        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="input-group input-group-icon">
                    <h4>experience</h4>
                        <input type="number" placeholder="experience" value={experience} onChange={handleaddexperience} />
                    </div>
                    <div className="input-group input-group-icon">
                    <h4>about</h4>
                        <input type="text" placeholder="Description" value={descriptionp} onChange={handleDescriptionChangep} />
                    </div>
                    <div className="input-group input-group-icon">
                    <h4>linked in link</h4>
                        <input type="text" placeholder="linkedin" value={linkedin} onChange={handlelinkedinChange} />

                    </div>
                    <div className="input-group input-group-icon">
                    <h4>behance link</h4>
                        <input type="text" placeholder="behance" value={behance} onChange={handlebehanceChange} />
                    </div>
                    <div className="input-group input-group-icon">
                    <h4>position</h4>
                        <select value={position} onChange={handleaddposition}>
                            <option value="designer">designer</option>
                            <option value="manager">manager</option>
                            <option value="webdev">web developper</option>
                        </select>
                    </div>
                    <div className="input-group input-group-icon df-c">
                        <label htmlFor="img">Image</label>
                        <input type="file" id='img' placeholder="Image" onChange={handleImageChange} />
                    </div>
        <div className="input-group input-group-icon df-c">
            <h4>soft skills</h4>
            <div className="df">

                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter skill"
            />

                <input
                type="number"
                value={softskillrange}
                onChange={handleSoftSkillRangeChange}
                placeholder="Enter range"
            />
            <div className="btn" onClick={handleAddSkill}>Add</div>
            </div>
      <div className="df">
        {skills.map((skill, index) => (
          <div key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
            <div className="df addskill">
              {skill.skill}
              <span onClick={() => handleRemoveSkill(index)}>X</span>
            </div>
          </div>
        ))}
      </div>
        </div>
        <div className="input-group input-group-icon df-c">
            <h4>technical Skills</h4>
            <div className="df">

                <input
                type="text"
                value={technicalSkill}
                onChange={handletechnicalSkillchange}
                placeholder="Enter technicalSkills"
            />
                <input
                type="number"
                value={technicalSkillsrange}
                onChange={handletechnicalSkillsrange}
                placeholder="Enter technicalSkills"
            />
            <div className="btn" onClick={handleAddtechnicalSkills}>Add</div>
            </div>
      <div className="df">
        {technicalSkills.map((aw, index) => (
          <div key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
            <div className="">
                <div className="df addskill">
                {aw.skill}

              <span className='cancel' onClick={() => handletechnicalSkillsremove(index)}>X</span>
                </div>
            </div>
          </div>
        ))}
      </div>
        </div>

        <div className="input-group input-group-icon">
                    <h4>Project Details</h4>
                    <div className="df">
                    <input type="file" placeholder="Image URL"  onChange={handleProjectImageChange} />
                    <input type="text" placeholder="Title" value={projectTitle} onChange={handleProjectTitleChange} />
                    <input type="text" placeholder="Description" value={projectDescription} onChange={handleProjectDescriptionChange} />
                    <input type="text" placeholder="Link" value={projectLink} onChange={handleProjectLinkChange} />

                    <button type="button" className="btn" onClick={handleAddProject}>Add</button>
                    </div>
                </div>
                <div className=" df">
                    {projects.map((project, index) => (
                        <div key={index} className="df addskill">
                            {project.title}
                            <span className='cancel' onClick={() => handleRemoveProject(index)}>X</span>
                        </div>
                    ))}
                </div>
        
        </div>
        <div className="input-group input-group-icon">
    <h4>Testimonial Details</h4>
    <div className="df">
        <input type="file" placeholder="Image URL" onChange={handleTestimonialImageChange} />
        <input type="text" placeholder="Comment" value={userComment} onChange={handleUserCommentChange} />
        <input type="text" placeholder="Position" value={userPosition} onChange={handleUserPositionChange} />
        <input type="text" placeholder="Name" value={userName} onChange={handleUserNameChange} />
        <button type="button" className="btn" onClick={handleAddTestimonial}>Add</button>
    </div>
</div>
<div className="df">
    {testimonials.map((testimonial, index) => (
        <div key={index} className="df addskill">
            {testimonial.comment}
            <span className='cancel' onClick={() => handleRemoveTestimonial(index)}>X</span>
        </div>
    ))}
</div>
        <div className="row">
        </div>
        <button className="btn w-100 mt">submit</button>
    </form>
    <table>
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Position</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {teamdata?.map((item, index) => (
            <tr key={index}>
                <td><Link to={"user/"+item._id}>edit info</Link> </td>
                <td>{item.image}</td>
                <td>{item.name}</td>
                <td>{item.experience}</td>
                <td>{item.position}</td>
                <td>{item.about}</td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Admin