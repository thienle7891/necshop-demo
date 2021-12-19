import { useState } from "react";
import Separator from "../separator";
import './style.css'
import './responsive.css'

function OurStaff() {
    const [left, setLeft] = useState(0)
    const staffList = [
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/avar1-150x150.png'
        },
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/team5-150x150.jpg'
        },
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/team2-150x150.jpg'
        },
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/team4-150x150.jpg'
        },
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/team3-150x150.jpg'
        },
        {
            name: 'liam mayers',
            comment: 'Thank you very much. I’m impressed with your service. I’ve already told my friends about your company and your quick response, thanks again!',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/avar1-150x150.png'
        },
       
    ]
   

    return (
        <div className="grid wide">
            <div className="ourStaff">
                <Separator></Separator>
                <h2 className="ourStaffTitle">OUR STAFF</h2>
                <div className="ourStaffList">
                    <div className="ourStaffRow">
                        {staffList.map((staff, index)=> (
                            <div className="col l-2 m-3 c-6" key={index}>
                             <div className="staffItem">
                                    <span className="staffImage">
                                        <img src={staff.avatar}/>
                                    </span>
                                    <h3>{staff.name.toUpperCase()}</h3>
                                    <h4>students</h4>
                                    <p>{staff.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ourStaffBtn">
                        <button>Move Staff</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStaff;