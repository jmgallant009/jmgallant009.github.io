//Resume Code
var resumeData;

document.addEventListener("DOMContentLoaded", function(event) {
  fetch('resume.json')
    .then( async (response) => {
        experienceData = await response.json();
        console.log("Response Code:", response.status)

        var educationContainer = document.getElementById('education-content');
        var workContainer = document.getElementById('work-content');
        var skillsContainer = document.getElementById('skills-content');
    
        //lets get the work experience data
        experienceData.work.forEach((job, index) => {
            console.log('JSON Data:', job);
            let company = job.job.company;
            console.log(company)
            let position = job.job.position;
            let location = job.job.location;
            let years = job.job.years;
            console.log(job.job.bullets)
            let bulletData = job.job.bullets
            console.log(typeof bulletData)
            let bullets = [];
            for (let bullet in bulletData) {
                console.log(bullet, bulletData[bullet]);
                bullets.push(bulletData[bullet])
            }
            console.log(bullets)
            console.log(bullets[0])
            
            let newDiv = document.createElement("div");
            console.log(index) 
            const workHTML = `
                <div class="resume-row">

                    <div class="resume-row-header">
                        <h1>${position}</h1>
                        <h2>${company}</h2>
                        <h3>${years} | ${location}</h3>
                    </div>

                    <ul class="bullets" id="bullet${index}">

                    </ul>

                </div>

                <hr>
            `;
            
            newDiv.innerHTML = workHTML;
            workContainer.appendChild(newDiv);

            let currentBulletContainer = document.getElementById('bullet' + index);
            console.log(currentBulletContainer)
            for(var i=0; i < bullets.length; i++)
                currentBulletContainer.innerHTML += "<li>"+bullets[i]+"</li>";

            });

        //Retrieve and display education
        experienceData.education.forEach((degree, index) => {
            let school = degree.degree.school;
            let major = degree.degree.major;
            let type = degree.degree.type;
            let years = degree.degree.years;
            let courseWorkData = degree.degree.courseWork
            let extracurricularsData = degree.degree.extracurriculars
            let courseWork = [];
            for (let course in courseWorkData) {
                courseWork.push(courseWorkData[course])
                }
            let extracurriculars = [];
            for (let extracurricular in extracurricularsData) {
                extracurriculars.push(extracurricularsData[extracurricular])
                }

            let newDiv = document.createElement("div");
            const educationHTML = `
                <div class="resume-row">
    
                    <div class="resume-row-header">
                        <h1>${school}</h1>
                        <h2>${type} in ${major}</h2>
                        <h3>${years}</h3>
                    </div>
    
                    <p class="courses" id="course${index}">
                    Relevant Courses: 
                    </p>

                    <p class="extracurriculars" id="extracurriculars${index}">
                    </p>
    
                </div>
    
                <hr>
            `;
            
            newDiv.innerHTML = educationHTML;
            educationContainer.appendChild(newDiv);
    
            let courseContainer = document.getElementById('course' + index);
            console.log(courseContainer)
            for(var i=0; i < courseWork.length; i++) {
                courseContainer.innerHTML += courseWork[i]
                console.log(i)
                if (i < (courseWork.length - 1)) {
                    courseContainer.innerHTML += ', '
                }
            }

            let extracurricularContainer = document.getElementById('extracurriculars' + index);
            console.log(extracurricularContainer)
            if (extracurriculars.length > 0) {
                extracurricularContainer.innerHTML += 'Clubs/Organizations: '
            }
            for(var i=0; i < extracurriculars.length; i++) {
                extracurricularContainer.innerHTML += extracurriculars[i]
                console.log(i)
                if (i < (extracurriculars.length - 1)) {
                    extracurricularContainer.innerHTML += ', '
                }
            }

            });

        //Retrieve and display SKILLZ
        
        //technical
        var skillsContainer = document.getElementById('skills-content');
        experienceData.skills.forEach((skills, index) => {
            console.log('fefes', skills)
            let skillNames = []
            let skillRatings = [];
            let skillType = skills.skill.type;
            let skillNameData = skills.skill.skills
            for (let skillName in skillNameData) {
                skillNames.push(skillNameData[skillName].name)
                skillRatings.push(skillNameData[skillName].rating)
                }

            //create the header
            const skillsHTML = `
                <table class="skill-table">
                    <caption id="skill-title">${skillType}</caption>
                        <tbody class="skill-names" id="skill-${skillType}">

                        </tbody>
                </table>
    
            `;
            let newDiv = document.createElement("div");
            newDiv.innerHTML = skillsHTML;
            skillsContainer.appendChild(newDiv);
                
            //now push them into the table
            let skillNameContent = document.getElementById('skill-'+skillType)
            for(var i=0; i < skillNames.length; i++) {
                let currentSkillName = skillNames[i]
                let currentRating = skillRatings[i]
                console.log(currentSkillName)
                let newString = `
                    <tr class="table-row">
                        <td class="skillName" id="skill-${currentSkillName}">
                            ${currentSkillName}
                        </td>

                        <td class="rating" id="rating-${currentSkillName}">
                        </td>
                    </tr>
                `
                skillNameContent.innerHTML += newString
                let currentSkillRating = document.getElementById('rating-'+currentSkillName)
                let starImage = `
                    <i class="fa fa-star"></i>
                `
                console.log(currentRating)
                for(var j=0; j < currentRating; j++) {
                    currentSkillRating.innerHTML += starImage
                }  
            }
        });
    })
    .then(() => console.log(experienceData)) 
});