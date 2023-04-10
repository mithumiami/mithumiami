import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Profile.module.css'
import styled from "styled-components";

function Profile() {
    return (
    <div className={styles.container}>
        <div className={styles.title}>PROFILE</div>
        <div className= {styles.row}>
            <div className={styles.imagebox}>
                <Image 
                    className={styles.image}
                    src="/profile.jpg"
                    alt="profile_image"
                    width={600}
                    height= {450}
                    objectFit= "contain"
                />
            </div>
            {/* フォント変える */}
            <div className={styles.text}>
                <div className= {styles.text_title}>Mithumiami</div>
                <div className= {styles.detail}>
                    経歴<br/>
                    2020.03 大阪大学外国語学部卒業。<br/>
                    2020.04 アパレルメーカーで勤務。<br/>
                    2022.09 Webエンジニアに転職。<br/>    
                </div>
                <div className= {styles.detail}>
                    趣味<br/>
                    ゲーム...valorant, ポケモン, lol<br/>
                    アイドル...欅坂46, 日向坂46<br/>
                    綺麗な景色や展示を見に行くこと<br/>       
                </div>

            </div>
        </div>
    </div>
    )
   }
   
   export default Profile