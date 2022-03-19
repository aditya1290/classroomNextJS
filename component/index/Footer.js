import styles from "./footer.module.scss";

export default function Footer(){
    return (
        <div className={styles.main}>
            <div className="px-2 mx-2">
                        <div></div>
                        <div className="pl-2"><b>Classroom</b></div>
            </div>

            <div className={styles.list}>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
            </div>

            <div className={styles.list2}>
                <a href="#">fb</a>
                <a href="#">insta</a>
                <a href="#">twitter</a>
                <a href="#">medium</a>
            </div>

        </div>
    )
}