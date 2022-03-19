import {Button} from 'rsuite';
import {useEffect, useState} from 'react';
import styles from './Navbar.module.scss';

const Navbar = () =>{

    const [height,setHeight] = useState(0);

    useEffect(() => {
      window.addEventListener('scroll',()=>{
        setHeight(window.scrollY);
      });
    },[]);

    return (
        <div className={(height == 0 ? styles.topBarAtBase : styles.topBarAtHeight)}>
            <div className="d-flex align-items-center justify-content-between p-2">
                    <div className="px-2 mx-2">
                        <div></div>
                        <div className="pl-2"><b>Classroom</b></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-50">
                        <a href="#" className='linkInside'>About</a>
                        <a href="#" className='linkInside'>Courses</a>
                        <a href="#" className='linkInside'>Instructor</a>
                        <a href="#" className='linkInside'>News</a>
                        <a href="#" className='linkInside'>Pricing</a>
                    </div>
                    <div>
                        <Button size='sm' appearance='ghost' color="green">Sign up</Button>
                    </div>
            </div>
        </div>
    )
}
export default Navbar;