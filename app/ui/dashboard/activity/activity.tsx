import React from 'react'
import Styles from './activity.module.css'
export default function Activity() {
    return (
        <div className={Styles.activity}>
            <div className={Styles.tabs}>
                <span className={Styles.active}>Activity</span>
                <span>Comments</span>
                <span>Versions</span>
            </div>

            <div className={Styles.timeline}>
                <div className={Styles.item}>
                    <span className={Styles.dot}></span>

                    <div className={Styles.content}>
                        <span className={Styles.time}>Yesterday</span>
                        <div className={Styles.row}>
                            <img src="/profile_1.png" />
                            <img src="/profile_2.png" />
                            <p>
                                You shared edit access to <b className={Styles.link}>Miko</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={Styles.item}>
                    <span className={Styles.dot}></span>

                    <div className={Styles.content}>
                        <span className={Styles.time}>Apr 1, 2022</span>
                        <div className={Styles.row}>
                            <img src="/profile_3.png" />
                            <p>
                                You changed <b className={Styles.link}>Maszeh.glyph</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={Styles.item}>
                    <span className={Styles.dot}></span>

                    <div className={Styles.content}>
                        <span className={Styles.time}>Feb 21, 2022</span>
                        <div className={Styles.row}>
                            <img src="/profile_4.png" />
                            <p>You added tag</p>
                            <span className={Styles.tag}>Work</span>
                            <span className={`${Styles.tag} ${Styles.light}`}>+2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
