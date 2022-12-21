import styles from './ZoneBabyHeader.module.scss';

const ZoneBabyHeader = () => {
    return (
        <header className={styles.zbHeader}>
            <h1>
                <span style={{"--i": 1}}>Z</span>
                <span style={{"--i": 2}}>o</span>
                <span style={{"--i": 3}}>n</span>
                <span style={{"--i": 4}}>e</span>
                <span style={{"--i": 5}}>&nbsp;</span>
                <span style={{"--i": 6}}>B</span>
                <span style={{"--i": 7}}>a</span>
                <span style={{"--i": 8}}>b</span>
                <span style={{"--i": 9}}>y</span>
            </h1>
        </header>
    )
}

export default ZoneBabyHeader;