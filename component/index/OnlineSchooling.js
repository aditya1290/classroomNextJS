import { Button } from "rsuite";
import styles from "./OnlineSchooling.module.scss";

export default function OnlineSchooling(){
    return (
        <div className={styles.main}>
            <div className={styles.col1}>
                <h3>Get Admission in top digital schools.</h3>
                <p>Choose from 1000+ schools anywhere from the world and study what you want, from where you want.</p>
            </div>
            <div className={styles.col2}>
                <div className={styles.midElement}></div>
            </div>
            <div className={styles.instructor}>
                <div className={styles.div1}>
                    <h3>Become an instructor</h3>
                    <p>You can join any school or can start your own personal tuitions. You can host meetings, can take assessment, and can evaluate all your students in your own personal space.</p>
                </div>
                <div className={styles.div2}>
                </div>
            </div>

            <div className={styles.learnAnywhere}>
                <div className={styles.div2}></div>
                <div className={styles.div1}>
                    <h3>Learn from Anywhere</h3>
                    <p>Take classes on the go with our app and website. Stream or attend them from anywhere in the world, from where you learn best.</p>
                </div>
            </div>

            <div className={styles.RegisterNow}>
                
                    <h1>Register Now to get started!</h1>
                    <p>Whether you are a school management, a private teacher or a student, this app will take you all in and provide the best of what schools offer.</p>
                
            </div>
        </div>
    );
}