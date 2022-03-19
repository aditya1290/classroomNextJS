import styles from './TopBannerComponent.module.scss';

const TopBannerComponent = () =>{
    return (
        <div className={styles.main}>
            <div className="aimage" ></div>
            <div className="abox">
                
                    <h1 className='heading'>
                        <span className='aqua'>Learn </span>
                        <span>On Your <br/>Class</span>
                        <span className='orange'> Schedule </span>
                    </h1>
                
                
                <div className='description'>
                    An digital and effective way for the schooling with everything as easy to maintain, as easy to study. Everything digital keeps your data safe, and eco-friendly. Try out what lies ahead.</div>
            </div>
            
        </div>
    )
}
export default TopBannerComponent;